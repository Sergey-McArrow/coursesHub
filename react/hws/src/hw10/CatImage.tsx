import { useState } from 'react';
import styles from './CatImage.module.css';

export function CatImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCatImage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      if (!response.ok) {
        throw new Error('Failed to fetch cat image');
      }

      const [data] = await response.json();
      setImageUrl(data.url);
    } catch (err) {
      setError('Error loading cat image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Random cat"
            className={styles.image}
          />
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button
        onClick={fetchCatImage}
        disabled={isLoading}
        className={styles.button}
      >
        {isLoading ? 'Loading...' : 'Get New Cat'}
      </button>
    </div>
  );
}
