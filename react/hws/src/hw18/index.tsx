import { Facebook, Linkedin, Twitter } from 'lucide-react'
import styles from './index.module.css'

export const HW18 = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <div className={styles.divider}></div>

      <ul className={styles.contactList}>
        <li className={styles.contactItem}> +380 123 456 789</li>
        <li className={styles.contactItem}>example@email.com</li>
      </ul>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.inputRow}>
            <input type='email' placeholder='Email' className={styles.input} />
            <input type='text' placeholder='Name' className={styles.input} />
          </div>
          <textarea
            placeholder='Message'
            className={styles.textarea}
          ></textarea>
        </form>

        <div className={styles.socialLinks}>
          <Facebook className={styles.socialIcon} />
          <Twitter className={styles.socialIcon} />
          <Linkedin className={styles.socialIcon} />
        </div>
      </div>
    </section>
  )
}
