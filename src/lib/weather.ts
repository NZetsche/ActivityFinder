import { WeatherData, DailyForecast, WEATHER_CODES } from '@/types';

const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    precipitation_probability_max: number[];
  };
}

export async function fetchWeather(lat: number, lng: number): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lng.toString(),
    current: 'temperature_2m,weather_code',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max',
    timezone: 'auto',
    forecast_days: '14',
  });

  const response = await fetch(`${OPEN_METEO_BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data: OpenMeteoResponse = await response.json();

  const currentWeatherInfo = WEATHER_CODES[data.current.weather_code] || {
    description: 'Unknown',
    icon: '\u2753',
    isGoodOutdoor: true,
  };

  const forecast: DailyForecast[] = data.daily.time.map((date, index) => {
    const weatherInfo = WEATHER_CODES[data.daily.weather_code[index]] || {
      description: 'Unknown',
      icon: '\u2753',
      isGoodOutdoor: true,
    };

    return {
      date,
      temperatureMax: Math.round(data.daily.temperature_2m_max[index]),
      temperatureMin: Math.round(data.daily.temperature_2m_min[index]),
      weatherCode: data.daily.weather_code[index],
      description: weatherInfo.description,
      icon: weatherInfo.icon,
      precipitationProbability: data.daily.precipitation_probability_max[index],
    };
  });

  return {
    current: {
      temperature: Math.round(data.current.temperature_2m),
      weatherCode: data.current.weather_code,
      description: currentWeatherInfo.description,
      icon: currentWeatherInfo.icon,
      isGoodOutdoor: currentWeatherInfo.isGoodOutdoor,
    },
    forecast,
  };
}

export function getWeatherForDate(weather: WeatherData, date: Date): DailyForecast | undefined {
  const dateStr = date.toISOString().split('T')[0];
  return weather.forecast.find(f => f.date === dateStr);
}

export function shouldRecommendIndoor(weather: WeatherData, date: Date): boolean {
  const dayForecast = getWeatherForDate(weather, date);

  if (!dayForecast) {
    return !weather.current.isGoodOutdoor;
  }

  const weatherInfo = WEATHER_CODES[dayForecast.weatherCode];
  if (!weatherInfo?.isGoodOutdoor) return true;
  if (dayForecast.precipitationProbability > 50) return true;
  if (dayForecast.temperatureMax < 5 || dayForecast.temperatureMax > 35) return true;

  return false;
}
