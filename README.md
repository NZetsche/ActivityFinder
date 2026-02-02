# FamilyFun AI - ActivityFinder

AI-powered activity finder for families. Get personalized kid-friendly activity recommendations based on real-time weather, your children's ages, and budget.

## Features

- **AI-powered recommendations** — Uses Claude to suggest activities tailored to your family
- **Real-time weather** — Factors in current and forecasted weather via Open-Meteo
- **Nearby places** — Discovers local venues using Google Places API
- **Multi-language** — Supports 8 languages: English, German, Spanish, French, Italian, Portuguese, Japanese, Chinese
- **Feedback widget** — Optional Formspree integration for collecting user feedback

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude SDK
- **APIs:** Open-Meteo (weather), Google Places

## Getting Started

### Prerequisites

- Node.js 18+
- Anthropic API key
- Google Places API key

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NZetsche/ActivityFinder.git
   cd ActivityFinder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

4. Fill in your API keys in `.env`:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   GOOGLE_PLACES_API_KEY=AIza...
   ```

5. (Optional) To enable the feedback widget, add your Formspree form ID:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your-form-id
   ```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx              # Main page
    layout.tsx            # Root layout with SEO metadata
    api/
      recommend/route.ts  # AI recommendation endpoint
      places/route.ts     # Google Places proxy
      weather/route.ts    # Weather data proxy
    impressum/            # Legal page
    privacy/              # Privacy policy page
  components/
    LocationWeather.tsx   # Location picker + weather display
    KidsForm.tsx          # Children age/gender form
    DateTimePicker.tsx    # Date and time-of-day selector
    BudgetSelector.tsx    # Budget filter
    ResultsList.tsx       # Activity results display
    ActivityCard.tsx      # Individual activity card
    FeedbackBox.tsx       # Formspree feedback widget
    LanguageSwitcher.tsx  # Language dropdown
    CookieConsent.tsx     # Cookie consent banner
  lib/
    i18n.ts               # Translations for 8 languages
    LanguageContext.tsx    # React context for locale
    claude.ts             # Claude API client
    weather.ts            # Weather API client
    places.ts             # Places API client
    geolocation.ts        # Browser geolocation helpers
  types/
    index.ts              # TypeScript interfaces
```

## Deployment

Deploy to [Vercel](https://vercel.com) and set the environment variables in the project settings.

## License

All rights reserved.
