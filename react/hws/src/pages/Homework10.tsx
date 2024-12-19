import { CatImage } from '../hw10/CatImage';
import styles from './pages.module.css';

export function Homework10() {
  return (
    <div className={styles.container}>
      <h1>Homework 10 - Cat Image Generator</h1>
      <CatImage />
    </div>
  );
}
