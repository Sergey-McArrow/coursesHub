import { type TCity } from '../types';
import styles from './CityCard.module.css';

type Props = {
  city: TCity;
};

export const CityCard = ({ city }: Props) => {
  return (
    <div className={styles.card}>
      <img src={city.imageUrl} alt={city.name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{city.name}</h3>
        <p className={styles.description}>{city.description}</p>
        <ul className={styles.factsList}>
          {city.facts.map((fact, index) => (
            <li key={index} className={styles.factItem}>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
