import { configureStore } from '@reduxjs/toolkit';


import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { loginUserReduser } from './loginUser.thunk/loginUser.slice';


export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    loginUser: loginUserReduser,
  },
 });

