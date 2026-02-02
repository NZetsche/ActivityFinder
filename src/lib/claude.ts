import Anthropic from '@anthropic-ai/sdk';
import {
  RecommendationRequest,
  Activity,
  BudgetLevel,
} from '@/types';
import { shouldRecommendIndoor, getWeatherForDate } from './weather';
import { formatDistance, getGoogleMapsUrl } from './places';

const BUDGET_PROMPT_LABELS: Record<BudgetLevel, string> = {
  free: 'Free only',
  cheap: 'Budget-friendly (under 20)',
  medium: 'Medium (20-50)',
  any: 'Any budget',
};

const TIME_PROMPT_LABELS: Record<string, string> = {
  morning: 'Morning (8-12)',
  afternoon: 'Afternoon (12-18)',
  allDay: 'All day',
};

export async function getRecommendations(
  request: RecommendationRequest,
  apiKey: string
): Promise<{ activities: Activity[]; summary: string }> {
  const client = new Anthropic({ apiKey });

  const locale = request.locale || 'en';
  const preferIndoor = shouldRecommendIndoor(request.weather, request.dateTime.date);
  const dayForecast = getWeatherForDate(request.weather, request.dateTime.date);

  const childrenDescription = request.children
    .map((c, i) => {
      const genderStr = c.gender !== 'any' ? `, ${c.gender}` : '';
      return `Child ${i + 1}: ${c.age} years old${genderStr}`;
    })
    .join('\n');

  const ageRange = {
    min: Math.min(...request.children.map(c => c.age)),
    max: Math.max(...request.children.map(c => c.age)),
  };

  const placesContext = request.places
    .slice(0, 20)
    .map((p) => {
      const distanceStr = p.distance ? formatDistance(p.distance) : 'Unknown';
      const ratingStr = p.rating ? `${p.rating}/5 (${p.userRatingsTotal} reviews)` : 'No rating';
      const priceStr = p.priceLevel !== undefined ? '\u20ac'.repeat(p.priceLevel + 1) : 'Unknown';
      const openStr = p.openingHours?.isOpen ? 'Open' : 'Closed/Unknown';

      return `- ${p.name}
  Address: ${p.address}
  Distance: ${distanceStr}
  Rating: ${ratingStr}
  Price level: ${priceStr}
  Status: ${openStr}
  Types: ${p.types.join(', ')}`;
    })
    .join('\n\n');

  const prompt = `You are a helpful assistant that helps families find suitable activities for their children.

IMPORTANT: Respond entirely in the language indicated by the locale code "${locale}". All text fields in your JSON response (name, description, address, priceRange, ageRange, openingHours, reasoning, tags, summary) MUST be in this language.

CONTEXT:
- Location: ${request.location.city} (${request.location.lat}, ${request.location.lng})
- Date: ${request.dateTime.date.toISOString().split('T')[0]}
- Time of day: ${TIME_PROMPT_LABELS[request.dateTime.timeOfDay]}
- Weather: ${dayForecast?.icon || request.weather.current.icon} ${dayForecast?.description || request.weather.current.description}, ${dayForecast?.temperatureMax || request.weather.current.temperature}\u00b0C${dayForecast ? `, precipitation probability: ${dayForecast.precipitationProbability}%` : ''}
- Budget: ${BUDGET_PROMPT_LABELS[request.budget]}
${preferIndoor ? '- NOTE: Due to weather conditions, indoor activities should be preferred!' : ''}

CHILDREN:
${childrenDescription}
Age range: ${ageRange.min}-${ageRange.max} years

NEARBY PLACES:
${placesContext || 'No places found'}

TASK:
Select the 6-8 best activities for this family. Consider:
1. Age suitability for ALL children (${ageRange.min}-${ageRange.max} years)
2. Weather conditions (${preferIndoor ? 'prefer indoor' : 'outdoor possible'})
3. Budget constraint: ${BUDGET_PROMPT_LABELS[request.budget]}
4. Time of day and opening hours
5. Ratings and quality

You may also suggest general activities not in the places list (e.g. local events, playgrounds, parks).

Respond in the following JSON format:
{
  "summary": "Brief summary of recommendations (1-2 sentences)",
  "activities": [
    {
      "id": "unique-id-1",
      "name": "Activity name",
      "description": "Description (1-2 sentences)",
      "address": "Full address",
      "distance": "e.g. 2.5 km",
      "priceRange": "e.g. Free, \u20ac5-10, \u20ac20-30",
      "ageRange": "e.g. 3-12 years",
      "openingHours": "e.g. 10:00-18:00",
      "isIndoor": true/false,
      "websiteUrl": "URL if known",
      "reasoning": "Why this activity is recommended (1 sentence)",
      "tags": ["Indoor", "Free", "For toddlers", etc.],
      "source": "google_places" or "suggestion"
    }
  ]
}`;

  const response = await client.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  });

  const textContent = response.content.find(c => c.type === 'text');
  if (!textContent || textContent.type !== 'text') {
    throw new Error('No text response from Claude');
  }

  const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Could not parse JSON from Claude response');
  }

  const result = JSON.parse(jsonMatch[0]);

  const activities: Activity[] = result.activities.map((a: Activity & { id?: string }) => {
    const matchingPlace = request.places.find(
      p => p.name.toLowerCase().includes(a.name.toLowerCase()) ||
           a.name.toLowerCase().includes(p.name.toLowerCase())
    );

    return {
      ...a,
      id: a.id || `activity-${Math.random().toString(36).substr(2, 9)}`,
      mapsUrl: matchingPlace
        ? getGoogleMapsUrl(matchingPlace)
        : `https://www.google.com/maps/search/${encodeURIComponent(a.name + ' ' + request.location.city)}`,
      imageUrl: matchingPlace?.photos?.[0],
    };
  });

  return {
    activities,
    summary: result.summary,
  };
}

export function filterByBudget(activities: Activity[], budget: BudgetLevel): Activity[] {
  if (budget === 'any') return activities;

  return activities.filter(activity => {
    const price = activity.priceRange.toLowerCase();

    switch (budget) {
      case 'free':
        return price.includes('free') || price.includes('kostenlos') || price.includes('gratis') || price.includes('gratuit');
      case 'cheap':
        return price.includes('free') || price.includes('kostenlos') || price.includes('gratis') || (price.includes('\u20ac') && !price.includes('\u20ac\u20ac'));
      case 'medium':
        return true;
      default:
        return true;
    }
  });
}
