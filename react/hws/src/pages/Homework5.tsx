import { Login } from '../hw5/Login';
import styles from './pages.module.css';

export const Homework5 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 5</h2>
        <div className={styles.content}>
          <Login />
        </div>
      </section>
    </div>
  );
};
