import { React } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
