import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {
  answerQuestion,
  submitQuestionnaire,
  resetQuestionnaire,
} from '../redux/slices/questionnaireSlice'
import styles from './styles.module.css'

export const HW21 = () => {
  const dispatch = useDispatch()
  const { questions, answers, isSubmitted, score } = useSelector(
    (state: RootState) => state.questionnaire
  )

  const handleAnswer = (questionId: number, value: boolean) => {
    dispatch(answerQuestion({ questionId, value }))
  }

  const handleSubmit = () => {
    if (answers.length === questions.length) {
      dispatch(submitQuestionnaire())
    } else {
      alert('Please answer all questions before submitting!')
    }
  }

  const handleReset = () => {
    dispatch(resetQuestionnaire())
  }

  return (
    <div className={styles.container}>
      <h2>Questionnaire</h2>
      {isSubmitted ? (
        <div className={styles.results}>
          <h3>Results</h3>
          <p>
            Your score: {score} out of {questions.length}
          </p>
          <button onClick={handleReset} className={styles.resetButton}>
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className={styles.questions}>
            {questions.map((question) => {
              const answer = answers.find((a) => a.questionId === question.id)
              return (
                <div key={question.id} className={styles.questionItem}>
                  <p className={styles.questionText}>{question.text}</p>
                  <div className={styles.buttons}>
                    <button
                      className={`${styles.answerButton} ${
                        answer?.value === true ? styles.selected : ''
                      }`}
                      onClick={() => handleAnswer(question.id, true)}
                    >
                      Yes
                    </button>
                    <button
                      className={`${styles.answerButton} ${
                        answer?.value === false ? styles.selected : ''
                      }`}
                      onClick={() => handleAnswer(question.id, false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            onClick={handleSubmit}
            className={styles.submitButton}
            disabled={answers.length !== questions.length}
          >
            Submit
          </button>
        </>
      )}
    </div>
  )
}
