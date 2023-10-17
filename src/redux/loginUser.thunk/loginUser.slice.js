import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { loginUserThunk } from './loginUser.thunk';

const initState = {
  user: [],
  isLoading: false,
  error: null,
};

const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState: initState,
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
      });
  },
});

const persistConfig = {
  key: "login",
  storage,
}

export const loginUserReduser = persistReducer(persistConfig, loginUserSlice.reducer)

