import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from './styles.module.css';

export const User = () => {
  const { name, status } = useSelector((state: RootState) => state.user);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>User Profile</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <p className={styles.text}>
            Name: {name || 'Not set'}
          </p>
          <p className={styles.text}>
            Status: {status || 'Not set'}
          </p>
        </div>
      </div>
    </div>
  );
};
