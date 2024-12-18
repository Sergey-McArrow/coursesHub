import { useState, useEffect } from 'react';
import { Answer } from './Answer';
import styles from './MathQuiz.module.css';

export const MathQuiz = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const generateProblem = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = newNum1 + newNum2;

    const wrongAnswers = new Set<number>();
    while (wrongAnswers.size < 3) {
      const wrong =
        correctAnswer +
        Math.floor(Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1);
      if (wrong !== correctAnswer && wrong > 0) {
        wrongAnswers.add(wrong);
      }
    }

    const newAnswers = [...wrongAnswers, correctAnswer].sort(
      () => Math.random() - 0.5
    );

    setNum1(newNum1);
    setNum2(newNum2);
    setAnswers(newAnswers);
    setSelectedAnswer(null);
    setMessage('');
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const handleAnswer = (answer: number) => {
    const correctAnswer = num1 + num2;
    setSelectedAnswer(answer);

    if (answer === correctAnswer) {
      setScore(score + 1);
      setMessage('Правильно!');
    } else {
      setMessage('Неправильно. Попробуйте еще раз!');
    }

    setTimeout(generateProblem, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        {num1} + {num2} = ?
      </div>

      <div className={styles.answers}>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            value={answer}
            onClick={() => handleAnswer(answer)}
            isSelected={selectedAnswer === answer}
            isCorrect={selectedAnswer === answer && answer === num1 + num2}
            disabled={selectedAnswer !== null}
          />
        ))}
      </div>

      <div className={styles.score}>Score: {score}</div>

      {message && (
        <div
          className={`${styles.message} ${
            message === 'Правильно!' ? styles.correct : styles.incorrect
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};
