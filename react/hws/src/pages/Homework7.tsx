import { LanguageSwitcher } from '../hw7/LanguageSwitcher';
import { LanguageProvider } from '../hw7/HOC';
import styles from './pages.module.css';

export function Homework7() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 7</h2>
      <div className={styles.content}>
        <LanguageProvider>
          <LanguageSwitcher />
        </LanguageProvider>
      </div>
    </section>
  );
}
