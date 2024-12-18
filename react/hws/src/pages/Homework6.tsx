import { UserProfile } from '../hw6/UserProfile';
import styles from './pages.module.css';

export const Homework6 = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 6</h2>
      <div className={styles.content}>
        <UserProfile />
      </div>
    </section>
  );
};
