import { useState } from 'react';
import { citiesData } from '../const';
import { CityCard } from './CityCard';
import styles from './CitySelector.module.css';

export const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {citiesData.map((city) => (
          <button
            key={city.name}
            onClick={() => setSelectedCity(city)}
            className={`${styles.button} ${
              selectedCity.name === city.name ? styles.activeButton : ''
            }`}
          >
            {city.name}
          </button>
        ))}
      </div>
      <CityCard city={selectedCity} />
    </div>
  );
};
