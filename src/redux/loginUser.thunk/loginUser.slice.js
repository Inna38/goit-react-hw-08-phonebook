import { createSlice } from '@reduxjs/toolkit';

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

export const loginUserReduser = loginUserSlice.reducer;
