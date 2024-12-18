import { Rating } from '../hw3/Rating';
import { List } from '../hw3/List';
import styles from './pages.module.css';

export const Homework3 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 3</h2>
        <div className={styles.content}>
          <Rating />
          <List />
        </div>
      </section>
    </div>
  );
};
