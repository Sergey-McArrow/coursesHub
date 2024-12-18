import { useState, ReactNode } from 'react';
import { TLanguage } from '../../types';
import { translations } from '../../const';
import { LanguageContext } from './LanguageContextType';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<TLanguage>('en');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
