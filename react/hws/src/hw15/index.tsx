import { useCallback, useMemo, useState } from 'react'
import { UserList } from './UserList'
import styles from './index.module.css'

const initialUsers = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  { id: 3, name: 'User3' },
  { id: 4, name: 'User4' },
  { id: 5, name: 'User5' },
]

export const HW15 = () => {
  const [filter, setFilter] = useState('')

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value)
    },
    []
  )

  const filteredUsers = useMemo(
    () =>
      initialUsers.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter]
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          className={styles.searchInput}
          placeholder='Filter users...'
          value={filter}
          onChange={handleFilterChange}
        />
        <UserList users={filteredUsers} />
      </div>
    </div>
  )
}
