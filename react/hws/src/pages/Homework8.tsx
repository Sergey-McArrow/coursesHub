import { ListItems } from '../hw8/ListItems';
import styles from './pages.module.css';

export const Homework8 = () => {
  return (
    <div className={styles.homework}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 8</h2>
        <div className={styles.content}>
          <ListItems />
        </div>
      </section>
    </div>
  );
};
