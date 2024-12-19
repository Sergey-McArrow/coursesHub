import { Filter } from '../hw13/Filter';
import styles from './pages.module.css';

export function Homework13() {
  return (
    <div className={styles.homework}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 13 - User Filter</h2>
        <div className={styles.content}>
          <Filter />
        </div>
      </section>
    </div>
  );
}
