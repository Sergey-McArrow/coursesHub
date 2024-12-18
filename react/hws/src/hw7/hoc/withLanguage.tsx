import { ComponentType } from 'react';
import { TTranslations } from '../../types';
import { useLanguage } from '../hooks/useLanguage';

export function withLanguage<P extends { translations: TTranslations }>(
  WrappedComponent: ComponentType<P>
) {
  return function LanguageComponent(props: Omit<P, 'translations'>) {
    const { translations } = useLanguage();
    return <WrappedComponent {...(props as P)} translations={translations} />;
  };
}
