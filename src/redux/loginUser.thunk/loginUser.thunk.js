import { createAsyncThunk } from '@reduxjs/toolkit';

 import { publicApi } from 'http/http';

export const loginUserThunk = createAsyncThunk("loginUser", async (user) => {
  const { data } = await publicApi.post("https://connections-api.herokuapp.com/users/login", user)
  return data
})



// 554hgfjhjkhg @ukr.net

//wwwwwwe