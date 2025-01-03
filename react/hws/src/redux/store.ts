import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import userReducer from './slices/userSlice'
import users20Reducer from './slices/userSlicehw20'
import questionnaireReducer from './slices/questionnaireSlice'
import quoteReducer from './slices/quoteSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    usersHW20: users20Reducer,
    questionnaire: questionnaireReducer,
    quote: quoteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
