'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLocale, translations, detectLocale, DEFAULT_LOCALE, TranslationKey } from './i18n';

type TranslationValue = string | string[] | ((...args: number[]) => string);

interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: TranslationKey) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => translations[DEFAULT_LOCALE][key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<SupportedLocale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  function t(key: TranslationKey): TranslationValue {
    return translations[locale][key];
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
