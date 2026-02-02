import { Place, Location } from '@/types';

const GOOGLE_PLACES_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

const KID_FRIENDLY_TYPES = [
  'amusement_park',
  'aquarium',
  'zoo',
  'museum',
  'park',
  'bowling_alley',
  'movie_theater',
  'library',
  'shopping_mall',
  'tourist_attraction',
];

interface PlaceResult {
  place_id: string;
  name: string;
  formatted_address?: string;
  vicinity?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  rating?: number;
  user_ratings_total?: number;
  price_level?: number;
  opening_hours?: {
    open_now?: boolean;
    weekday_text?: string[];
  };
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
  website?: string;
  formatted_phone_number?: string;
  types: string[];
}

interface NearbySearchResponse {
  results: PlaceResult[];
  status: string;
  next_page_token?: string;
}

export async function searchNearbyPlaces(
  location: Location,
  apiKey: string,
  radius: number = 10000
): Promise<Place[]> {
  const allPlaces: Place[] = [];

  const searchPromises = KID_FRIENDLY_TYPES.map(async (type) => {
    const params = new URLSearchParams({
      location: `${location.lat},${location.lng}`,
      radius: radius.toString(),
      type,
      language: 'de',
      key: apiKey,
    });

    try {
      const response = await fetch(
        `${GOOGLE_PLACES_BASE_URL}/nearbysearch/json?${params}`
      );

      if (!response.ok) {
        console.error(`Places API error for type ${type}: ${response.status}`);
        return [];
      }

      const data: NearbySearchResponse = await response.json();

      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        console.error(`Places API status for type ${type}: ${data.status}`);
        return [];
      }

      return data.results.map((place) => mapPlaceResult(place, location, apiKey));
    } catch (error) {
      console.error(`Error fetching places for type ${type}:`, error);
      return [];
    }
  });

  const results = await Promise.all(searchPromises);
  results.forEach((places) => allPlaces.push(...places));

  const uniquePlaces = Array.from(
    new Map(allPlaces.map((p) => [p.id, p])).values()
  );

  return uniquePlaces.sort((a, b) => (a.distance || 0) - (b.distance || 0));
}

export async function getPlaceDetails(
  placeId: string,
  apiKey: string
): Promise<Place | null> {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'place_id,name,formatted_address,geometry,rating,user_ratings_total,price_level,opening_hours,photos,website,formatted_phone_number,types',
    language: 'de',
    key: apiKey,
  });

  try {
    const response = await fetch(
      `${GOOGLE_PLACES_BASE_URL}/details/json?${params}`
    );

    if (!response.ok) {
      console.error(`Place details API error: ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      console.error(`Place details API status: ${data.status}`);
      return null;
    }

    return mapPlaceResult(data.result, undefined, apiKey);
  } catch (error) {
    console.error('Error fetching place details:', error);
    return null;
  }
}

function mapPlaceResult(
  place: PlaceResult,
  userLocation?: Location,
  apiKey?: string
): Place {
  let distance: number | undefined;

  if (userLocation) {
    distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      place.geometry.location.lat,
      place.geometry.location.lng
    );
  }

  const photos = place.photos?.slice(0, 3).map((photo) =>
    apiKey
      ? `${GOOGLE_PLACES_BASE_URL}/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=${apiKey}`
      : ''
  ).filter(Boolean);

  return {
    id: place.place_id,
    name: place.name,
    address: place.formatted_address || place.vicinity || '',
    location: {
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
    },
    distance,
    rating: place.rating,
    userRatingsTotal: place.user_ratings_total,
    priceLevel: place.price_level,
    openingHours: place.opening_hours
      ? {
          isOpen: place.opening_hours.open_now ?? false,
          weekdayText: place.opening_hours.weekday_text,
        }
      : undefined,
    photos,
    website: place.website,
    phoneNumber: place.formatted_phone_number,
    types: place.types,
  };
}

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

export function getGoogleMapsUrl(place: Place): string {
  return `https://www.google.com/maps/place/?q=place_id:${place.id}`;
}
