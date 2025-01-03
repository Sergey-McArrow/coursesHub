import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { fetchRandomQuote } from '../redux/slices/quoteSlice'
import styles from './styles.module.css'
import { Loader } from 'lucide-react'

export const HW22 = () => {
  const dispatch = useAppDispatch()
  const { quote, status, error } = useAppSelector((state) => state.quote)

  useEffect(() => {
    handleFetchQuote()
  }, [])

  const handleFetchQuote = () => {
    dispatch(fetchRandomQuote())
  }

  if (status === 'loading') {
    return (
      <div className={styles.container}>
        <Loader className={styles.loader} size={40} />
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          {error}
          <button onClick={handleFetchQuote} className={styles.retryButton}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {quote ? (
        <div className={styles.quoteCard}>
          <blockquote className={styles.quote}>
            <p className={styles.content}>{quote.quote}</p>
            <footer className={styles.author}>— {quote.author}</footer>
          </blockquote>
        </div>
      ) : (
        <div className={styles.empty}>No quote available</div>
      )}
      <button onClick={handleFetchQuote} className={styles.newQuoteButton}>
        New Quote
      </button>
    </div>
  )
}
