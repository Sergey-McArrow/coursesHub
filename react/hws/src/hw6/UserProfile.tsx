import { useEffect, useState } from 'react';
import axios from 'redaxios';
import styles from './UserProfile.module.css';
import type { TUser } from '../types';

export function UserProfile() {
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get<TUser>(
        `https://jsonplaceholder.typicode.com/users/${randomId}`
      );
      setUser(response.data);
      console.log(response.data);
      setError(null);
    } catch (_err) {
      setError('Failed to fetch user data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!user) {
    return <div className={styles.error}>No user data available</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{user.name}'s Profile</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Information</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Email</span>
            <a href={`mailto:${user.email}`} className={styles.link}>
              {user.email}
            </a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Phone</span>
            <a href={`tel:${user.phone}`} className={styles.link}>
              {user.phone}
            </a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Website</span>
            <a
              href={`https://${user.website}`}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              {user.website}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Company</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Company Name</span>
            <span className={styles.value}>{user.company.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Catch Phrase</span>
            <span className={styles.value}>{user.company.catchPhrase}</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Address</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Street</span>
            <span className={styles.value}>{user.address.street}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>City</span>
            <span className={styles.value}>{user.address.city}</span>
          </div>
        </div>
      </section>

      <button onClick={fetchUser} disabled={loading} className={styles.button}>
        {loading ? 'Loading...' : 'Load Random User'}
      </button>
    </div>
  );
}
