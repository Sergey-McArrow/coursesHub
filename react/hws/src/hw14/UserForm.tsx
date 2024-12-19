import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import styles from './styles.module.css';

export const  UserForm = () =>{
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !status.trim()) {
      setError('Please fill in all fields');
      return;
    }

    dispatch(setUserInfo({ name, status }));
    setName('');
    setStatus('');
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Update Profile</h2>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
            <label htmlFor='name' className={styles.label}>
              Name
            </label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder='Enter your name'
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='status' className={styles.label}>
              Status
            </label>
            <input
              id='status'
              type='text'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={styles.input}
              placeholder='Enter your status'
            />
          </div>
          <button
            type='submit'
            className={styles.button}
            disabled={!name.trim() || !status.trim()}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
