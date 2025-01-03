import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UsersState {
  list: Array<User>;
  filter: string;
}

const initialState: UsersState = {
  list: [
    { id: 1, name: 'John Doe', username: 'johnd', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', username: 'janes', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', username: 'bobj', email: 'bob@example.com' },
    {
      id: 4,
      name: 'Alice Brown',
      username: 'aliceb',
      email: 'alice@example.com',
    },
  ],
  filter: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = usersSlice.actions;

export const selectFilteredUsers = (state: { users: UsersState }): User[] => {
  const filter = state.users.filter.toLowerCase();
  return state.users.list.filter(
    (user) =>
      user.name.toLowerCase().includes(filter) ||
      user.username.toLowerCase().includes(filter) ||
      user.email.toLowerCase().includes(filter)
  );
};

export default usersSlice.reducer;
