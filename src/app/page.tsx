'use client';

import { useState, useEffect, useCallback } from 'react';
import { Location, Child, BudgetLevel, TimeOfDay, WeatherData, Activity, Place } from '@/types';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import LocationWeather from '@/components/LocationWeather';
import KidsForm from '@/components/KidsForm';
import DateTimePicker from '@/components/DateTimePicker';
import BudgetSelector from '@/components/BudgetSelector';
import ResultsList from '@/components/ResultsList';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import FeedbackBox from '@/components/FeedbackBox';

export default function Home() {
  const { t, locale } = useLanguage();

  const [location, setLocation] = useState<Location | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const [children, setChildren] = useState<Child[]>([
    { id: 'child-1', age: 5, gender: 'any' },
  ]);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<TimeOfDay>('afternoon');
  const [budget, setBudget] = useState<BudgetLevel>('any');

  const [activities, setActivities] = useState<Activity[]>([]);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (loc: Location) => {
    setWeatherLoading(true);
    try {
      const response = await fetch(`/api/weather?lat=${loc.lat}&lng=${loc.lng}`);
      if (!response.ok) throw new Error('Weather fetch failed');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error('Weather fetch error:', err);
    } finally {
      setWeatherLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location, fetchWeather]);

  async function findActivities() {
    if (!location || !weather) {
      setError(t('selectLocationFirst') as string);
      return;
    }

    setIsLoading(true);
    setError(null);
    setActivities([]);
    setSummary('');

    try {
      const placesResponse = await fetch(
        `/api/places?lat=${location.lat}&lng=${location.lng}&city=${encodeURIComponent(location.city)}`
      );

      let places: Place[] = [];
      if (placesResponse.ok) {
        const placesData = await placesResponse.json();
        places = placesData.places || [];
      }

      const recommendResponse = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location,
          weather,
          children,
          dateTime: {
            date: selectedDate.toISOString(),
            timeOfDay: selectedTime,
          },
          budget,
          places,
          locale,
        }),
      });

      if (!recommendResponse.ok) {
        const errorData = await recommendResponse.json();
        throw new Error(errorData.error || (t('recommendationError') as string));
      }

      const result = await recommendResponse.json();
      setActivities(result.activities);
      setSummary(result.summary);
    } catch (err) {
      console.error('Error finding activities:', err);
      setError(err instanceof Error ? err.message : (t('recommendationError') as string));
    } finally {
      setIsLoading(false);
    }
  }

  const canSearch = location && weather && children.length > 0;

  return (
    <main className="min-h-screen pb-12">
      {/* Language switcher */}
      <div className="max-w-6xl mx-auto px-4 pt-3 flex justify-end">
        <LanguageSwitcher />
      </div>

      {/* Header */}
      <header className="pt-4 pb-4 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
            {t('headerTitle1') as string}<br /><span className="bg-gradient-to-r from-primary-500 via-pink-500 to-accent-500 bg-clip-text text-transparent">{t('headerTitle2') as string}</span>
          </h1>
          <p className="text-gray-500 text-lg">
            {t('tagline') as string}
          </p>
        </div>
      </header>

      {/* Location/Weather bar */}
      <div className="max-w-xl mx-auto px-4 mt-4 mb-8 opacity-0 animate-fade-in-up animate-delay-1">
        <LocationWeather
          location={location}
          weather={weather}
          selectedDate={selectedDate}
          weatherLoading={weatherLoading}
          onLocationChange={setLocation}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            <div className="opacity-0 animate-fade-in-up animate-delay-2">
              <KidsForm
                children={children}
                onChildrenChange={setChildren}
              />
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-3">
              <DateTimePicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onDateChange={setSelectedDate}
                onTimeChange={setSelectedTime}
              />
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-4">
              <BudgetSelector
                selectedBudget={budget}
                onBudgetChange={setBudget}
              />
            </div>

            {/* Desktop search button */}
            <div className="hidden lg:block opacity-0 animate-fade-in-up animate-delay-4">
              <button
                onClick={findActivities}
                disabled={!canSearch || isLoading}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-pink-600 text-white text-lg font-semibold rounded-2xl hover:from-primary-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    {t('searchInProgress') as string}
                  </span>
                ) : (
                  t('findActivities') as string
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <ResultsList
              activities={activities}
              summary={summary}
              isLoading={isLoading}
              error={error}
              onRetry={findActivities}
            />
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <FeedbackBox />
      </div>

      {/* Mobile sticky search button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50">
        <button
          onClick={findActivities}
          disabled={!canSearch || isLoading}
          className="w-full py-4 bg-gradient-to-r from-primary-600 to-pink-600 text-white text-lg font-semibold rounded-2xl hover:from-primary-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              {t('searchInProgress') as string}
            </span>
          ) : (
            t('findActivities') as string
          )}
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-gradient-to-r from-violet-50 to-orange-50 border-t border-purple-100">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p className="font-medium text-gray-600">{t('footerTagline') as string}</p>
          <div className="mt-2 flex items-center justify-center gap-3 text-xs">
            <Link href="/impressum" className="hover:text-gray-700 transition-colors">
              {t('impressum') as string}
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              {t('privacyPolicy') as string}
            </Link>
            <span className="text-gray-300">|</span>
            <details className="inline-block">
              <summary className="cursor-pointer hover:text-gray-600 transition-colors">
                {t('footerPoweredBy') as string}
              </summary>
              <p className="mt-2 text-xs text-gray-400">
                {t('footerCredits') as string}
              </p>
            </details>
          </div>
        </div>
      </footer>

      {/* Spacer for mobile sticky button */}
      <div className="lg:hidden h-20" />
    </main>
  );
}
