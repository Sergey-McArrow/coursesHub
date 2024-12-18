import { CitySelector } from '../hw4/CitySelector';
import { MathQuiz } from '../hw4/MathQuiz';
import styles from './pages.module.css';

export const Homework4 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 4</h2>
        <div className={styles.content}>
          <CitySelector />
        </div>
        <div className={styles.content}>
          <MathQuiz />
        </div>
      </section>
    </div>
  );
};
