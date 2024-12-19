import { useEffect, useRef, useState } from 'react';
import styles from './DisplayValue.module.css';

export const DisplayValue = () => {
  const previousValue = useRef<string>('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    previousValue.current = inputValue;
    setInputValue(inputValue);
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Введите текст...'
          className={styles.input}
        />
      </div>
      <p className={styles.valueText}>
        Текущее значение: <span className={styles.valueSpan}>{inputValue}</span>
      </p>
      <p className={styles.valueText}>
        Предыдущее значение:{' '}
        <span className={styles.valueSpan}>{previousValue.current}</span>
      </p>
    </div>
  );
};
