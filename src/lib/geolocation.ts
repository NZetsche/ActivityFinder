import { Location } from '@/types';

export interface GeolocationResult {
  success: boolean;
  location?: Location;
  error?: string;
}

export async function getCurrentLocation(): Promise<GeolocationResult> {
  if (typeof window === 'undefined' || !navigator.geolocation) {
    return {
      success: false,
      error: 'geolocationNotSupported',
    };
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const cityName = await reverseGeocode(latitude, longitude);

        resolve({
          success: true,
          location: {
            lat: latitude,
            lng: longitude,
            city: cityName,
          },
        });
      },
      (error) => {
        let errorKey: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorKey = 'geolocationDenied';
            break;
          case error.POSITION_UNAVAILABLE:
            errorKey = 'geolocationUnavailable';
            break;
          case error.TIMEOUT:
            errorKey = 'geolocationTimeout';
            break;
          default:
            errorKey = 'geolocationUnknownError';
        }

        resolve({
          success: false,
          error: errorKey,
        });
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  });
}

async function reverseGeocode(lat: number, lng: number): Promise<string> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    if (!response.ok) {
      throw new Error('Reverse geocoding failed');
    }

    const data = await response.json();

    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.municipality ||
      'Unknown location'
    );
  } catch (error) {
    console.error('Reverse geocoding error:', error);
    return 'Unknown location';
  }
}

export async function geocodePostalCode(postalCode: string): Promise<GeolocationResult> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&postalcode=${encodeURIComponent(postalCode)}&limit=1`
    );

    if (!response.ok) {
      throw new Error('Geocoding failed');
    }

    const data = await response.json();

    if (data.length === 0) {
      return {
        success: false,
        error: 'postalCodeNotFound',
      };
    }

    const result = data[0];

    return {
      success: true,
      location: {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        city: result.display_name.split(',')[0],
        postalCode,
      },
    };
  } catch (error) {
    console.error('Postal code geocoding error:', error);
    return {
      success: false,
      error: 'geocodingError',
    };
  }
}

export async function geocodeCityName(cityName: string): Promise<GeolocationResult> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}&limit=1`
    );

    if (!response.ok) {
      throw new Error('Geocoding failed');
    }

    const data = await response.json();

    if (data.length === 0) {
      return {
        success: false,
        error: 'cityNotFound',
      };
    }

    const result = data[0];
    const displayCity = result.display_name.split(',')[0];

    return {
      success: true,
      location: {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        city: displayCity,
      },
    };
  } catch (error) {
    console.error('City geocoding error:', error);
    return {
      success: false,
      error: 'geocodingError',
    };
  }
}
