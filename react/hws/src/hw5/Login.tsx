import { useState, FormEvent } from 'react';
import styles from './Login.module.css';
import { SocialButton } from './SocialButton';
import { SpotifyLogo } from './SpotifyLogo';
import { Toast } from '../shared/components/Toast';

type TFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const [formData, setFormData] = useState<TFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(formData.email)) {
      setToast({
        message: 'Пожалуйста, введите корректный email',
        type: 'error',
      });
      return;
    }

    if (formData.password.length < 6) {
      setToast({
        message: 'Пароль должен содержать минимум 6 символов',
        type: 'error',
      });
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setToast({ message: 'Вы успешно вошли в систему!', type: 'success' });
      setFormData({ email: '', password: '' });
    } catch (_err) {
      setToast({ message: 'Произошла ошибка при входе', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setToast({ message: `Вход через ${provider}`, type: 'info' });
  };

  return (
    <div className={styles.container}>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <SpotifyLogo className={styles.logo} />
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
      <p className={styles.text2xl}>Sign in with</p>
      <div className={styles.socialButtons}>
        <SocialButton
          provider='google'
          icon={
            <svg viewBox='0 0 24 24' width='24' height='24'>
              <path
                fill='currentColor'
                d='M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z'
              />
            </svg>
          }
          onClick={() => handleSocialLogin('google')}
        />
        <SocialButton
          provider='facebook'
          icon={
            <svg viewBox='0 0 24 24' width='24' height='24'>
              <path
                fill='currentColor'
                d='M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z'
              />
            </svg>
          }
          onClick={() => handleSocialLogin('facebook')}
        />
        <SocialButton
          provider='github'
          icon={
            <svg viewBox='0 0 24 24' width='24' height='24'>
              <path
                fill='currentColor'
                d='M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z'
              />
            </svg>
          }
          onClick={() => handleSocialLogin('github')}
        />
      </div>

      <p className={styles.divider}>или</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={styles.input}
            placeholder='example@mail.com'
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='password' className={styles.label}>
            Пароль
          </label>
          <input
            id='password'
            type='password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={styles.input}
            placeholder='••••••'
            required
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}

        <button type='submit' className={styles.button} disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
};
