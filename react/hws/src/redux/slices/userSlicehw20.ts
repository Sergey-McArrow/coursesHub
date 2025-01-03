import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface UsersState {
  users: User[]
  loading: boolean
  error: string | null
  loggedUser?: User
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  loggedUser: undefined,
}

const userSlice = createSlice({
  name: 'usersHW20',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      state.loading = false
      state.error = null
    },
    addUserSuccess: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    updateUserSuccess: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      )
      if (index !== -1) {
        state.users[index] = action.payload
      }
    },
    deleteUserSuccess: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    loginSuccess: (state, action: PayloadAction<number>) => {
      state.loggedUser = state.users.find((user) => user.id === action.payload)
    },
    logoutSuccess: (state) => {
      state.loggedUser = undefined
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {
  setUsers,
  addUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  setError,
  loginSuccess,
  logoutSuccess,
} = userSlice.actions

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    dispatch(setUsers(data))
  } catch (error) {
    dispatch(
      setError(error instanceof Error ? error.message : 'Failed to fetch users')
    )
  }
}

export const addUser = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json',
      },
    })
    const data = await response.json()
    dispatch(addUserSuccess(data))
  } catch (error) {
    dispatch(
      setError(error instanceof Error ? error.message : 'Failed to add user')
    )
  }
}

export const updateUser = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
    const data = await response.json()
    dispatch(updateUserSuccess(data))
  } catch (error) {
    dispatch(
      setError(error instanceof Error ? error.message : 'Failed to update user')
    )
  }
}

export const deleteUser = (id: number) => async (dispatch: AppDispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
    dispatch(deleteUserSuccess(id))
  } catch (error) {
    dispatch(
      setError(error instanceof Error ? error.message : 'Failed to delete user')
    )
  }
}

export default userSlice.reducer
