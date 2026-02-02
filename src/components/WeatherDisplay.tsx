'use client';

import { WeatherData, DailyForecast } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';
import { WEATHER_CODE_KEYS } from '@/lib/i18n';

interface WeatherDisplayProps {
  weather: WeatherData | null;
  selectedDate: Date;
  isLoading: boolean;
}

export default function WeatherDisplay({ weather, selectedDate, isLoading }: WeatherDisplayProps) {
  const { t, locale } = useLanguage();

  function getWeatherDescription(weatherCode: number, fallback: string): string {
    const codeInfo = WEATHER_CODE_KEYS[weatherCode];
    if (codeInfo) {
      const translated = t(codeInfo.key as Parameters<typeof t>[0]);
      return typeof translated === 'string' ? translated : fallback;
    }
    return fallback;
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-lg">🌤️</span>
          {t('weather') as string}
        </h2>
        <div className="animate-warm-pulse space-y-3">
          <div className="h-16 bg-gradient-to-r from-violet-100 to-orange-100 rounded-xl" />
          <div className="flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 w-16 bg-gradient-to-b from-violet-100 to-orange-50 rounded-xl flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-lg">🌤️</span>
          {t('weather') as string}
        </h2>
        <p className="text-gray-500 text-sm">{t('selectLocationForWeather') as string}</p>
      </div>
    );
  }

  const selectedDateStr = selectedDate.toISOString().split('T')[0];
  const selectedForecast = weather.forecast.find(f => f.date === selectedDateStr);
  const isToday = selectedDateStr === new Date().toISOString().split('T')[0];

  const displayWeather = isToday
    ? {
        icon: weather.current.icon,
        description: getWeatherDescription(weather.current.weatherCode, weather.current.description),
        temperature: weather.current.temperature,
        temperatureMax: selectedForecast?.temperatureMax,
        temperatureMin: selectedForecast?.temperatureMin,
        precipitationProbability: selectedForecast?.precipitationProbability,
      }
    : selectedForecast
    ? {
        icon: selectedForecast.icon,
        description: getWeatherDescription(selectedForecast.weatherCode, selectedForecast.description),
        temperature: selectedForecast.temperatureMax,
        temperatureMax: selectedForecast.temperatureMax,
        temperatureMin: selectedForecast.temperatureMin,
        precipitationProbability: selectedForecast.precipitationProbability,
      }
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-lg">🌤️</span>
        {t('weather') as string}
      </h2>

      {displayWeather && (
        <div className="mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-100 to-orange-100 flex items-center justify-center">
              <span className="text-5xl">{displayWeather.icon}</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-800">
                {displayWeather.temperature}°C
              </p>
              <p className="text-gray-600">{displayWeather.description}</p>
              {displayWeather.temperatureMax !== undefined && displayWeather.temperatureMin !== undefined && (
                <p className="text-sm text-gray-500">
                  {displayWeather.temperatureMin}° / {displayWeather.temperatureMax}°
                </p>
              )}
              {displayWeather.precipitationProbability !== undefined && displayWeather.precipitationProbability > 0 && (
                <p className="text-sm text-blue-600">
                  💧 {displayWeather.precipitationProbability}% {t('precipitationChance') as string}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-500 mb-2">{t('sevenDayForecast') as string}</p>
        <div className="flex gap-2 overflow-x-auto pb-2 scroll-fade scrollbar-hide">
          {weather.forecast.slice(0, 7).map((day) => (
            <ForecastDay
              key={day.date}
              forecast={day}
              isSelected={day.date === selectedDateStr}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ForecastDay({ forecast, isSelected, locale }: { forecast: DailyForecast; isSelected: boolean; locale: string }) {
  const date = new Date(forecast.date);
  const dayName = date.toLocaleDateString(locale, { weekday: 'short' });
  const dayNum = date.getDate();

  return (
    <div
      className={`flex-shrink-0 w-18 p-2.5 rounded-xl text-center transition-all duration-200 ${
        isSelected
          ? 'bg-gradient-to-b from-primary-100 to-primary-200 ring-2 ring-primary-400 shadow-sm scale-105'
          : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      <p className="text-xs font-medium text-gray-600">{dayName}</p>
      <p className="text-xs text-gray-400">{dayNum}.</p>
      <p className="text-2xl my-1">{forecast.icon}</p>
      <p className="text-sm font-semibold text-gray-800">{forecast.temperatureMax}°</p>
      <p className="text-xs text-gray-500">{forecast.temperatureMin}°</p>
    </div>
  );
}
