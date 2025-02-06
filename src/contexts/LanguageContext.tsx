import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from '../types/language';
import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });
  const [translations, setTranslations] = useState<Translations>(
    language === 'en' ? enTranslations : viTranslations
  );

  useEffect(() => {
    localStorage.setItem('language', language);
    setTranslations(language === 'en' ? enTranslations : viTranslations);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}