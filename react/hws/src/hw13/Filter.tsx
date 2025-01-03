import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setFilter, selectFilteredUsers } from '../redux/usersSlice'
import styles from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootState) => state.users.filter)
  const filteredUsers = useSelector(selectFilteredUsers)

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='Search users...'
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className={styles.input}
        />
      </div>

      {filteredUsers.length > 0 ? (
        <ul className={styles.list}>
          {filteredUsers.map((user) => (
            <li key={user.id} className={styles.item}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResults}>No users found</p>
      )}
    </div>
  )
}
