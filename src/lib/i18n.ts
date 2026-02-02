export type SupportedLocale = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt' | 'ja' | 'zh';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const LOCALE_DISPLAY_NAMES: Record<SupportedLocale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Espa\u00f1ol',
  fr: 'Fran\u00e7ais',
  it: 'Italiano',
  pt: 'Portugu\u00eas',
  ja: '\u65e5\u672c\u8a9e',
  zh: '\u4e2d\u6587',
};

type TranslationStrings = {
  // Header
  headerTitle1: string;
  headerTitle2: string;
  tagline: string;
  footerTagline: string;
  footerPoweredBy: string;
  footerCredits: string;

  // Search buttons
  findActivities: string;
  searchInProgress: string;

  // Location
  locating: string;
  enterPostalOrCity: string;
  detectAutomatically: string;
  cancel: string;
  clickToChange: string;
  weatherUnavailable: string;
  locationNotFound: string;
  postalCodeNotFound: string;
  cityNotFound: string;
  geolocationDenied: string;
  geolocationUnavailable: string;
  geolocationTimeout: string;
  geolocationUnknownError: string;
  geocodingError: string;
  geolocationNotSupported: string;

  // Weather
  weather: string;
  selectLocationForWeather: string;
  sevenDayForecast: string;
  precipitationChance: string;
  unknown: string;

  // Kids
  children: string;
  child: string;
  childCount: (count: number) => string;
  childLabel: (index: number) => string;
  remove: string;
  addChild: string;
  age: string;
  gender: string;
  genderBoy: string;
  genderGirl: string;
  genderAny: string;
  underOneYear: string;
  yearSingular: string;
  yearPlural: string;

  // Date/Time
  when: string;
  date: string;
  today: string;
  tomorrow: string;
  chooseDate: string;
  timeOfDay: string;
  timeMorning: string;
  timeAfternoon: string;
  timeAllDay: string;

  // Budget
  budget: string;
  budgetFree: string;
  budgetCheap: string;
  budgetMedium: string;
  budgetAny: string;

  // Results
  recommendations: string;
  activities: string;
  activitiesCount: (count: number) => string;
  searchingActivities: string;
  searchingSubtext: string;
  readyForAdventure: string;
  fillInDetails: string;
  retry: string;
  selectLocationFirst: string;

  // Activity Card
  planRoute: string;
  website: string;
  whyRecommended: string;
  suitableFor: string;
  indoor: string;

  // Weather descriptions
  weatherClear: string;
  weatherMostlyClear: string;
  weatherPartlyCloudy: string;
  weatherCloudy: string;
  weatherFog: string;
  weatherFogRime: string;
  weatherDrizzleLight: string;
  weatherDrizzleModerate: string;
  weatherDrizzleHeavy: string;
  weatherRainLight: string;
  weatherRainModerate: string;
  weatherRainHeavy: string;
  weatherFreezingRain: string;
  weatherFreezingRainHeavy: string;
  weatherSnowLight: string;
  weatherSnowModerate: string;
  weatherSnowHeavy: string;
  weatherSnowGrains: string;
  weatherShowersLight: string;
  weatherShowersModerate: string;
  weatherShowersHeavy: string;
  weatherSnowShowersLight: string;
  weatherSnowShowersHeavy: string;
  weatherThunderstorm: string;
  weatherThunderstormHail: string;
  weatherThunderstormHailHeavy: string;

  // Load more
  showMore: string;

  // Legal / footer links
  impressum: string;
  privacyPolicy: string;

  // Cookie consent
  cookieTitle: string;
  cookieDescription: string;
  cookieAcceptAll: string;
  cookieAcceptEssential: string;
  cookieSettings: string;
  cookieEssentialLabel: string;
  cookieEssentialDescription: string;
  cookieAnalyticsLabel: string;
  cookieAnalyticsDescription: string;
  cookieSaveSettings: string;

  // Whimsical loading messages
  loadingMessages: string[];

  // API errors
  apiKeyNotConfigured: string;
  missingRequiredFields: string;
  atLeastOneChild: string;
  invalidJson: string;
  recommendationError: string;

  // Feedback
  feedbackPlaceholder: string;
  feedbackSend: string;
  feedbackThanks: string;
};

const en: TranslationStrings = {
  headerTitle1: 'Find perfect activities',
  headerTitle2: 'for your kids',
  tagline: 'Personalized activity suggestions \u2014 family time made easy!',
  footerTagline: 'ActivityFinder \u2014 Plan family outings easily',
  footerPoweredBy: 'Powered by AI',
  footerCredits: 'Weather data from Open-Meteo | Places from Google Places | AI recommendations by Claude',

  findActivities: 'Find activities',
  searchInProgress: 'Searching...',

  locating: 'Detecting location...',
  enterPostalOrCity: 'Enter postal code or city',
  detectAutomatically: 'Detect automatically',
  cancel: 'Cancel',
  clickToChange: 'Click to change',
  weatherUnavailable: 'Weather unavailable',
  locationNotFound: 'Location not found',
  postalCodeNotFound: 'Postal code not found. Please check your input.',
  cityNotFound: 'City not found. Please check your input.',
  geolocationDenied: 'Location access denied. Please enter a city manually.',
  geolocationUnavailable: 'Location could not be determined. Please enter a city manually.',
  geolocationTimeout: 'Location request timed out. Please enter a city manually.',
  geolocationUnknownError: 'An unknown error occurred. Please enter a city manually.',
  geocodingError: 'Error searching for location. Please try again.',
  geolocationNotSupported: 'Geolocation is not supported by this browser.',

  weather: 'Weather',
  selectLocationForWeather: 'Select a location to show weather',
  sevenDayForecast: '7-day forecast',
  precipitationChance: 'precipitation chance',
  unknown: 'Unknown',

  children: 'Children',
  child: 'Child',
  childCount: (count: number) => `${count} ${count === 1 ? 'child' : 'children'}`,
  childLabel: (index: number) => `Child ${index}`,
  remove: 'Remove',
  addChild: 'Add child',
  age: 'Age',
  gender: 'Gender',
  genderBoy: 'Boy',
  genderGirl: 'Girl',
  genderAny: 'Any',
  underOneYear: 'Under 1 year',
  yearSingular: 'year',
  yearPlural: 'years',

  when: 'When?',
  date: 'Date',
  today: 'Today',
  tomorrow: 'Tomorrow',
  chooseDate: 'Choose date',
  timeOfDay: 'Time of day',
  timeMorning: 'Morning',
  timeAfternoon: 'Afternoon',
  timeAllDay: 'All day',

  budget: 'Budget',
  budgetFree: 'Free',
  budgetCheap: 'Cheap (\u20ac1-20)',
  budgetMedium: 'Medium (\u20ac20-50)',
  budgetAny: 'Any',

  recommendations: 'Recommendations',
  activities: 'activities',
  activitiesCount: (count: number) => `${count} activities`,
  searchingActivities: 'Searching for activities...',
  searchingSubtext: 'Considering weather, age, and budget',
  readyForAdventure: 'Ready for an adventure?',
  fillInDetails: 'Fill in the details on the left and click "Find activities"',
  retry: 'Try again',
  selectLocationFirst: 'Please select a location',

  planRoute: 'Plan route',
  website: 'Website',
  whyRecommended: 'Why recommended:',
  suitableFor: 'Suitable for',
  indoor: 'Indoor',

  weatherClear: 'Clear',
  weatherMostlyClear: 'Mostly clear',
  weatherPartlyCloudy: 'Partly cloudy',
  weatherCloudy: 'Cloudy',
  weatherFog: 'Fog',
  weatherFogRime: 'Fog with rime',
  weatherDrizzleLight: 'Light drizzle',
  weatherDrizzleModerate: 'Moderate drizzle',
  weatherDrizzleHeavy: 'Heavy drizzle',
  weatherRainLight: 'Light rain',
  weatherRainModerate: 'Moderate rain',
  weatherRainHeavy: 'Heavy rain',
  weatherFreezingRain: 'Freezing rain',
  weatherFreezingRainHeavy: 'Heavy freezing rain',
  weatherSnowLight: 'Light snow',
  weatherSnowModerate: 'Moderate snow',
  weatherSnowHeavy: 'Heavy snow',
  weatherSnowGrains: 'Snow grains',
  weatherShowersLight: 'Light rain showers',
  weatherShowersModerate: 'Moderate rain showers',
  weatherShowersHeavy: 'Heavy rain showers',
  weatherSnowShowersLight: 'Light snow showers',
  weatherSnowShowersHeavy: 'Heavy snow showers',
  weatherThunderstorm: 'Thunderstorm',
  weatherThunderstormHail: 'Thunderstorm with hail',
  weatherThunderstormHailHeavy: 'Thunderstorm with heavy hail',

  showMore: 'Show more',

  impressum: 'Legal Notice',
  privacyPolicy: 'Privacy Policy',

  cookieTitle: 'Cookie Settings',
  cookieDescription: 'We use cookies to ensure the basic functionality of the website. You can optionally enable analytics cookies to help us improve.',
  cookieAcceptAll: 'Accept all',
  cookieAcceptEssential: 'Essential only',
  cookieSettings: 'Settings',
  cookieEssentialLabel: 'Essential',
  cookieEssentialDescription: 'Required for the website to function. Cannot be disabled.',
  cookieAnalyticsLabel: 'Analytics',
  cookieAnalyticsDescription: 'Help us understand how visitors use the website.',
  cookieSaveSettings: 'Save settings',

  loadingMessages: [
    'Asking the squirrels for local tips...',
    'Checking if the playground swings are free...',
    'Consulting tiny adventure experts...',
    'Packing imaginary snacks for the trip...',
    'Teaching the GPS to think like a 5-year-old...',
    'Scanning for puddles worth jumping in...',
    'Negotiating with the weather gods...',
    'Counting how many ducks are at the pond...',
  ],

  apiKeyNotConfigured: 'Anthropic API Key not configured',
  missingRequiredFields: 'Missing required fields',
  atLeastOneChild: 'At least one child must be specified',
  invalidJson: 'Invalid JSON format',
  recommendationError: 'Error creating recommendations',

  feedbackPlaceholder: 'Happy with the results? What could we do better?',
  feedbackSend: 'Send feedback',
  feedbackThanks: 'Thank you for your feedback!',
};

const de: TranslationStrings = {
  headerTitle1: 'Finde perfekte Aktivit\u00e4ten',
  headerTitle2: 'f\u00fcr Deine Kinder',
  tagline: 'Personalisierte Aktivit\u00e4tsvorschl\u00e4ge \u2014 Familienzeit leicht gemacht!',
  footerTagline: 'ActivityFinder \u2014 Familienausfl\u00fcge einfach planen',
  footerPoweredBy: 'Powered by AI',
  footerCredits: 'Wetter-Daten von Open-Meteo | Orte von Google Places | KI-Empfehlungen von Claude',

  findActivities: 'Aktivit\u00e4ten finden',
  searchInProgress: 'Suche l\u00e4uft...',

  locating: 'Standort wird ermittelt...',
  enterPostalOrCity: 'PLZ oder Stadt eingeben',
  detectAutomatically: 'Automatisch ermitteln',
  cancel: 'Abbrechen',
  clickToChange: 'Klicken zum \u00c4ndern',
  weatherUnavailable: 'Wetter nicht verf\u00fcgbar',
  locationNotFound: 'Ort nicht gefunden',
  postalCodeNotFound: 'Postleitzahl nicht gefunden. Bitte \u00fcberpr\u00fcfe die Eingabe.',
  cityNotFound: 'Stadt nicht gefunden. Bitte \u00fcberpr\u00fcfe die Eingabe.',
  geolocationDenied: 'Standortzugriff wurde verweigert. Bitte w\u00e4hle eine Stadt manuell aus.',
  geolocationUnavailable: 'Standort konnte nicht ermittelt werden. Bitte w\u00e4hle eine Stadt manuell aus.',
  geolocationTimeout: 'Standortabfrage hat zu lange gedauert. Bitte w\u00e4hle eine Stadt manuell aus.',
  geolocationUnknownError: 'Ein unbekannter Fehler ist aufgetreten. Bitte w\u00e4hle eine Stadt manuell aus.',
  geocodingError: 'Fehler bei der Standortsuche. Bitte versuche es erneut.',
  geolocationNotSupported: 'Geolocation wird von diesem Browser nicht unterst\u00fctzt.',

  weather: 'Wetter',
  selectLocationForWeather: 'W\u00e4hle einen Standort, um das Wetter anzuzeigen',
  sevenDayForecast: '7-Tage-Vorhersage',
  precipitationChance: 'Regenwahrscheinlichkeit',
  unknown: 'Unbekannt',

  children: 'Kinder',
  child: 'Kind',
  childCount: (count: number) => `${count} ${count === 1 ? 'Kind' : 'Kinder'}`,
  childLabel: (index: number) => `Kind ${index}`,
  remove: 'Entfernen',
  addChild: 'Kind hinzuf\u00fcgen',
  age: 'Alter',
  gender: 'Geschlecht',
  genderBoy: 'Junge',
  genderGirl: 'M\u00e4dchen',
  genderAny: 'Egal',
  underOneYear: 'Unter 1 Jahr',
  yearSingular: 'Jahr',
  yearPlural: 'Jahre',

  when: 'Wann?',
  date: 'Datum',
  today: 'Heute',
  tomorrow: 'Morgen',
  chooseDate: 'Datum w\u00e4hlen',
  timeOfDay: 'Tageszeit',
  timeMorning: 'Vormittag',
  timeAfternoon: 'Nachmittag',
  timeAllDay: 'Ganzer Tag',

  budget: 'Budget',
  budgetFree: 'Kostenlos',
  budgetCheap: 'G\u00fcnstig (\u20ac1-20)',
  budgetMedium: 'Mittel (\u20ac20-50)',
  budgetAny: 'Egal',

  recommendations: 'Empfehlungen',
  activities: 'Aktivit\u00e4ten',
  activitiesCount: (count: number) => `${count} Aktivit\u00e4ten`,
  searchingActivities: 'Suche passende Aktivit\u00e4ten...',
  searchingSubtext: 'Wetter, Alter und Budget werden ber\u00fccksichtigt',
  readyForAdventure: 'Bereit f\u00fcr ein Abenteuer?',
  fillInDetails: 'F\u00fclle die Angaben links aus und klicke auf "Aktivit\u00e4ten finden"',
  retry: 'Erneut versuchen',
  selectLocationFirst: 'Bitte w\u00e4hle einen Standort aus',

  planRoute: 'Route planen',
  website: 'Website',
  whyRecommended: 'Warum empfohlen:',
  suitableFor: 'Geeignet f\u00fcr',
  indoor: 'Indoor',

  weatherClear: 'Klar',
  weatherMostlyClear: '\u00dcberwiegend klar',
  weatherPartlyCloudy: 'Teilweise bew\u00f6lkt',
  weatherCloudy: 'Bew\u00f6lkt',
  weatherFog: 'Nebel',
  weatherFogRime: 'Nebel mit Reif',
  weatherDrizzleLight: 'Leichter Nieselregen',
  weatherDrizzleModerate: 'M\u00e4\u00dfiger Nieselregen',
  weatherDrizzleHeavy: 'Starker Nieselregen',
  weatherRainLight: 'Leichter Regen',
  weatherRainModerate: 'M\u00e4\u00dfiger Regen',
  weatherRainHeavy: 'Starker Regen',
  weatherFreezingRain: 'Gefrierender Regen',
  weatherFreezingRainHeavy: 'Starker gefrierender Regen',
  weatherSnowLight: 'Leichter Schneefall',
  weatherSnowModerate: 'M\u00e4\u00dfiger Schneefall',
  weatherSnowHeavy: 'Starker Schneefall',
  weatherSnowGrains: 'Schneek\u00f6rner',
  weatherShowersLight: 'Leichte Regenschauer',
  weatherShowersModerate: 'M\u00e4\u00dfige Regenschauer',
  weatherShowersHeavy: 'Starke Regenschauer',
  weatherSnowShowersLight: 'Leichte Schneeschauer',
  weatherSnowShowersHeavy: 'Starke Schneeschauer',
  weatherThunderstorm: 'Gewitter',
  weatherThunderstormHail: 'Gewitter mit Hagel',
  weatherThunderstormHailHeavy: 'Gewitter mit starkem Hagel',

  showMore: 'Mehr',

  impressum: 'Impressum',
  privacyPolicy: 'Datenschutz',

  cookieTitle: 'Cookie-Einstellungen',
  cookieDescription: 'Wir verwenden Cookies, um die grundlegende Funktionalit\u00e4t der Website sicherzustellen. Optional k\u00f6nnen Sie Analyse-Cookies aktivieren, um uns bei der Verbesserung zu helfen.',
  cookieAcceptAll: 'Alle akzeptieren',
  cookieAcceptEssential: 'Nur essenzielle',
  cookieSettings: 'Einstellungen',
  cookieEssentialLabel: 'Essenziell',
  cookieEssentialDescription: 'Erforderlich f\u00fcr die Funktion der Website. Kann nicht deaktiviert werden.',
  cookieAnalyticsLabel: 'Analyse',
  cookieAnalyticsDescription: 'Helfen uns zu verstehen, wie Besucher die Website nutzen.',
  cookieSaveSettings: 'Einstellungen speichern',

  loadingMessages: [
    'Fragen die Eichh\u00f6rnchen nach Geheimtipps...',
    'Pr\u00fcfen ob die Schaukeln frei sind...',
    'Befragen kleine Abenteuer-Experten...',
    'Packen imagin\u00e4re Snacks f\u00fcr den Ausflug...',
    'Bringen dem Navi bei, wie ein Kind zu denken...',
    'Suchen Pf\u00fctzen zum Reinspringen...',
    'Verhandeln mit den Wetterg\u00f6ttern...',
    'Z\u00e4hlen die Enten am Teich...',
  ],

  apiKeyNotConfigured: 'Anthropic API Key nicht konfiguriert',
  missingRequiredFields: 'Fehlende erforderliche Felder',
  atLeastOneChild: 'Mindestens ein Kind muss angegeben werden',
  invalidJson: 'Ung\u00fcltiges JSON-Format',
  recommendationError: 'Fehler beim Erstellen der Empfehlungen',

  feedbackPlaceholder: 'Zufrieden mit den Ergebnissen? Was k\u00f6nnten wir besser machen?',
  feedbackSend: 'Feedback senden',
  feedbackThanks: 'Vielen Dank f\u00fcr Dein Feedback!',
};

const es: TranslationStrings = {
  headerTitle1: 'Encuentra actividades perfectas',
  headerTitle2: 'para tus hijos',
  tagline: 'Sugerencias personalizadas \u2014 \u00a1Tiempo en familia f\u00e1cil!',
  footerTagline: 'ActivityFinder \u2014 Planifica excursiones familiares f\u00e1cilmente',
  footerPoweredBy: 'Powered by AI',
  footerCredits: 'Datos meteorol\u00f3gicos de Open-Meteo | Lugares de Google Places | Recomendaciones IA de Claude',

  findActivities: 'Buscar actividades',
  searchInProgress: 'Buscando...',

  locating: 'Detectando ubicaci\u00f3n...',
  enterPostalOrCity: 'Introduce c\u00f3digo postal o ciudad',
  detectAutomatically: 'Detectar autom\u00e1ticamente',
  cancel: 'Cancelar',
  clickToChange: 'Clic para cambiar',
  weatherUnavailable: 'Clima no disponible',
  locationNotFound: 'Ubicaci\u00f3n no encontrada',
  postalCodeNotFound: 'C\u00f3digo postal no encontrado. Verifica tu entrada.',
  cityNotFound: 'Ciudad no encontrada. Verifica tu entrada.',
  geolocationDenied: 'Acceso a ubicaci\u00f3n denegado. Introduce una ciudad manualmente.',
  geolocationUnavailable: 'No se pudo determinar la ubicaci\u00f3n. Introduce una ciudad manualmente.',
  geolocationTimeout: 'La solicitud de ubicaci\u00f3n ha expirado. Introduce una ciudad manualmente.',
  geolocationUnknownError: 'Ocurri\u00f3 un error desconocido. Introduce una ciudad manualmente.',
  geocodingError: 'Error al buscar la ubicaci\u00f3n. Int\u00e9ntalo de nuevo.',
  geolocationNotSupported: 'La geolocalizaci\u00f3n no es compatible con este navegador.',

  weather: 'Clima',
  selectLocationForWeather: 'Selecciona una ubicaci\u00f3n para ver el clima',
  sevenDayForecast: 'Pron\u00f3stico de 7 d\u00edas',
  precipitationChance: 'probabilidad de lluvia',
  unknown: 'Desconocido',

  children: 'Hijos',
  child: 'Hijo',
  childCount: (count: number) => `${count} ${count === 1 ? 'hijo' : 'hijos'}`,
  childLabel: (index: number) => `Hijo ${index}`,
  remove: 'Eliminar',
  addChild: 'A\u00f1adir hijo',
  age: 'Edad',
  gender: 'G\u00e9nero',
  genderBoy: 'Ni\u00f1o',
  genderGirl: 'Ni\u00f1a',
  genderAny: 'Cualquiera',
  underOneYear: 'Menor de 1 a\u00f1o',
  yearSingular: 'a\u00f1o',
  yearPlural: 'a\u00f1os',

  when: '\u00bfCu\u00e1ndo?',
  date: 'Fecha',
  today: 'Hoy',
  tomorrow: 'Ma\u00f1ana',
  chooseDate: 'Elegir fecha',
  timeOfDay: 'Hora del d\u00eda',
  timeMorning: 'Ma\u00f1ana',
  timeAfternoon: 'Tarde',
  timeAllDay: 'Todo el d\u00eda',

  budget: 'Presupuesto',
  budgetFree: 'Gratis',
  budgetCheap: 'Econ\u00f3mico (\u20ac1-20)',
  budgetMedium: 'Medio (\u20ac20-50)',
  budgetAny: 'Cualquiera',

  recommendations: 'Recomendaciones',
  activities: 'actividades',
  activitiesCount: (count: number) => `${count} actividades`,
  searchingActivities: 'Buscando actividades...',
  searchingSubtext: 'Considerando clima, edad y presupuesto',
  readyForAdventure: '\u00bfListo para una aventura?',
  fillInDetails: 'Completa los datos a la izquierda y haz clic en "Buscar actividades"',
  retry: 'Reintentar',
  selectLocationFirst: 'Por favor selecciona una ubicaci\u00f3n',

  planRoute: 'Planificar ruta',
  website: 'Sitio web',
  whyRecommended: 'Por qu\u00e9 se recomienda:',
  suitableFor: 'Adecuado para',
  indoor: 'Interior',

  weatherClear: 'Despejado',
  weatherMostlyClear: 'Mayormente despejado',
  weatherPartlyCloudy: 'Parcialmente nublado',
  weatherCloudy: 'Nublado',
  weatherFog: 'Niebla',
  weatherFogRime: 'Niebla con escarcha',
  weatherDrizzleLight: 'Llovizna ligera',
  weatherDrizzleModerate: 'Llovizna moderada',
  weatherDrizzleHeavy: 'Llovizna fuerte',
  weatherRainLight: 'Lluvia ligera',
  weatherRainModerate: 'Lluvia moderada',
  weatherRainHeavy: 'Lluvia fuerte',
  weatherFreezingRain: 'Lluvia helada',
  weatherFreezingRainHeavy: 'Lluvia helada fuerte',
  weatherSnowLight: 'Nevada ligera',
  weatherSnowModerate: 'Nevada moderada',
  weatherSnowHeavy: 'Nevada fuerte',
  weatherSnowGrains: 'Granos de nieve',
  weatherShowersLight: 'Chubascos ligeros',
  weatherShowersModerate: 'Chubascos moderados',
  weatherShowersHeavy: 'Chubascos fuertes',
  weatherSnowShowersLight: 'Chubascos de nieve ligeros',
  weatherSnowShowersHeavy: 'Chubascos de nieve fuertes',
  weatherThunderstorm: 'Tormenta',
  weatherThunderstormHail: 'Tormenta con granizo',
  weatherThunderstormHailHeavy: 'Tormenta con granizo fuerte',

  showMore: 'Ver m\u00e1s',

  impressum: 'Aviso legal',
  privacyPolicy: 'Pol\u00edtica de privacidad',

  cookieTitle: 'Configuraci\u00f3n de cookies',
  cookieDescription: 'Usamos cookies para garantizar la funcionalidad b\u00e1sica del sitio web. Opcionalmente puede activar cookies de an\u00e1lisis para ayudarnos a mejorar.',
  cookieAcceptAll: 'Aceptar todas',
  cookieAcceptEssential: 'Solo esenciales',
  cookieSettings: 'Configuraci\u00f3n',
  cookieEssentialLabel: 'Esenciales',
  cookieEssentialDescription: 'Necesarias para el funcionamiento del sitio. No se pueden desactivar.',
  cookieAnalyticsLabel: 'An\u00e1lisis',
  cookieAnalyticsDescription: 'Nos ayudan a entender c\u00f3mo los visitantes usan el sitio.',
  cookieSaveSettings: 'Guardar configuraci\u00f3n',

  loadingMessages: [
    'Preguntando a las ardillas por consejos locales...',
    'Comprobando si los columpios est\u00e1n libres...',
    'Consultando peque\u00f1os expertos en aventuras...',
    'Empacando bocadillos imaginarios...',
    'Ense\u00f1ando al GPS a pensar como un ni\u00f1o...',
    'Buscando charcos para saltar...',
    'Negociando con los dioses del clima...',
    'Contando los patos del estanque...',
  ],

  apiKeyNotConfigured: 'Clave API de Anthropic no configurada',
  missingRequiredFields: 'Faltan campos obligatorios',
  atLeastOneChild: 'Se debe especificar al menos un hijo',
  invalidJson: 'Formato JSON inv\u00e1lido',
  recommendationError: 'Error al crear las recomendaciones',

  feedbackPlaceholder: '\u00bfContento con los resultados? \u00bfQu\u00e9 podr\u00edamos mejorar?',
  feedbackSend: 'Enviar comentario',
  feedbackThanks: '\u00a1Gracias por tu comentario!',
};

const fr: TranslationStrings = {
  headerTitle1: 'Trouvez des activit\u00e9s parfaites',
  headerTitle2: 'pour vos enfants',
  tagline: 'Suggestions personnalis\u00e9es \u2014 Du temps en famille facilement !',
  footerTagline: 'ActivityFinder \u2014 Planifiez vos sorties en famille facilement',
  footerPoweredBy: 'Powered by AI',
  footerCredits: 'M\u00e9t\u00e9o par Open-Meteo | Lieux par Google Places | Recommandations IA par Claude',

  findActivities: 'Trouver des activit\u00e9s',
  searchInProgress: 'Recherche...',

  locating: 'D\u00e9tection de la position...',
  enterPostalOrCity: 'Entrez un code postal ou une ville',
  detectAutomatically: 'D\u00e9tecter automatiquement',
  cancel: 'Annuler',
  clickToChange: 'Cliquer pour changer',
  weatherUnavailable: 'M\u00e9t\u00e9o indisponible',
  locationNotFound: 'Lieu non trouv\u00e9',
  postalCodeNotFound: 'Code postal non trouv\u00e9. V\u00e9rifiez votre saisie.',
  cityNotFound: 'Ville non trouv\u00e9e. V\u00e9rifiez votre saisie.',
  geolocationDenied: 'Acc\u00e8s \u00e0 la position refus\u00e9. Veuillez entrer une ville manuellement.',
  geolocationUnavailable: 'Impossible de d\u00e9terminer la position. Veuillez entrer une ville manuellement.',
  geolocationTimeout: 'La demande de position a expir\u00e9. Veuillez entrer une ville manuellement.',
  geolocationUnknownError: 'Une erreur inconnue est survenue. Veuillez entrer une ville manuellement.',
  geocodingError: 'Erreur lors de la recherche. Veuillez r\u00e9essayer.',
  geolocationNotSupported: 'La g\u00e9olocalisation n\u2019est pas prise en charge par ce navigateur.',

  weather: 'M\u00e9t\u00e9o',
  selectLocationForWeather: 'S\u00e9lectionnez un lieu pour afficher la m\u00e9t\u00e9o',
  sevenDayForecast: 'Pr\u00e9visions sur 7 jours',
  precipitationChance: 'probabilit\u00e9 de pluie',
  unknown: 'Inconnu',

  children: 'Enfants',
  child: 'Enfant',
  childCount: (count: number) => `${count} ${count === 1 ? 'enfant' : 'enfants'}`,
  childLabel: (index: number) => `Enfant ${index}`,
  remove: 'Supprimer',
  addChild: 'Ajouter un enfant',
  age: '\u00c2ge',
  gender: 'Genre',
  genderBoy: 'Gar\u00e7on',
  genderGirl: 'Fille',
  genderAny: 'Peu importe',
  underOneYear: 'Moins de 1 an',
  yearSingular: 'an',
  yearPlural: 'ans',

  when: 'Quand ?',
  date: 'Date',
  today: 'Aujourd\u2019hui',
  tomorrow: 'Demain',
  chooseDate: 'Choisir une date',
  timeOfDay: 'Moment de la journ\u00e9e',
  timeMorning: 'Matin',
  timeAfternoon: 'Apr\u00e8s-midi',
  timeAllDay: 'Toute la journ\u00e9e',

  budget: 'Budget',
  budgetFree: 'Gratuit',
  budgetCheap: 'Bon march\u00e9 (\u20ac1-20)',
  budgetMedium: 'Moyen (\u20ac20-50)',
  budgetAny: 'Peu importe',

  recommendations: 'Recommandations',
  activities: 'activit\u00e9s',
  activitiesCount: (count: number) => `${count} activit\u00e9s`,
  searchingActivities: 'Recherche d\u2019activit\u00e9s...',
  searchingSubtext: 'M\u00e9t\u00e9o, \u00e2ge et budget pris en compte',
  readyForAdventure: 'Pr\u00eat pour l\u2019aventure ?',
  fillInDetails: 'Remplissez les informations \u00e0 gauche et cliquez sur \u00abTrouver des activit\u00e9s\u00bb',
  retry: 'R\u00e9essayer',
  selectLocationFirst: 'Veuillez s\u00e9lectionner un lieu',

  planRoute: 'Planifier l\u2019itin\u00e9raire',
  website: 'Site web',
  whyRecommended: 'Pourquoi recommand\u00e9 :',
  suitableFor: 'Adapt\u00e9 pour',
  indoor: 'Int\u00e9rieur',

  weatherClear: 'D\u00e9gag\u00e9',
  weatherMostlyClear: 'G\u00e9n\u00e9ralement d\u00e9gag\u00e9',
  weatherPartlyCloudy: 'Partiellement nuageux',
  weatherCloudy: 'Nuageux',
  weatherFog: 'Brouillard',
  weatherFogRime: 'Brouillard givrant',
  weatherDrizzleLight: 'Bruine l\u00e9g\u00e8re',
  weatherDrizzleModerate: 'Bruine mod\u00e9r\u00e9e',
  weatherDrizzleHeavy: 'Bruine forte',
  weatherRainLight: 'Pluie l\u00e9g\u00e8re',
  weatherRainModerate: 'Pluie mod\u00e9r\u00e9e',
  weatherRainHeavy: 'Pluie forte',
  weatherFreezingRain: 'Pluie vergla\u00e7ante',
  weatherFreezingRainHeavy: 'Pluie vergla\u00e7ante forte',
  weatherSnowLight: 'Neige l\u00e9g\u00e8re',
  weatherSnowModerate: 'Neige mod\u00e9r\u00e9e',
  weatherSnowHeavy: 'Neige forte',
  weatherSnowGrains: 'Grains de neige',
  weatherShowersLight: 'Averses l\u00e9g\u00e8res',
  weatherShowersModerate: 'Averses mod\u00e9r\u00e9es',
  weatherShowersHeavy: 'Averses fortes',
  weatherSnowShowersLight: 'Averses de neige l\u00e9g\u00e8res',
  weatherSnowShowersHeavy: 'Averses de neige fortes',
  weatherThunderstorm: 'Orage',
  weatherThunderstormHail: 'Orage avec gr\u00eale',
  weatherThunderstormHailHeavy: 'Orage avec forte gr\u00eale',

  showMore: 'Voir plus',

  impressum: 'Mentions l\u00e9gales',
  privacyPolicy: 'Politique de confidentialit\u00e9',

  cookieTitle: 'Param\u00e8tres des cookies',
  cookieDescription: 'Nous utilisons des cookies pour assurer le fonctionnement de base du site. Vous pouvez activer les cookies analytiques pour nous aider \u00e0 am\u00e9liorer le site.',
  cookieAcceptAll: 'Tout accepter',
  cookieAcceptEssential: 'Essentiels uniquement',
  cookieSettings: 'Param\u00e8tres',
  cookieEssentialLabel: 'Essentiels',
  cookieEssentialDescription: 'N\u00e9cessaires au fonctionnement du site. Ne peuvent pas \u00eatre d\u00e9sactiv\u00e9s.',
  cookieAnalyticsLabel: 'Analytiques',
  cookieAnalyticsDescription: 'Nous aident \u00e0 comprendre comment les visiteurs utilisent le site.',
  cookieSaveSettings: 'Enregistrer',

  loadingMessages: [
    'On demande aux \u00e9cureuils leurs bons plans...',
    'V\u00e9rification que les balan\u00e7oires sont libres...',
    'Consultation de petits experts en aventure...',
    'Pr\u00e9paration de go\u00fbters imaginaires...',
    'On apprend au GPS \u00e0 penser comme un enfant...',
    'Recherche de flaques pour sauter dedans...',
    'N\u00e9gociation avec les dieux de la m\u00e9t\u00e9o...',
    'On compte les canards \u00e0 l\u2019\u00e9tang...',
  ],

  apiKeyNotConfigured: 'Cl\u00e9 API Anthropic non configur\u00e9e',
  missingRequiredFields: 'Champs obligatoires manquants',
  atLeastOneChild: 'Au moins un enfant doit \u00eatre sp\u00e9cifi\u00e9',
  invalidJson: 'Format JSON invalide',
  recommendationError: 'Erreur lors de la cr\u00e9ation des recommandations',

  feedbackPlaceholder: 'Satisfait des r\u00e9sultats\u00a0? Que pourrions-nous am\u00e9liorer\u00a0?',
  feedbackSend: 'Envoyer',
  feedbackThanks: 'Merci pour votre retour\u00a0!',
};

const it: TranslationStrings = {
  headerTitle1: 'Trova attivit\u00e0 perfette',
  headerTitle2: 'per i tuoi bambini',
  tagline: 'Suggerimenti personalizzati \u2014 Tempo in famiglia facile!',
  footerTagline: 'ActivityFinder \u2014 Pianifica gite in famiglia facilmente',
  footerPoweredBy: 'Powered by AI',
  footerCredits: 'Dati meteo da Open-Meteo | Luoghi da Google Places | Raccomandazioni IA da Claude',

  findActivities: 'Trova attivit\u00e0',
  searchInProgress: 'Ricerca...',

  locating: 'Rilevamento posizione...',
  enterPostalOrCity: 'Inserisci CAP o citt\u00e0',
  detectAutomatically: 'Rileva automaticamente',
  cancel: 'Annulla',
  clickToChange: 'Clicca per cambiare',
  weatherUnavailable: 'Meteo non disponibile',
  locationNotFound: 'Posizione non trovata',
  postalCodeNotFound: 'CAP non trovato. Controlla il tuo inserimento.',
  cityNotFound: 'Citt\u00e0 non trovata. Controlla il tuo inserimento.',
  geolocationDenied: 'Accesso alla posizione negato. Inserisci una citt\u00e0 manualmente.',
  geolocationUnavailable: 'Impossibile determinare la posizione. Inserisci una citt\u00e0 manualmente.',
  geolocationTimeout: 'La richiesta di posizione \u00e8 scaduta. Inserisci una citt\u00e0 manualmente.',
  geolocationUnknownError: 'Si \u00e8 verificato un errore sconosciuto. Inserisci una citt\u00e0 manualmente.',
  geocodingError: 'Errore nella ricerca della posizione. Riprova.',
  geolocationNotSupported: 'La geolocalizzazione non \u00e8 supportata da questo browser.',

  weather: 'Meteo',
  selectLocationForWeather: 'Seleziona una posizione per mostrare il meteo',
  sevenDayForecast: 'Previsioni a 7 giorni',
  precipitationChance: 'probabilit\u00e0 di pioggia',
  unknown: 'Sconosciuto',

  children: 'Bambini',
  child: 'Bambino',
  childCount: (count: number) => `${count} ${count === 1 ? 'bambino' : 'bambini'}`,
  childLabel: (index: number) => `Bambino ${index}`,
  remove: 'Rimuovi',
  addChild: 'Aggiungi bambino',
  age: 'Et\u00e0',
  gender: 'Genere',
  genderBoy: 'Ragazzo',
  genderGirl: 'Ragazza',
  genderAny: 'Qualsiasi',
  underOneYear: 'Sotto 1 anno',
  yearSingular: 'anno',
  yearPlural: 'anni',

  when: 'Quando?',
  date: 'Data',
  today: 'Oggi',
  tomorrow: 'Domani',
  chooseDate: 'Scegli data',
  timeOfDay: 'Momento della giornata',
  timeMorning: 'Mattina',
  timeAfternoon: 'Pomeriggio',
  timeAllDay: 'Tutto il giorno',

  budget: 'Budget',
  budgetFree: 'Gratis',
  budgetCheap: 'Economico (\u20ac1-20)',
  budgetMedium: 'Medio (\u20ac20-50)',
  budgetAny: 'Qualsiasi',

  recommendations: 'Raccomandazioni',
  activities: 'attivit\u00e0',
  activitiesCount: (count: number) => `${count} attivit\u00e0`,
  searchingActivities: 'Ricerca attivit\u00e0...',
  searchingSubtext: 'Considerando meteo, et\u00e0 e budget',
  readyForAdventure: 'Pronto per un\u2019avventura?',
  fillInDetails: 'Compila i dati a sinistra e clicca su "Trova attivit\u00e0"',
  retry: 'Riprova',
  selectLocationFirst: 'Seleziona una posizione',

  planRoute: 'Pianifica percorso',
  website: 'Sito web',
  whyRecommended: 'Perch\u00e9 consigliato:',
  suitableFor: 'Adatto a',
  indoor: 'Al chiuso',

  weatherClear: 'Sereno',
  weatherMostlyClear: 'Prevalentemente sereno',
  weatherPartlyCloudy: 'Parzialmente nuvoloso',
  weatherCloudy: 'Nuvoloso',
  weatherFog: 'Nebbia',
  weatherFogRime: 'Nebbia con brina',
  weatherDrizzleLight: 'Pioggerella leggera',
  weatherDrizzleModerate: 'Pioggerella moderata',
  weatherDrizzleHeavy: 'Pioggerella forte',
  weatherRainLight: 'Pioggia leggera',
  weatherRainModerate: 'Pioggia moderata',
  weatherRainHeavy: 'Pioggia forte',
  weatherFreezingRain: 'Pioggia gelata',
  weatherFreezingRainHeavy: 'Pioggia gelata forte',
  weatherSnowLight: 'Neve leggera',
  weatherSnowModerate: 'Neve moderata',
  weatherSnowHeavy: 'Neve forte',
  weatherSnowGrains: 'Granuli di neve',
  weatherShowersLight: 'Rovesci leggeri',
  weatherShowersModerate: 'Rovesci moderati',
  weatherShowersHeavy: 'Rovesci forti',
  weatherSnowShowersLight: 'Rovesci di neve leggeri',
  weatherSnowShowersHeavy: 'Rovesci di neve forti',
  weatherThunderstorm: 'Temporale',
  weatherThunderstormHail: 'Temporale con grandine',
  weatherThunderstormHailHeavy: 'Temporale con forte grandine',

  showMore: 'Mostra di pi\u00f9',

  impressum: 'Note legali',
  privacyPolicy: 'Informativa sulla privacy',

  cookieTitle: 'Impostazioni cookie',
  cookieDescription: 'Utilizziamo cookie per garantire la funzionalit\u00e0 di base del sito. Puoi attivare i cookie analitici per aiutarci a migliorare.',
  cookieAcceptAll: 'Accetta tutti',
  cookieAcceptEssential: 'Solo essenziali',
  cookieSettings: 'Impostazioni',
  cookieEssentialLabel: 'Essenziali',
  cookieEssentialDescription: 'Necessari per il funzionamento del sito. Non possono essere disattivati.',
  cookieAnalyticsLabel: 'Analitici',
  cookieAnalyticsDescription: 'Ci aiutano a capire come i visitatori usano il sito.',
  cookieSaveSettings: 'Salva impostazioni',

  loadingMessages: [
    'Chiediamo agli scoiattoli i posti migliori...',
    'Controlliamo se le altalene sono libere...',
    'Consultiamo piccoli esperti di avventure...',
    'Preparando snack immaginari per la gita...',
    'Insegnando al GPS a pensare come un bambino...',
    'Cercando pozzanghere in cui saltare...',
    'Trattando con gli dei del meteo...',
    'Contando le paperelle al laghetto...',
  ],

  apiKeyNotConfigured: 'Chiave API Anthropic non configurata',
  missingRequiredFields: 'Campi obbligatori mancanti',
  atLeastOneChild: 'Deve essere specificato almeno un bambino',
  invalidJson: 'Formato JSON non valido',
  recommendationError: 'Errore nella creazione delle raccomandazioni',

  feedbackPlaceholder: 'Soddisfatto dei risultati? Cosa potremmo migliorare?',
  feedbackSend: 'Invia feedback',
  feedbackThanks: 'Grazie per il tuo feedback!',
};

const pt: TranslationStrings = {
  headerTitle1: 'Encontre atividades perfeitas',
  headerTitle2: 'para seus filhos',
  tagline: 'Sugest\u00f5es personalizadas \u2014 Tempo em fam\u00edlia facilitado!',
  footerTagline: 'ActivityFinder \u2014 Planeje passeios em fam\u00edlia facilmente',
  footerPoweredBy: 'Powered by AI',
  footerCredits: 'Dados meteorol\u00f3gicos de Open-Meteo | Lugares de Google Places | Recomenda\u00e7\u00f5es IA de Claude',

  findActivities: 'Buscar atividades',
  searchInProgress: 'Buscando...',

  locating: 'Detectando localiza\u00e7\u00e3o...',
  enterPostalOrCity: 'Insira c\u00f3digo postal ou cidade',
  detectAutomatically: 'Detectar automaticamente',
  cancel: 'Cancelar',
  clickToChange: 'Clique para alterar',
  weatherUnavailable: 'Clima indispon\u00edvel',
  locationNotFound: 'Localiza\u00e7\u00e3o n\u00e3o encontrada',
  postalCodeNotFound: 'C\u00f3digo postal n\u00e3o encontrado. Verifique sua entrada.',
  cityNotFound: 'Cidade n\u00e3o encontrada. Verifique sua entrada.',
  geolocationDenied: 'Acesso \u00e0 localiza\u00e7\u00e3o negado. Insira uma cidade manualmente.',
  geolocationUnavailable: 'N\u00e3o foi poss\u00edvel determinar a localiza\u00e7\u00e3o. Insira uma cidade manualmente.',
  geolocationTimeout: 'A solicita\u00e7\u00e3o de localiza\u00e7\u00e3o expirou. Insira uma cidade manualmente.',
  geolocationUnknownError: 'Ocorreu um erro desconhecido. Insira uma cidade manualmente.',
  geocodingError: 'Erro ao buscar localiza\u00e7\u00e3o. Tente novamente.',
  geolocationNotSupported: 'A geolocaliza\u00e7\u00e3o n\u00e3o \u00e9 suportada por este navegador.',

  weather: 'Clima',
  selectLocationForWeather: 'Selecione uma localiza\u00e7\u00e3o para mostrar o clima',
  sevenDayForecast: 'Previs\u00e3o de 7 dias',
  precipitationChance: 'probabilidade de chuva',
  unknown: 'Desconhecido',

  children: 'Filhos',
  child: 'Filho',
  childCount: (count: number) => `${count} ${count === 1 ? 'filho' : 'filhos'}`,
  childLabel: (index: number) => `Filho ${index}`,
  remove: 'Remover',
  addChild: 'Adicionar filho',
  age: 'Idade',
  gender: 'G\u00eanero',
  genderBoy: 'Menino',
  genderGirl: 'Menina',
  genderAny: 'Qualquer',
  underOneYear: 'Menos de 1 ano',
  yearSingular: 'ano',
  yearPlural: 'anos',

  when: 'Quando?',
  date: 'Data',
  today: 'Hoje',
  tomorrow: 'Amanh\u00e3',
  chooseDate: 'Escolher data',
  timeOfDay: 'Per\u00edodo do dia',
  timeMorning: 'Manh\u00e3',
  timeAfternoon: 'Tarde',
  timeAllDay: 'O dia todo',

  budget: 'Or\u00e7amento',
  budgetFree: 'Gr\u00e1tis',
  budgetCheap: 'Barato (\u20ac1-20)',
  budgetMedium: 'M\u00e9dio (\u20ac20-50)',
  budgetAny: 'Qualquer',

  recommendations: 'Recomenda\u00e7\u00f5es',
  activities: 'atividades',
  activitiesCount: (count: number) => `${count} atividades`,
  searchingActivities: 'Buscando atividades...',
  searchingSubtext: 'Considerando clima, idade e or\u00e7amento',
  readyForAdventure: 'Pronto para uma aventura?',
  fillInDetails: 'Preencha os dados \u00e0 esquerda e clique em "Buscar atividades"',
  retry: 'Tentar novamente',
  selectLocationFirst: 'Por favor selecione uma localiza\u00e7\u00e3o',

  planRoute: 'Planejar rota',
  website: 'Site',
  whyRecommended: 'Por que recomendado:',
  suitableFor: 'Adequado para',
  indoor: 'Interior',

  weatherClear: 'Limpo',
  weatherMostlyClear: 'Predominantemente limpo',
  weatherPartlyCloudy: 'Parcialmente nublado',
  weatherCloudy: 'Nublado',
  weatherFog: 'Nevoeiro',
  weatherFogRime: 'Nevoeiro com geada',
  weatherDrizzleLight: 'Garoa leve',
  weatherDrizzleModerate: 'Garoa moderada',
  weatherDrizzleHeavy: 'Garoa forte',
  weatherRainLight: 'Chuva leve',
  weatherRainModerate: 'Chuva moderada',
  weatherRainHeavy: 'Chuva forte',
  weatherFreezingRain: 'Chuva congelante',
  weatherFreezingRainHeavy: 'Chuva congelante forte',
  weatherSnowLight: 'Neve leve',
  weatherSnowModerate: 'Neve moderada',
  weatherSnowHeavy: 'Neve forte',
  weatherSnowGrains: 'Gr\u00e3os de neve',
  weatherShowersLight: 'Pancadas leves',
  weatherShowersModerate: 'Pancadas moderadas',
  weatherShowersHeavy: 'Pancadas fortes',
  weatherSnowShowersLight: 'Pancadas de neve leves',
  weatherSnowShowersHeavy: 'Pancadas de neve fortes',
  weatherThunderstorm: 'Tempestade',
  weatherThunderstormHail: 'Tempestade com granizo',
  weatherThunderstormHailHeavy: 'Tempestade com granizo forte',

  showMore: 'Ver mais',

  impressum: 'Aviso legal',
  privacyPolicy: 'Pol\u00edtica de privacidade',

  cookieTitle: 'Configura\u00e7\u00f5es de cookies',
  cookieDescription: 'Usamos cookies para garantir a funcionalidade b\u00e1sica do site. Voc\u00ea pode ativar cookies anal\u00edticos para nos ajudar a melhorar.',
  cookieAcceptAll: 'Aceitar todos',
  cookieAcceptEssential: 'Apenas essenciais',
  cookieSettings: 'Configura\u00e7\u00f5es',
  cookieEssentialLabel: 'Essenciais',
  cookieEssentialDescription: 'Necess\u00e1rios para o funcionamento do site. N\u00e3o podem ser desativados.',
  cookieAnalyticsLabel: 'Anal\u00edticos',
  cookieAnalyticsDescription: 'Nos ajudam a entender como os visitantes usam o site.',
  cookieSaveSettings: 'Salvar configura\u00e7\u00f5es',

  loadingMessages: [
    'Perguntando aos esquilos por dicas locais...',
    'Verificando se os balan\u00e7os est\u00e3o livres...',
    'Consultando pequenos especialistas em aventuras...',
    'Preparando lanches imagin\u00e1rios...',
    'Ensinando o GPS a pensar como uma crian\u00e7a...',
    'Procurando po\u00e7as para pular...',
    'Negociando com os deuses do clima...',
    'Contando os patos no lago...',
  ],

  apiKeyNotConfigured: 'Chave API Anthropic n\u00e3o configurada',
  missingRequiredFields: 'Campos obrigat\u00f3rios ausentes',
  atLeastOneChild: 'Pelo menos um filho deve ser especificado',
  invalidJson: 'Formato JSON inv\u00e1lido',
  recommendationError: 'Erro ao criar recomenda\u00e7\u00f5es',

  feedbackPlaceholder: 'Gostou dos resultados? O que podemos melhorar?',
  feedbackSend: 'Enviar feedback',
  feedbackThanks: 'Obrigado pelo seu feedback!',
};

const ja: TranslationStrings = {
  headerTitle1: '\u304a\u5b50\u69d8\u306b\u3074\u3063\u305f\u308a\u306e',
  headerTitle2: '\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u898b\u3064\u3051\u3088\u3046',
  tagline: '\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30ba\u3055\u308c\u305f\u63d0\u6848 \u2014 \u5bb6\u65cf\u306e\u6642\u9593\u3092\u7c21\u5358\u306b\uff01',
  footerTagline: 'ActivityFinder \u2014 \u5bb6\u65cf\u306e\u304a\u51fa\u304b\u3051\u3092\u7c21\u5358\u306b\u8a08\u753b',
  footerPoweredBy: 'Powered by AI',
  footerCredits: '\u5929\u6c17\u30c7\u30fc\u30bf: Open-Meteo | \u5834\u6240: Google Places | AI\u63a8\u85a6: Claude',

  findActivities: '\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u63a2\u3059',
  searchInProgress: '\u691c\u7d22\u4e2d...',

  locating: '\u4f4d\u7f6e\u3092\u691c\u51fa\u4e2d...',
  enterPostalOrCity: '\u90f5\u4fbf\u756a\u53f7\u307e\u305f\u306f\u90fd\u5e02\u540d\u3092\u5165\u529b',
  detectAutomatically: '\u81ea\u52d5\u691c\u51fa',
  cancel: '\u30ad\u30e3\u30f3\u30bb\u30eb',
  clickToChange: '\u30af\u30ea\u30c3\u30af\u3067\u5909\u66f4',
  weatherUnavailable: '\u5929\u6c17\u60c5\u5831\u304c\u5229\u7528\u3067\u304d\u307e\u305b\u3093',
  locationNotFound: '\u5834\u6240\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093',
  postalCodeNotFound: '\u90f5\u4fbf\u756a\u53f7\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\u5165\u529b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  cityNotFound: '\u90fd\u5e02\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\u5165\u529b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  geolocationDenied: '\u4f4d\u7f6e\u60c5\u5831\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u62d2\u5426\u3055\u308c\u307e\u3057\u305f\u3002\u90fd\u5e02\u540d\u3092\u624b\u52d5\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  geolocationUnavailable: '\u4f4d\u7f6e\u3092\u7279\u5b9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u90fd\u5e02\u540d\u3092\u624b\u52d5\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  geolocationTimeout: '\u4f4d\u7f6e\u60c5\u5831\u306e\u53d6\u5f97\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\u3002\u90fd\u5e02\u540d\u3092\u624b\u52d5\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  geolocationUnknownError: '\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u90fd\u5e02\u540d\u3092\u624b\u52d5\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  geocodingError: '\u4f4d\u7f6e\u691c\u7d22\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
  geolocationNotSupported: '\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u4f4d\u7f6e\u60c5\u5831\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002',

  weather: '\u5929\u6c17',
  selectLocationForWeather: '\u5929\u6c17\u3092\u8868\u793a\u3059\u308b\u306b\u306f\u5834\u6240\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044',
  sevenDayForecast: '7\u65e5\u9593\u4e88\u5831',
  precipitationChance: '\u964d\u6c34\u78ba\u7387',
  unknown: '\u4e0d\u660e',

  children: '\u5b50\u4f9b',
  child: '\u5b50\u4f9b',
  childCount: (count: number) => `${count}\u4eba\u306e\u5b50\u4f9b`,
  childLabel: (index: number) => `\u5b50\u4f9b ${index}`,
  remove: '\u524a\u9664',
  addChild: '\u5b50\u4f9b\u3092\u8ffd\u52a0',
  age: '\u5e74\u9f62',
  gender: '\u6027\u5225',
  genderBoy: '\u7537\u306e\u5b50',
  genderGirl: '\u5973\u306e\u5b50',
  genderAny: '\u3069\u3061\u3089\u3067\u3082',
  underOneYear: '1\u6b73\u672a\u6e80',
  yearSingular: '\u6b73',
  yearPlural: '\u6b73',

  when: '\u3044\u3064\uff1f',
  date: '\u65e5\u4ed8',
  today: '\u4eca\u65e5',
  tomorrow: '\u660e\u65e5',
  chooseDate: '\u65e5\u4ed8\u3092\u9078\u629e',
  timeOfDay: '\u6642\u9593\u5e2f',
  timeMorning: '\u5348\u524d',
  timeAfternoon: '\u5348\u5f8c',
  timeAllDay: '\u7d42\u65e5',

  budget: '\u4e88\u7b97',
  budgetFree: '\u7121\u6599',
  budgetCheap: '\u304a\u624b\u9803 (\u20ac1-20)',
  budgetMedium: '\u666e\u901a (\u20ac20-50)',
  budgetAny: '\u6307\u5b9a\u306a\u3057',

  recommendations: '\u304a\u3059\u3059\u3081',
  activities: '\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3',
  activitiesCount: (count: number) => `${count}\u4ef6\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3`,
  searchingActivities: '\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u691c\u7d22\u4e2d...',
  searchingSubtext: '\u5929\u6c17\u3001\u5e74\u9f62\u3001\u4e88\u7b97\u3092\u8003\u616e\u3057\u3066\u3044\u307e\u3059',
  readyForAdventure: '\u5192\u967a\u306e\u6e96\u5099\u306f\u3067\u304d\u307e\u3057\u305f\u304b\uff1f',
  fillInDetails: '\u5de6\u5074\u306e\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u300c\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u63a2\u3059\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044',
  retry: '\u518d\u8a66\u884c',
  selectLocationFirst: '\u5834\u6240\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044',

  planRoute: '\u30eb\u30fc\u30c8\u3092\u8a08\u753b',
  website: '\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8',
  whyRecommended: '\u304a\u3059\u3059\u3081\u306e\u7406\u7531:',
  suitableFor: '\u5bfe\u8c61\u5e74\u9f62',
  indoor: '\u5c4b\u5185',

  weatherClear: '\u6674\u308c',
  weatherMostlyClear: '\u304a\u304a\u3080\u306d\u6674\u308c',
  weatherPartlyCloudy: '\u6642\u3005\u66c7\u308a',
  weatherCloudy: '\u66c7\u308a',
  weatherFog: '\u9727',
  weatherFogRime: '\u7740\u6c37\u6027\u306e\u9727',
  weatherDrizzleLight: '\u5c0f\u96e8',
  weatherDrizzleModerate: '\u9727\u96e8',
  weatherDrizzleHeavy: '\u5f37\u3044\u9727\u96e8',
  weatherRainLight: '\u5c0f\u96e8',
  weatherRainModerate: '\u96e8',
  weatherRainHeavy: '\u5927\u96e8',
  weatherFreezingRain: '\u51cd\u96e8',
  weatherFreezingRainHeavy: '\u5f37\u3044\u51cd\u96e8',
  weatherSnowLight: '\u5c0f\u96ea',
  weatherSnowModerate: '\u96ea',
  weatherSnowHeavy: '\u5927\u96ea',
  weatherSnowGrains: '\u96ea\u3042\u3089\u308c',
  weatherShowersLight: '\u5c0f\u96e8',
  weatherShowersModerate: '\u306b\u308f\u304b\u96e8',
  weatherShowersHeavy: '\u5f37\u3044\u306b\u308f\u304b\u96e8',
  weatherSnowShowersLight: '\u5c0f\u96ea',
  weatherSnowShowersHeavy: '\u5f37\u3044\u96ea',
  weatherThunderstorm: '\u96f7\u96e8',
  weatherThunderstormHail: '\u96f9\u3092\u4f34\u3046\u96f7\u96e8',
  weatherThunderstormHailHeavy: '\u5f37\u3044\u96f9\u3092\u4f34\u3046\u96f7\u96e8',

  showMore: '\u3082\u3063\u3068\u898b\u308b',

  impressum: '\u6cd5\u7684\u60c5\u5831',
  privacyPolicy: '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',

  cookieTitle: 'Cookie\u8a2d\u5b9a',
  cookieDescription: '\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u57fa\u672c\u6a5f\u80fd\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306bCookie\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u5206\u6790Cookie\u3092\u6709\u52b9\u306b\u3057\u3066\u6539\u5584\u306b\u3054\u5354\u529b\u304f\u3060\u3055\u3044\u3002',
  cookieAcceptAll: '\u3059\u3079\u3066\u53d7\u3051\u5165\u308c\u308b',
  cookieAcceptEssential: '\u5fc5\u9808\u306e\u307f',
  cookieSettings: '\u8a2d\u5b9a',
  cookieEssentialLabel: '\u5fc5\u9808',
  cookieEssentialDescription: '\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u52d5\u4f5c\u306b\u5fc5\u8981\u3067\u3059\u3002\u7121\u52b9\u306b\u3067\u304d\u307e\u305b\u3093\u3002',
  cookieAnalyticsLabel: '\u5206\u6790',
  cookieAnalyticsDescription: '\u8a2a\u554f\u8005\u306e\u30b5\u30a4\u30c8\u5229\u7528\u72b6\u6cc1\u306e\u7406\u89e3\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002',
  cookieSaveSettings: '\u8a2d\u5b9a\u3092\u4fdd\u5b58',

  loadingMessages: [
    '\u30ea\u30b9\u306b\u5730\u5143\u306e\u304a\u3059\u3059\u3081\u3092\u805e\u3044\u3066\u3044\u307e\u3059...',
    '\u30d6\u30e9\u30f3\u30b3\u304c\u7a7a\u3044\u3066\u3044\u308b\u304b\u78ba\u8a8d\u4e2d...',
    '\u5c0f\u3055\u306a\u5192\u967a\u5bb6\u305f\u3061\u306b\u76f8\u8ac7\u4e2d...',
    '\u60f3\u50cf\u306e\u304a\u3084\u3064\u3092\u6e96\u5099\u4e2d...',
    'GPS\u306b\u5b50\u4f9b\u306e\u8003\u3048\u65b9\u3092\u6559\u3048\u3066\u3044\u307e\u3059...',
    '\u98db\u3073\u8fbc\u3081\u308b\u6c34\u305f\u307e\u308a\u3092\u63a2\u3057\u3066\u3044\u307e\u3059...',
    '\u304a\u5929\u6c17\u306e\u795e\u69d8\u3068\u4ea4\u6e09\u4e2d...',
    '\u6c60\u306e\u30a2\u30d2\u30eb\u3092\u6570\u3048\u3066\u3044\u307e\u3059...',
  ],

  apiKeyNotConfigured: 'Anthropic API\u30ad\u30fc\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093',
  missingRequiredFields: '\u5fc5\u9808\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059',
  atLeastOneChild: '\u5c11\u306a\u304f\u3068\u30821\u4eba\u306e\u5b50\u4f9b\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044',
  invalidJson: '\u7121\u52b9\u306aJSON\u5f62\u5f0f',
  recommendationError: '\u304a\u3059\u3059\u3081\u306e\u4f5c\u6210\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f',

  feedbackPlaceholder: '\u7d50\u679c\u306b\u6e80\u8db3\u3067\u3059\u304b\uff1f\u6539\u5584\u3067\u304d\u308b\u70b9\u306f\u3042\u308a\u307e\u3059\u304b\uff1f',
  feedbackSend: '\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1',
  feedbackThanks: '\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01',
};

const zh: TranslationStrings = {
  headerTitle1: '\u4e3a\u60a8\u7684\u5b69\u5b50\u627e\u5230',
  headerTitle2: '\u5b8c\u7f8e\u7684\u6d3b\u52a8',
  tagline: '\u4e2a\u6027\u5316\u6d3b\u52a8\u5efa\u8bae \u2014 \u8f7b\u677e\u4eab\u53d7\u5bb6\u5ead\u65f6\u5149\uff01',
  footerTagline: 'ActivityFinder \u2014 \u8f7b\u677e\u89c4\u5212\u5bb6\u5ead\u51fa\u6e38',
  footerPoweredBy: 'Powered by AI',
  footerCredits: '\u5929\u6c14\u6570\u636e\u6765\u81ea Open-Meteo | \u5730\u70b9\u6765\u81ea Google Places | AI\u63a8\u8350\u6765\u81ea Claude',

  findActivities: '\u67e5\u627e\u6d3b\u52a8',
  searchInProgress: '\u641c\u7d22\u4e2d...',

  locating: '\u6b63\u5728\u68c0\u6d4b\u4f4d\u7f6e...',
  enterPostalOrCity: '\u8f93\u5165\u90ae\u7f16\u6216\u57ce\u5e02',
  detectAutomatically: '\u81ea\u52a8\u68c0\u6d4b',
  cancel: '\u53d6\u6d88',
  clickToChange: '\u70b9\u51fb\u66f4\u6539',
  weatherUnavailable: '\u5929\u6c14\u4fe1\u606f\u4e0d\u53ef\u7528',
  locationNotFound: '\u672a\u627e\u5230\u4f4d\u7f6e',
  postalCodeNotFound: '\u672a\u627e\u5230\u90ae\u7f16\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u8f93\u5165\u3002',
  cityNotFound: '\u672a\u627e\u5230\u57ce\u5e02\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u8f93\u5165\u3002',
  geolocationDenied: '\u4f4d\u7f6e\u8bbf\u95ee\u88ab\u62d2\u7edd\u3002\u8bf7\u624b\u52a8\u8f93\u5165\u57ce\u5e02\u3002',
  geolocationUnavailable: '\u65e0\u6cd5\u786e\u5b9a\u4f4d\u7f6e\u3002\u8bf7\u624b\u52a8\u8f93\u5165\u57ce\u5e02\u3002',
  geolocationTimeout: '\u4f4d\u7f6e\u8bf7\u6c42\u8d85\u65f6\u3002\u8bf7\u624b\u52a8\u8f93\u5165\u57ce\u5e02\u3002',
  geolocationUnknownError: '\u53d1\u751f\u672a\u77e5\u9519\u8bef\u3002\u8bf7\u624b\u52a8\u8f93\u5165\u57ce\u5e02\u3002',
  geocodingError: '\u641c\u7d22\u4f4d\u7f6e\u65f6\u51fa\u9519\u3002\u8bf7\u91cd\u8bd5\u3002',
  geolocationNotSupported: '\u6b64\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5730\u7406\u4f4d\u7f6e\u3002',

  weather: '\u5929\u6c14',
  selectLocationForWeather: '\u9009\u62e9\u4f4d\u7f6e\u4ee5\u663e\u793a\u5929\u6c14',
  sevenDayForecast: '7\u5929\u9884\u62a5',
  precipitationChance: '\u964d\u6c34\u6982\u7387',
  unknown: '\u672a\u77e5',

  children: '\u5b69\u5b50',
  child: '\u5b69\u5b50',
  childCount: (count: number) => `${count}\u4e2a\u5b69\u5b50`,
  childLabel: (index: number) => `\u5b69\u5b50 ${index}`,
  remove: '\u5220\u9664',
  addChild: '\u6dfb\u52a0\u5b69\u5b50',
  age: '\u5e74\u9f84',
  gender: '\u6027\u522b',
  genderBoy: '\u7537\u5b69',
  genderGirl: '\u5973\u5b69',
  genderAny: '\u4e0d\u9650',
  underOneYear: '1\u5c81\u4ee5\u4e0b',
  yearSingular: '\u5c81',
  yearPlural: '\u5c81',

  when: '\u4ec0\u4e48\u65f6\u5019\uff1f',
  date: '\u65e5\u671f',
  today: '\u4eca\u5929',
  tomorrow: '\u660e\u5929',
  chooseDate: '\u9009\u62e9\u65e5\u671f',
  timeOfDay: '\u65f6\u6bb5',
  timeMorning: '\u4e0a\u5348',
  timeAfternoon: '\u4e0b\u5348',
  timeAllDay: '\u5168\u5929',

  budget: '\u9884\u7b97',
  budgetFree: '\u514d\u8d39',
  budgetCheap: '\u4fbf\u5b9c (\u20ac1-20)',
  budgetMedium: '\u4e2d\u7b49 (\u20ac20-50)',
  budgetAny: '\u4e0d\u9650',

  recommendations: '\u63a8\u8350',
  activities: '\u6d3b\u52a8',
  activitiesCount: (count: number) => `${count}\u4e2a\u6d3b\u52a8`,
  searchingActivities: '\u6b63\u5728\u641c\u7d22\u6d3b\u52a8...',
  searchingSubtext: '\u6b63\u5728\u8003\u8651\u5929\u6c14\u3001\u5e74\u9f84\u548c\u9884\u7b97',
  readyForAdventure: '\u51c6\u5907\u597d\u5192\u9669\u4e86\u5417\uff1f',
  fillInDetails: '\u586b\u5199\u5de6\u4fa7\u7684\u4fe1\u606f\u5e76\u70b9\u51fb\u201c\u67e5\u627e\u6d3b\u52a8\u201d',
  retry: '\u91cd\u8bd5',
  selectLocationFirst: '\u8bf7\u9009\u62e9\u4f4d\u7f6e',

  planRoute: '\u89c4\u5212\u8def\u7ebf',
  website: '\u7f51\u7ad9',
  whyRecommended: '\u63a8\u8350\u7406\u7531\uff1a',
  suitableFor: '\u9002\u5408',
  indoor: '\u5ba4\u5185',

  weatherClear: '\u6674\u6717',
  weatherMostlyClear: '\u5927\u90e8\u5206\u6674\u6717',
  weatherPartlyCloudy: '\u5c40\u90e8\u591a\u4e91',
  weatherCloudy: '\u591a\u4e91',
  weatherFog: '\u96fe',
  weatherFogRime: '\u51bb\u96fe',
  weatherDrizzleLight: '\u5c0f\u6bdb\u6bdb\u96e8',
  weatherDrizzleModerate: '\u6bdb\u6bdb\u96e8',
  weatherDrizzleHeavy: '\u5927\u6bdb\u6bdb\u96e8',
  weatherRainLight: '\u5c0f\u96e8',
  weatherRainModerate: '\u4e2d\u96e8',
  weatherRainHeavy: '\u5927\u96e8',
  weatherFreezingRain: '\u51bb\u96e8',
  weatherFreezingRainHeavy: '\u5f3a\u51bb\u96e8',
  weatherSnowLight: '\u5c0f\u96ea',
  weatherSnowModerate: '\u4e2d\u96ea',
  weatherSnowHeavy: '\u5927\u96ea',
  weatherSnowGrains: '\u96ea\u7c92',
  weatherShowersLight: '\u5c0f\u9635\u96e8',
  weatherShowersModerate: '\u9635\u96e8',
  weatherShowersHeavy: '\u5f3a\u9635\u96e8',
  weatherSnowShowersLight: '\u5c0f\u9635\u96ea',
  weatherSnowShowersHeavy: '\u5f3a\u9635\u96ea',
  weatherThunderstorm: '\u96f7\u66b4',
  weatherThunderstormHail: '\u96f7\u66b4\u4f34\u5190\u96f9',
  weatherThunderstormHailHeavy: '\u96f7\u66b4\u4f34\u5f3a\u5190\u96f9',

  showMore: '\u663e\u793a\u66f4\u591a',

  impressum: '\u6cd5\u5f8b\u58f0\u660e',
  privacyPolicy: '\u9690\u79c1\u653f\u7b56',

  cookieTitle: 'Cookie\u8bbe\u7f6e',
  cookieDescription: '\u6211\u4eec\u4f7f\u7528Cookie\u6765\u786e\u4fdd\u7f51\u7ad9\u7684\u57fa\u672c\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u542f\u7528\u5206\u6790Cookie\u6765\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb\u3002',
  cookieAcceptAll: '\u5168\u90e8\u63a5\u53d7',
  cookieAcceptEssential: '\u4ec5\u5fc5\u8981\u7684',
  cookieSettings: '\u8bbe\u7f6e',
  cookieEssentialLabel: '\u5fc5\u8981\u7684',
  cookieEssentialDescription: '\u7f51\u7ad9\u8fd0\u884c\u6240\u5fc5\u9700\u3002\u65e0\u6cd5\u7981\u7528\u3002',
  cookieAnalyticsLabel: '\u5206\u6790',
  cookieAnalyticsDescription: '\u5e2e\u52a9\u6211\u4eec\u4e86\u89e3\u8bbf\u5ba2\u5982\u4f55\u4f7f\u7528\u7f51\u7ad9\u3002',
  cookieSaveSettings: '\u4fdd\u5b58\u8bbe\u7f6e',

  loadingMessages: [
    '\u6b63\u5728\u5411\u677e\u9f20\u6253\u542c\u5f53\u5730\u79d8\u7c4d...',
    '\u68c0\u67e5\u79cb\u5343\u662f\u5426\u6709\u7a7a...',
    '\u54a8\u8be2\u5c0f\u5c0f\u5192\u9669\u4e13\u5bb6...',
    '\u6b63\u5728\u6253\u5305\u60f3\u8c61\u4e2d\u7684\u96f6\u98df...',
    '\u6559GPS\u50cf\u5b69\u5b50\u4e00\u6837\u601d\u8003...',
    '\u5bfb\u627e\u503c\u5f97\u8df3\u8fdb\u53bb\u7684\u6c34\u5751...',
    '\u6b63\u5728\u548c\u5929\u6c14\u4e4b\u795e\u8c08\u5224...',
    '\u6570\u6570\u6c60\u5858\u91cc\u7684\u5c0f\u9e2d\u5b50...',
  ],

  apiKeyNotConfigured: 'Anthropic API\u5bc6\u94a5\u672a\u914d\u7f6e',
  missingRequiredFields: '\u7f3a\u5c11\u5fc5\u586b\u5b57\u6bb5',
  atLeastOneChild: '\u81f3\u5c11\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u5b69\u5b50',
  invalidJson: 'JSON\u683c\u5f0f\u65e0\u6548',
  recommendationError: '\u521b\u5efa\u63a8\u8350\u65f6\u51fa\u9519',

  feedbackPlaceholder: '\u5bf9\u7ed3\u679c\u6ee1\u610f\u5417\uff1f\u6211\u4eec\u8fd8\u80fd\u6539\u8fdb\u4ec0\u4e48\uff1f',
  feedbackSend: '\u53d1\u9001\u53cd\u9988',
  feedbackThanks: '\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01',
};

export const translations: Record<SupportedLocale, TranslationStrings> = {
  en, de, es, fr, it, pt, ja, zh,
};

export type TranslationKey = keyof TranslationStrings;

export function getTranslation(locale: SupportedLocale, key: TranslationKey): TranslationStrings[TranslationKey] {
  return translations[locale][key];
}

export function detectLocale(): SupportedLocale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;

  const browserLang = navigator.language?.split('-')[0]?.toLowerCase();
  if (browserLang && SUPPORTED_LOCALES.includes(browserLang as SupportedLocale)) {
    return browserLang as SupportedLocale;
  }

  return DEFAULT_LOCALE;
}

// Map weather code to translation key
export const WEATHER_CODE_KEYS: Record<number, { key: keyof TranslationStrings; icon: string; isGoodOutdoor: boolean }> = {
  0: { key: 'weatherClear', icon: '\u2600\ufe0f', isGoodOutdoor: true },
  1: { key: 'weatherMostlyClear', icon: '\ud83c\udf24\ufe0f', isGoodOutdoor: true },
  2: { key: 'weatherPartlyCloudy', icon: '\u26c5', isGoodOutdoor: true },
  3: { key: 'weatherCloudy', icon: '\u2601\ufe0f', isGoodOutdoor: true },
  45: { key: 'weatherFog', icon: '\ud83c\udf2b\ufe0f', isGoodOutdoor: false },
  48: { key: 'weatherFogRime', icon: '\ud83c\udf2b\ufe0f', isGoodOutdoor: false },
  51: { key: 'weatherDrizzleLight', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  53: { key: 'weatherDrizzleModerate', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  55: { key: 'weatherDrizzleHeavy', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  61: { key: 'weatherRainLight', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  63: { key: 'weatherRainModerate', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  65: { key: 'weatherRainHeavy', icon: '\ud83c\udf27\ufe0f', isGoodOutdoor: false },
  66: { key: 'weatherFreezingRain', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  67: { key: 'weatherFreezingRainHeavy', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  71: { key: 'weatherSnowLight', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  73: { key: 'weatherSnowModerate', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  75: { key: 'weatherSnowHeavy', icon: '\u2744\ufe0f', isGoodOutdoor: false },
  77: { key: 'weatherSnowGrains', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  80: { key: 'weatherShowersLight', icon: '\ud83c\udf26\ufe0f', isGoodOutdoor: false },
  81: { key: 'weatherShowersModerate', icon: '\ud83c\udf26\ufe0f', isGoodOutdoor: false },
  82: { key: 'weatherShowersHeavy', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
  85: { key: 'weatherSnowShowersLight', icon: '\ud83c\udf28\ufe0f', isGoodOutdoor: false },
  86: { key: 'weatherSnowShowersHeavy', icon: '\u2744\ufe0f', isGoodOutdoor: false },
  95: { key: 'weatherThunderstorm', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
  96: { key: 'weatherThunderstormHail', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
  99: { key: 'weatherThunderstormHailHeavy', icon: '\u26c8\ufe0f', isGoodOutdoor: false },
};
