import { DynamicForm } from '../hw9/DynamicForm';
import styles from './pages.module.css';

export function Homework9() {
  return (
    <div className={styles.homework}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 9</h2>
        <div className={styles.content}>
          <DynamicForm />
        </div>
      </section>
    </div>
  );
}
