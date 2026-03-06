import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string | string[];
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('immobee24-lang');
    if (saved && ['en', 'de', 'fr', 'ar'].includes(saved)) {
      return saved as Language;
    }
    // Default to English
    return 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('immobee24-lang', language);
    // Update document direction for RTL support
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  // Translation function that navigates nested objects
  const t = (path: string): string | string[] => {
    const keys = path.split('.');
    let result: any = translations;

    for (const key of keys) {
      if (result && typeof result === 'object') {
        result = result[key];
      } else {
        console.warn(`Translation not found: ${path}`);
        return path;
      }
    }

    // If result is an object with language keys, return the value for current language
    if (result && typeof result === 'object') {
      if (language in result) {
        return result[language];
      }
      // Check if it's an array-type translation
      if (Array.isArray(result)) {
        return result;
      }
    }

    return typeof result === 'string' ? result : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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

// Language names and flags for the selector
export const languageOptions = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
];
