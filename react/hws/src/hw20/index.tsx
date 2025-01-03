import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import {
  addUser,
  deleteUser,
  fetchUsers,
  updateUser,
  User,
} from '../redux/slices/userSlicehw20'
import styles from './styles.module.css'

export const HW20 = () => {
  const dispatch = useAppDispatch()
  const users = useSelector((state: RootState) => state.usersHW20.users)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingUser) {
      dispatch(updateUser({ ...editingUser, ...formData }))
      setEditingUser(null)
    } else {
      dispatch(addUser({ id: Date.now(), ...formData }))
    }
    setFormData({ name: '', email: '', phone: '' })
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    })
  }

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {editingUser ? 'Edit User' : 'Add New User'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={styles.input}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={styles.input}
          required
        />
        <input
          type='tel'
          placeholder='Phone'
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={styles.input}
          required
        />
        <button type='submit' className={styles.submitButton}>
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </form>

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
                onClick={() => handleEdit(user)}
                className={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
