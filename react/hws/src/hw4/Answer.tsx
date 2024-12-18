import { FC } from 'react';
import styles from './Answer.module.css';

type TAnswerProps = {
  value: number;
  onClick: () => void;
  isCorrect?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
};

export const Answer: FC<TAnswerProps> = ({
  value,
  onClick,
  isCorrect,
  isSelected,
  disabled,
}) => {
  const getButtonClass = () => {
    if (!isSelected) return styles.button;
    if (isCorrect) return `${styles.button} ${styles.correct}`;
    return `${styles.button} ${styles.incorrect}`;
  };

  return (
    <button
      className={`${getButtonClass()} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
