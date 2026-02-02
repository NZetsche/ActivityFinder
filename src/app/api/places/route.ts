import { NextRequest, NextResponse } from 'next/server';
import { searchNearbyPlaces } from '@/lib/places';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const city = searchParams.get('city');
  const radius = searchParams.get('radius');

  if (!lat || !lng) {
    return NextResponse.json(
      { error: 'Latitude und Longitude sind erforderlich' },
      { status: 400 }
    );
  }

  const latitude = parseFloat(lat);
  const longitude = parseFloat(lng);

  if (isNaN(latitude) || isNaN(longitude)) {
    return NextResponse.json(
      { error: 'Ungültige Koordinaten' },
      { status: 400 }
    );
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Google Places API Key nicht konfiguriert' },
      { status: 500 }
    );
  }

  try {
    const places = await searchNearbyPlaces(
      { lat: latitude, lng: longitude, city: city || '' },
      apiKey,
      radius ? parseInt(radius) : 10000
    );

    return NextResponse.json({ places });
  } catch (error) {
    console.error('Places API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Orte' },
      { status: 500 }
    );
  }
}
