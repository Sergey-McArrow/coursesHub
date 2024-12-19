import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserState } from '../types';

interface UserState {
  name: string;
  status: string;
}

const initialState: UserState = {
  name: '',
  status: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<TUserState>) => {
      state.name = action.payload.name;
      state.status = action.payload.status;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
