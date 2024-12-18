import { createContext } from 'react';
import { TLanguageContextType } from '../../types';

export const LanguageContext = createContext<TLanguageContextType | null>(null);
