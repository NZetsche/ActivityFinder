'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const IMPRESSUM_CONTENT: Record<string, { title: string; body: string }> = {
  en: {
    title: 'Legal Notice (Impressum)',
    body: `According to \u00a7 5 TMG (German Telemedia Act):

**Nora Zetsche**
Email: contact@familyfun.ai

**Responsible for content according to \u00a7 55 Abs. 2 RStV:**
Nora Zetsche

**Disclaimer:**

*Liability for content*
The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to \u00a7 7 Abs. 1 TMG under general law. According to \u00a7\u00a7 8 to 10 TMG, however, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.

*Liability for links*
Our website contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.

*Copyright*
The content and works on these pages created by the site operator are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation beyond the limits of copyright require the written consent of the respective author or creator.`,
  },
  de: {
    title: 'Impressum',
    body: `Angaben gem\u00e4\u00df \u00a7 5 TMG:

**Nora Zetsche**
E-Mail: contact@familyfun.ai

**Verantwortlich f\u00fcr den Inhalt nach \u00a7 55 Abs. 2 RStV:**
Nora Zetsche

**Haftungsausschluss:**

*Haftung f\u00fcr Inhalte*
Die Inhalte unserer Seiten wurden mit gr\u00f6\u00dfter Sorgfalt erstellt. F\u00fcr die Richtigkeit, Vollst\u00e4ndigkeit und Aktualit\u00e4t der Inhalte k\u00f6nnen wir jedoch keine Gew\u00e4hr \u00fcbernehmen. Als Diensteanbieter sind wir gem\u00e4\u00df \u00a7 7 Abs. 1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen.

*Haftung f\u00fcr Links*
Unser Angebot enth\u00e4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00f6nnen wir f\u00fcr diese fremden Inhalte auch keine Gew\u00e4hr \u00fcbernehmen. F\u00fcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

*Urheberrecht*
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechtes bed\u00fcrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`,
  },
};

export default function ImpressumPage() {
  const { locale } = useLanguage();
  const content = IMPRESSUM_CONTENT[locale] || IMPRESSUM_CONTENT['en'];

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
