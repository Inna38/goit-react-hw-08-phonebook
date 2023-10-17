import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { loginUserThunk } from './loginUser.thunk';
import { fetchContacts } from 'redux/contacts.thunk';

const initState = {
  user: [],
  isLoading: false,
  error: null,
};

const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState: initState,
  reducers: {
    logoutAction: () => initState,
  },
  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchContacts.rejected, () => initState);
  },
});

const persistConfig = {
  key: 'login',
  storage,
};

export const loginUserReduser = persistReducer(
  persistConfig,
  loginUserSlice.reducer
);

export const { logoutAction } = loginUserSlice.actions;
