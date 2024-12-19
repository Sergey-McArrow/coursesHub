import { createReducer } from '@reduxjs/toolkit';
import { setUserInfo } from './actions';
import { TUserState } from '../types';

const initialState: TUserState = {
  name: '',
  status: '',
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserInfo, (state, action) => {
    state.name = action.payload.name;
    state.status = action.payload.status;
  });
});
