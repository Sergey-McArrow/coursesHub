import { createAction } from '@reduxjs/toolkit';
import { TUserState } from '../types';

export const setUserInfo = createAction<TUserState>('SET_USER_INFO');
