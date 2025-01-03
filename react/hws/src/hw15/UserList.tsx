import styles from './UserList.module.css'

interface User {
  id: number
  name: string
}

interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  return (
    <div className={styles.container}>
      {users.map((user) => (
        <div key={user.id} className={styles.card}>
          <div className={styles.cardContent}>
            <p className={styles.userName}>{user.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
