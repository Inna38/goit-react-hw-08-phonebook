import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUserThunk = createAsyncThunk("loginUser", async (user) => {
  const { data } = await axios.post("https://connections-api.herokuapp.com/users/login", user)
  return data
})

// 554hgfjhjkhg @ukr.net