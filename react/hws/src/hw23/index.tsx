import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import styles from './styles.module.css'
import { useEffect } from 'react'
import {
  fetchUsers,
  loginSuccess,
  logoutSuccess,
} from '../redux/slices/userSlicehw20'
import { useNavigate } from 'react-router-dom'

export const HW23 = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const users = useSelector((state: RootState) => state.usersHW20.users)
  const loggedUser = useSelector(
    (state: RootState) => state.usersHW20.loggedUser
  )
  const handleSignIn = (id: number) => {
    dispatch(loginSuccess(id))
  }

  const handleLogout = () => {
    dispatch(logoutSuccess())
    navigate('/')
  }
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div className={styles.container}>
      {loggedUser ? (
        <div className={styles.userCard}>
          <h2 className={styles.userName}>{loggedUser.name}</h2>
          <div className={styles.actions}>
            <button
              onClick={() => handleLogout()}
              className={styles.logoutButton}
            >
              Logout
            </button>
          </div>
        </div>
      ) : null}
      <div className={styles.userList}>
        {users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <h2 className={styles.userName}>{user.name}</h2>
            <div className={styles.userInfo}>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
            <div className={styles.actions}>
              <button
                onClick={() => handleSignIn(user.id)}
                className={styles.loginButton}
              >
                Login
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
