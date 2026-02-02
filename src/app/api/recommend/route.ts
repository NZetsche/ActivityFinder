import { NextRequest, NextResponse } from 'next/server';
import { getRecommendations } from '@/lib/claude';
import { RecommendationRequest, Child, BudgetLevel, TimeOfDay } from '@/types';

interface RequestBody {
  location: {
    lat: number;
    lng: number;
    city: string;
  };
  weather: RecommendationRequest['weather'];
  children: Array<{
    id: string;
    age: number;
    gender: 'boy' | 'girl' | 'any';
  }>;
  dateTime: {
    date: string;
    timeOfDay: TimeOfDay;
  };
  budget: BudgetLevel;
  places: RecommendationRequest['places'];
  locale?: string;
}

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    const body: RequestBody = await request.json();

    if (!body.location || !body.weather || !body.children || !body.dateTime || !body.budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (body.children.length === 0) {
      return NextResponse.json(
        { error: 'At least one child must be specified' },
        { status: 400 }
      );
    }

    const recommendationRequest: RecommendationRequest = {
      location: body.location,
      weather: body.weather,
      children: body.children as Child[],
      dateTime: {
        date: new Date(body.dateTime.date),
        timeOfDay: body.dateTime.timeOfDay,
      },
      budget: body.budget,
      places: body.places || [],
      locale: body.locale,
    };

    const result = await getRecommendations(recommendationRequest, apiKey);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Recommendation API error:', error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Error creating recommendations: ${errorMessage}` },
      { status: 500 }
    );
  }
}
