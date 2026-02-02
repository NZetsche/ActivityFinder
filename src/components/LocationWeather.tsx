'use client';

import { useState, useEffect } from 'react';
import { Location, WeatherData } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';
import { getCurrentLocation, geocodePostalCode, geocodeCityName } from '@/lib/geolocation';
import { WEATHER_CODE_KEYS } from '@/lib/i18n';

interface LocationWeatherProps {
  location: Location | null;
  weather: WeatherData | null;
  selectedDate: Date;
  weatherLoading: boolean;
  onLocationChange: (location: Location) => void;
}

export default function LocationWeather({
  location,
  weather,
  selectedDate,
  weatherLoading,
  onLocationChange,
}: LocationWeatherProps) {
  const { t, locale } = useLanguage();
  const [isLocating, setIsLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!location) {
      requestLocation();
    }
  }, []);

  async function requestLocation() {
    setIsLocating(true);
    setError(null);

    const result = await getCurrentLocation();
    setIsLocating(false);

    if (result.success && result.location) {
      onLocationChange(result.location);
      setEditing(false);
    } else {
      // Error keys are returned from geolocation - translate them
      const errorKey = result.error || 'geolocationUnknownError';
      const translated = t(errorKey as Parameters<typeof t>[0]);
      setError(typeof translated === 'string' ? translated : errorKey);
      setEditing(true);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    setIsLocating(true);
    setError(null);

    // Try postal code first (digits only, any length)
    const isPostalCode = /^\d+$/.test(trimmed);

    if (isPostalCode) {
      const result = await geocodePostalCode(trimmed);
      setIsLocating(false);

      if (result.success && result.location) {
        onLocationChange(result.location);
        setEditing(false);
        setQuery('');
      } else {
        const errorKey = result.error || 'postalCodeNotFound';
        const translated = t(errorKey as Parameters<typeof t>[0]);
        setError(typeof translated === 'string' ? translated : errorKey);
      }
      return;
    }

    // Fall back to city name geocoding (worldwide)
    const result = await geocodeCityName(trimmed);
    setIsLocating(false);

    if (result.success && result.location) {
      onLocationChange(result.location);
      setEditing(false);
      setQuery('');
    } else {
      const errorKey = result.error || 'locationNotFound';
      const translated = t(errorKey as Parameters<typeof t>[0]);
      setError(typeof translated === 'string' ? translated : errorKey);
    }
  }

  // Translate weather description via weather code
  function getWeatherDescription(weatherCode: number, fallbackDescription: string): string {
    const codeInfo = WEATHER_CODE_KEYS[weatherCode];
    if (codeInfo) {
      const translated = t(codeInfo.key as Parameters<typeof t>[0]);
      return typeof translated === 'string' ? translated : fallbackDescription;
    }
    return fallbackDescription;
  }

  // Determine weather for selected date
  const selectedDateStr = selectedDate.toISOString().split('T')[0];
  const selectedForecast = weather?.forecast.find(f => f.date === selectedDateStr);
  const isToday = selectedDateStr === new Date().toISOString().split('T')[0];

  const displayWeather = weather
    ? isToday
      ? {
          icon: weather.current.icon,
          description: getWeatherDescription(weather.current.weatherCode, weather.current.description),
          temperature: weather.current.temperature,
        }
      : selectedForecast
      ? {
          icon: selectedForecast.icon,
          description: getWeatherDescription(selectedForecast.weatherCode, selectedForecast.description),
          temperature: selectedForecast.temperatureMax,
        }
      : null
    : null;

  // Loading state
  if (isLocating) {
    return (
      <div className="bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center gap-3 text-gray-500 text-sm">
        <div className="animate-spin h-4 w-4 border-2 border-primary-500 border-t-transparent rounded-full" />
        <span>{t('locating') as string}</span>
      </div>
    );
  }

  // No location or editing
  if (!location || editing) {
    return (
      <div className="bg-white rounded-2xl shadow-sm px-4 py-3">
        {error && (
          <p className="text-xs text-amber-600 mb-2">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">📍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('enterPostalOrCity') as string}
            className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[36px]"
            autoFocus
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="px-3 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors min-h-[36px]"
          >
            OK
          </button>
          {location && (
            <button
              type="button"
              onClick={() => { setEditing(false); setError(null); }}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              {t('cancel') as string}
            </button>
          )}
        </form>
        {!location && (
          <button
            onClick={requestLocation}
            className="mt-2 text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            🎯 {t('detectAutomatically') as string}
          </button>
        )}
      </div>
    );
  }

  // Location + weather in one slim bar
  return (
    <div
      className="bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={() => setEditing(true)}
      title={t('clickToChange') as string}
    >
      {/* Location */}
      <span className="text-gray-400 mr-2 text-sm">📍</span>
      <span className="font-medium text-gray-800 text-sm">{location.city}</span>

      {/* Divider */}
      <div className="mx-3 h-5 w-px bg-gray-200" />

      {/* Weather */}
      {weatherLoading ? (
        <div className="animate-spin h-4 w-4 border-2 border-sky-400 border-t-transparent rounded-full" />
      ) : displayWeather ? (
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-lg">{displayWeather.icon}</span>
          <span className="font-medium text-gray-800">{displayWeather.temperature}°C</span>
          <span className="text-gray-400 mx-0.5">·</span>
          <span className="text-gray-500">{displayWeather.description}</span>
        </div>
      ) : (
        <span className="text-xs text-gray-400">{t('weatherUnavailable') as string}</span>
      )}
    </div>
  );
}
