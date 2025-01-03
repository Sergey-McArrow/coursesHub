import { User } from './User'
import { UserForm } from './UserForm'
import styles from './styles.module.css'

export const HW14 = () => {
  return (
    <div className={styles.container}>
      <User />
      <UserForm />
    </div>
  )
}
