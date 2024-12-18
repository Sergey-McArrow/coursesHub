import { useState } from 'react';
import { ratingList, ratings } from '../const';
import styles from './Rating.module.css';

export const Rating = () => {
  const [ratingValue, setRatingValue] = useState<number>(0);

  return (
    <div className={styles.container}>
      <img
        src={ratingList[ratingValue]}
        alt={`Rating ${ratingValue + 1}`}
        className={styles.image}
      />

      <div className={styles.controls}>
        {ratings.map((rating, index) => (
          <button
            key={rating.value}
            onClick={() => setRatingValue(index)}
            style={{
              backgroundColor: ratingValue === index ? '#404040' : '#2d2d2d',
            }}
          >
            {rating.label}
          </button>
        ))}
      </div>
    </div>
  );
};
