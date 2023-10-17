import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

import { privateApi, token } from 'http/http';

export const fetchContacts = createAsyncThunk(
  'contacts/get',
  async (_, { getState }) => {
    const state = getState();
    const stateToken = state.loginUser.user.token;
    token.set(stateToken);

    if (!stateToken) {
      return isRejectedWithValue();
    }

    const { data } = await privateApi.get('/contacts');

    return data;
  }
);

export const addContact = createAsyncThunk('contacts/post', async contact => {
  const { data } = await privateApi.post('/contacts', contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await privateApi.delete(`/contacts/${id}`);
  return data;
});
