import { DisplayValue } from '../hw12/DisplayValue';
import styles from './pages.module.css';

export function Homework12() {
  return (
    <div className={styles.container}>
      <h1>Homework 12 - Value Display</h1>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <DisplayValue />
      </div>
    </div>
  );
}
