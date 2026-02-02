import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import CookieConsent from '@/components/CookieConsent';

const SITE_URL = 'https://familyfun.ai';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#9333ea',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FamilyFun AI - Find Kid-Friendly Activities Near You | Things to Do With Kids',
    template: '%s | FamilyFun AI',
  },
  description:
    'Discover the best kid-friendly activities near you. AI-powered recommendations based on real-time weather, your children\'s ages, and budget. Find things to do with kids today — indoor playgrounds, museums, parks, zoos, and more.',
  keywords: [
    'kids activities near me',
    'things to do with kids',
    'family activities',
    'kid-friendly activities',
    'things to do with kids today',
    'family outing ideas',
    'indoor activities for kids',
    'outdoor activities for kids',
    'free things to do with kids',
    'family fun near me',
    'children activities',
    'what to do with kids this weekend',
    'rainy day activities for kids',
    'toddler activities near me',
    'family day out',
    'kids activities today',
    'indoor playground near me',
    'kids museum',
    'zoo near me',
    'theme park',
    'Kinderaktivitäten',
    'Familienausflug',
    'actividades para niños',
    'activités enfants',
  ],
  authors: [{ name: 'FamilyFun AI' }],
  creator: 'FamilyFun AI',
  publisher: 'FamilyFun AI',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'FamilyFun AI - Find Kid-Friendly Activities Near You',
    description:
      'AI-powered activity finder for families. Get personalized recommendations based on weather, your kids\' ages, and budget.',
    url: SITE_URL,
    type: 'website',
    siteName: 'FamilyFun AI',
    locale: 'en_US',
    alternateLocale: ['de_DE', 'es_ES', 'fr_FR', 'it_IT', 'pt_BR', 'ja_JP', 'zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FamilyFun AI - Find Kid-Friendly Activities Near You',
    description:
      'AI-powered activity finder for families. Personalized recommendations based on weather, age, and budget.',
    creator: '@familyfunai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'family',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FamilyFun AI',
    url: SITE_URL,
    description:
      'AI-powered activity finder for families. Get personalized recommendations based on weather, your children\'s ages, and budget.',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gradient-to-br from-violet-50 via-white to-orange-50 min-h-screen font-sans">
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
