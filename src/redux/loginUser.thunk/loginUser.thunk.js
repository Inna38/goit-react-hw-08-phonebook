import { createAsyncThunk } from '@reduxjs/toolkit';

 import { publicApi, token } from 'http/http';

export const loginUserThunk = createAsyncThunk("loginUser", async (user) => {
  const { data } = await publicApi.post("https://connections-api.herokuapp.com/users/login", user)
   token.set(`${data.token}`)

  return data
})



// 554hgfjhjkhg @ukr.net