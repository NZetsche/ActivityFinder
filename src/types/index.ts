export interface Location {
  lat: number;
  lng: number;
  city: string;
  postalCode?: string;
}

export interface Child {
  id: string;
  age: number;
  gender: 'boy' | 'girl' | 'any';
}

export type BudgetLevel = 'free' | 'cheap' | 'medium' | 'any';

export type TimeOfDay = 'morning' | 'afternoon' | 'allDay';

export interface DateTimeSelection {
  date: Date;
  timeOfDay: TimeOfDay;
}

export interface WeatherData {
  current: {
    temperature: number;
    weatherCode: number;
    description: string;
    icon: string;
    isGoodOutdoor: boolean;
  };
  forecast: DailyForecast[];
}

export interface DailyForecast {
  date: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: number;
  description: string;
  icon: string;
  precipitationProbability: number;
}

export interface Place {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  distance?: number;
  rating?: number;
  userRatingsTotal?: number;
  priceLevel?: number;
  openingHours?: {
    isOpen: boolean;
    weekdayText?: string[];
  };
  photos?: string[];
  website?: string;
  phoneNumber?: string;
  types: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  address: string;
  distance: string;
  priceRange: string;
  ageRange: string;
  openingHours?: string;
  isIndoor: boolean;
  imageUrl?: string;
  websiteUrl?: string;
  mapsUrl: string;
  reasoning: string;
  tags: string[];
  source: 'google_places' | 'event' | 'suggestion';
}

export interface RecommendationRequest {
  location: Location;
  weather: WeatherData;
  children: Child[];
  dateTime: DateTimeSelection;
  budget: BudgetLevel;
  places: Place[];
  locale?: string;
}

export interface RecommendationResponse {
  activities: Activity[];
  summary: string;
}

export const WEATHER_CODES: Record<number, { description: string; icon: string; isGoodOutdoor: boolean }> = {
  0: { description: 'Clear', icon: '\u2600\ufe0f', isGoodOutdoor: true },
  1: { description: 'Mostly clear', icon: '\ud83c\udf24\ufe0f', isGoodOutdoor: true },
  2: { description: 'Partly cloudy', icon: '\u26c5', isGoodOutdoor: true },
  3: { description: 'Cloudy', icon: '\u2601\ufe0f', isGoodOutdoor: true },
  45: { description: 'Fog', icon: '\ud83c\udf2b\ufe0f', isGoodOutdoor: false },
  48: { description: 'Fog with rime', icon: '\ud83c\udf2b\ufe0f', isGoodOutdoor: false },
  51: { description: 'Light drizzle', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  53: { description: 'Moderate drizzle', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  55: { description: 'Heavy drizzle', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  61: { description: 'Light rain', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  63: { description: 'Moderate rain', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  65: { description: 'Heavy rain', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  66: { description: 'Freezing rain', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  67: { description: 'Heavy freezing rain', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  71: { description: 'Light snow', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  73: { description: 'Moderate snow', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  75: { description: 'Heavy snow', icon: '\u2744\ufe0f', isGoodOutdoor: false },
  77: { description: 'Snow grains', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  80: { description: 'Light rain showers', icon: '\ud83c\udf26\ufe0f', isGoodOutdoor: false },
  81: { description: 'Moderate rain showers', icon: '\ud83c\udf26\ufe0f', isGoodOutdoor: false },
  82: { description: 'Heavy rain showers', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
  85: { description: 'Light snow showers', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  86: { description: 'Heavy snow showers', icon: '\u2744\ufe0f', isGoodOutdoor: false },
  95: { description: 'Thunderstorm', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
  96: { description: 'Thunderstorm with hail', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
  99: { description: 'Thunderstorm with heavy hail', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
};
