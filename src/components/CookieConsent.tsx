'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

type ConsentState = 'undecided' | 'essential' | 'all';

function getStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('cookie_consent');
  if (stored === 'essential' || stored === 'all') return stored;
  return null;
}

function storeConsent(value: ConsentState) {
  localStorage.setItem('cookie_consent', value);
}

export default function CookieConsent() {
  const { t } = useLanguage();
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsent(getStoredConsent());
  }, []);

  // Don't render anything server-side or if consent already given
  if (!mounted || consent !== null) return null;

  function acceptAll() {
    storeConsent('all');
    setConsent('all');
  }

  function acceptEssential() {
    storeConsent('essential');
    setConsent('essential');
  }

  function saveSettings() {
    const value = analyticsChecked ? 'all' : 'essential';
    storeConsent(value);
    setConsent(value);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:pb-6">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm">
          {t('cookieTitle') as string}
        </h3>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          {t('cookieDescription') as string}{' '}
          <Link href="/privacy" className="text-primary-600 hover:underline">
            {t('privacyPolicy') as string}
          </Link>
        </p>

        {showSettings ? (
          <div className="space-y-3 mb-4">
            {/* Essential */}
            <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-0.5 rounded accent-primary-600"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {t('cookieEssentialLabel') as string}
                </p>
                <p className="text-xs text-gray-500">
                  {t('cookieEssentialDescription') as string}
                </p>
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
                className="mt-0.5 rounded accent-primary-600"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {t('cookieAnalyticsLabel') as string}
                </p>
                <p className="text-xs text-gray-500">
                  {t('cookieAnalyticsDescription') as string}
                </p>
              </div>
            </label>

            <button
              onClick={saveSettings}
              className="w-full py-2.5 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors"
            >
              {t('cookieSaveSettings') as string}
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors"
            >
              {t('cookieAcceptAll') as string}
            </button>
            <button
              onClick={acceptEssential}
              className="flex-1 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              {t('cookieAcceptEssential') as string}
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="py-2.5 px-3 text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              {t('cookieSettings') as string}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
