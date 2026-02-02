import { NextRequest, NextResponse } from 'next/server';
import { fetchWeather } from '@/lib/weather';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

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

  try {
    const weather = await fetchWeather(latitude, longitude);
    return NextResponse.json(weather);
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Wetterdaten' },
      { status: 500 }
    );
  }
}
