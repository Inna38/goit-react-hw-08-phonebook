import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from 'http/http';

export const fetchContacts = createAsyncThunk('contacts/get', async () => {
    const { data } = await privateApi.get('/contacts');
    return data;
});

export const addContact = createAsyncThunk('contacts/post', async contact => {
     const { data } = await privateApi.post('/contacts', contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await privateApi.delete(`/contacts/${id}`);
  return data;
});
