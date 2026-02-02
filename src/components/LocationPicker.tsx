'use client';

import { useState, useEffect } from 'react';
import { Location } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';
import { getCurrentLocation, geocodePostalCode, geocodeCityName } from '@/lib/geolocation';

interface LocationPickerProps {
  location: Location | null;
  onLocationChange: (location: Location) => void;
}

export default function LocationPicker({ location, onLocationChange }: LocationPickerProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showManual, setShowManual] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!location) {
      requestLocation();
    }
  }, []);

  async function requestLocation() {
    setIsLoading(true);
    setError(null);

    const result = await getCurrentLocation();

    setIsLoading(false);

    if (result.success && result.location) {
      onLocationChange(result.location);
    } else {
      const errorKey = result.error || 'geolocationUnknownError';
      const translated = t(errorKey as Parameters<typeof t>[0]);
      setError(typeof translated === 'string' ? translated : errorKey);
      setShowManual(true);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setError(null);

    const isPostalCode = /^\d+$/.test(trimmed);

    if (isPostalCode) {
      const result = await geocodePostalCode(trimmed);
      setIsLoading(false);

      if (result.success && result.location) {
        onLocationChange(result.location);
        setShowManual(false);
        setQuery('');
      } else {
        const errorKey = result.error || 'postalCodeNotFound';
        const translated = t(errorKey as Parameters<typeof t>[0]);
        setError(typeof translated === 'string' ? translated : errorKey);
      }
      return;
    }

    const result = await geocodeCityName(trimmed);
    setIsLoading(false);

    if (result.success && result.location) {
      onLocationChange(result.location);
      setShowManual(false);
      setQuery('');
    } else {
      const errorKey = result.error || 'cityNotFound';
      const translated = t(errorKey as Parameters<typeof t>[0]);
      setError(typeof translated === 'string' ? translated : errorKey);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center text-lg">📍</span>
        {t('locating') as string}
      </h2>

      {isLoading && (
        <div className="flex items-center gap-3 text-gray-600">
          <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full" />
          <span>{t('locating') as string}</span>
        </div>
      )}

      {!isLoading && location && !showManual && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">{location.city}</p>
              {location.postalCode && (
                <p className="text-sm text-gray-500">{location.postalCode}</p>
              )}
            </div>
            <button
              onClick={() => setShowManual(true)}
              className="text-sm text-primary-600 hover:text-primary-700 underline"
            >
              {t('clickToChange') as string}
            </button>
          </div>
        </div>
      )}

      {!isLoading && (showManual || (!location && error)) && (
        <div className="space-y-4">
          {error && (
            <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-xl">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('enterPostalOrCity') as string}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!query.trim()}
              className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              OK
            </button>
          </form>

          {location && (
            <button
              onClick={() => setShowManual(false)}
              className="w-full text-sm text-gray-500 hover:text-gray-700"
            >
              {t('cancel') as string}
            </button>
          )}

          {!location && (
            <button
              onClick={requestLocation}
              className="w-full text-sm text-primary-600 hover:text-primary-700 flex items-center justify-center gap-2"
            >
              <span>🎯</span>
              {t('detectAutomatically') as string}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
