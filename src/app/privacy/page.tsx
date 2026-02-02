'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const PRIVACY_CONTENT: Record<string, { title: string; body: string }> = {
  en: {
    title: 'Privacy Policy',
    body: `**Last updated:** February 2026

**1. Overview**
FamilyFun AI ("we", "our", "the website") takes the protection of your personal data seriously. This privacy policy explains what data we collect, how we use it, and your rights under the EU General Data Protection Regulation (GDPR).

**2. Controller**
Nora Zetsche
Email: contact@familyfun.ai

**3. Data we collect**

*3.1 Location data*
When you use our service, we request your geographic location (via browser geolocation API) or you enter a city/postal code manually. This data is used solely to find activities near you and fetch local weather. It is not stored on our servers.

*3.2 Form inputs*
Information you enter (children's ages, budget, date) is processed in your browser and sent to our API only to generate activity recommendations. This data is not stored after your session ends.

*3.3 Third-party services*
We use the following third-party services:
- **Open-Meteo** (weather data) \u2014 receives your coordinates; see their privacy policy
- **Google Places API** (place data) \u2014 receives your coordinates; see Google's privacy policy
- **Anthropic Claude API** (AI recommendations) \u2014 receives anonymized request data; see Anthropic's privacy policy
- **Vercel** (hosting) \u2014 may collect access logs including IP addresses; see Vercel's privacy policy

*3.4 Cookies*
We use only essential cookies required for the website to function (e.g., cookie consent preference). If you consent, we may use analytics cookies. You can manage your preferences via the cookie settings banner.

**4. Legal basis**
We process your data based on:
- **Art. 6(1)(a) GDPR** \u2014 your consent (e.g., location access, analytics cookies)
- **Art. 6(1)(f) GDPR** \u2014 our legitimate interest in providing the service

**5. Data retention**
We do not store personal data. All processing happens in real-time during your session. Cookie consent preferences are stored locally in your browser.

**6. Your rights**
Under GDPR, you have the right to:
- Access your personal data
- Rectify inaccurate data
- Request deletion of your data
- Restrict processing
- Data portability
- Object to processing

To exercise these rights, contact us at contact@familyfun.ai.

**7. Changes**
We may update this privacy policy from time to time. Changes will be posted on this page.`,
  },
  de: {
    title: 'Datenschutzerkl\u00e4rung',
    body: `**Zuletzt aktualisiert:** Februar 2026

**1. \u00dcberblick**
FamilyFun AI (\u201ewir\u201c, \u201eunser\u201c, \u201edie Website\u201c) nimmt den Schutz Ihrer pers\u00f6nlichen Daten ernst. Diese Datenschutzerkl\u00e4rung erl\u00e4utert, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie gem\u00e4\u00df der EU-Datenschutz-Grundverordnung (DSGVO) haben.

**2. Verantwortlicher**
Nora Zetsche
E-Mail: contact@familyfun.ai

**3. Daten, die wir erheben**

*3.1 Standortdaten*
Bei Nutzung unseres Dienstes fragen wir Ihren geografischen Standort ab (per Browser-Geolocation) oder Sie geben manuell eine Stadt/PLZ ein. Diese Daten werden ausschlie\u00dflich verwendet, um Aktivit\u00e4ten in Ihrer N\u00e4he zu finden und lokales Wetter abzurufen. Sie werden nicht auf unseren Servern gespeichert.

*3.2 Formulareingaben*
Informationen, die Sie eingeben (Alter der Kinder, Budget, Datum), werden in Ihrem Browser verarbeitet und nur zur Generierung von Aktivit\u00e4tsempfehlungen an unsere API gesendet. Diese Daten werden nach Ende Ihrer Sitzung nicht gespeichert.

*3.3 Drittanbieter*
Wir nutzen folgende Drittanbieterdienste:
- **Open-Meteo** (Wetterdaten) \u2014 erh\u00e4lt Ihre Koordinaten
- **Google Places API** (Ortsdaten) \u2014 erh\u00e4lt Ihre Koordinaten
- **Anthropic Claude API** (KI-Empfehlungen) \u2014 erh\u00e4lt anonymisierte Anfragedaten
- **Vercel** (Hosting) \u2014 kann Zugriffsprotokolle inkl. IP-Adressen erfassen

*3.4 Cookies*
Wir verwenden nur essenzielle Cookies, die f\u00fcr die Funktion der Website erforderlich sind (z.B. Cookie-Einwilligungspr\u00e4ferenz). Mit Ihrer Zustimmung k\u00f6nnen wir Analyse-Cookies verwenden. Sie k\u00f6nnen Ihre Pr\u00e4ferenzen \u00fcber das Cookie-Banner verwalten.

**4. Rechtsgrundlage**
Wir verarbeiten Ihre Daten auf Grundlage von:
- **Art. 6 Abs. 1 lit. a DSGVO** \u2014 Ihre Einwilligung (z.B. Standortzugriff, Analyse-Cookies)
- **Art. 6 Abs. 1 lit. f DSGVO** \u2014 unser berechtigtes Interesse an der Bereitstellung des Dienstes

**5. Datenspeicherung**
Wir speichern keine personenbezogenen Daten. Alle Verarbeitungen erfolgen in Echtzeit w\u00e4hrend Ihrer Sitzung. Cookie-Einwilligungspr\u00e4ferenzen werden lokal in Ihrem Browser gespeichert.

**6. Ihre Rechte**
Gem\u00e4\u00df DSGVO haben Sie das Recht auf:
- Auskunft \u00fcber Ihre personenbezogenen Daten
- Berichtigung unrichtiger Daten
- L\u00f6schung Ihrer Daten
- Einschr\u00e4nkung der Verarbeitung
- Daten\u00fcbertragbarkeit
- Widerspruch gegen die Verarbeitung

Zur Aus\u00fcbung dieser Rechte kontaktieren Sie uns unter contact@familyfun.ai.

**7. \u00c4nderungen**
Wir k\u00f6nnen diese Datenschutzerkl\u00e4rung von Zeit zu Zeit aktualisieren. \u00c4nderungen werden auf dieser Seite ver\u00f6ffentlicht.`,
  },
};

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const content = PRIVACY_CONTENT[locale] || PRIVACY_CONTENT['en'];

  return (
    <main className="min-h-screen pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center pt-3 mb-6">
          <Link
            href="/"
            className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            &larr; FamilyFun AI
          </Link>
          <LanguageSwitcher />
        </div>

        <article className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{content.title}</h1>
          <div className="prose prose-gray max-w-none text-sm leading-relaxed">
            {content.body.split('\n\n').map((paragraph, i) => {
              const html = paragraph
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.+?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br />');
              return (
                <div
                  key={i}
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
