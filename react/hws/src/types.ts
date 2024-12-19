import { citiesData } from './const';

export type TCity = (typeof citiesData)[0];

export type TUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    street: string;
    city: string;
  };
};

export type TLanguage = 'en' | 'ru';

export type TTranslations = {
  title: string;
  description: string;
  switchLanguage: string;
};

export type TLanguageContextType = {
  language: TLanguage;
  setLanguage: (lang: TLanguage) => void;
  translations: TTranslations;
};

export type TUserState = {
  name: string;
  status: string;
};
