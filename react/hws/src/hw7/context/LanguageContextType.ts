import { TLanguage, TTranslations } from '../../types';
import { createContext } from 'react';

export type TLanguageContextType = {
  language: TLanguage;
  setLanguage: (_lang: TLanguage) => void;
  translations: TTranslations;
};

export const LanguageContext = createContext<TLanguageContextType | null>(null);
