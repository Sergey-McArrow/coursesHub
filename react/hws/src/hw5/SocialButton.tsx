import { ReactNode } from 'react';
import styles from './SocialButton.module.css';

type Props = {
  icon: ReactNode;
  provider: 'google' | 'facebook' | 'github';
  onClick: () => void;
};

export const SocialButton = ({ icon, provider, onClick }: Props) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[provider]}`}
      onClick={onClick}
    >
      <span className={styles.icon}>{icon}</span>
      <span>
        Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
      </span>
    </button>
  );
};
