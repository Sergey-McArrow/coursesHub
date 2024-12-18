import { TTranslations } from '../types';
import { useLanguage } from './HOC';
import styles from './LanguageSwitcher.module.css';

interface TextContentProps {
  translations: TTranslations;
}

export function TextContent({ translations }: TextContentProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translations.title}</h1>
      <p className={styles.description}>{translations.description}</p>
      <button onClick={toggleLanguage} className={styles.button}>
        {translations.switchLanguage}
      </button>
    </div>
  );
}
