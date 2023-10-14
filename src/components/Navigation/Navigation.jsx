import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink, Outlet } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          </Typography>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={css.link}>
            Login
          </NavLink>
        </Toolbar>
      </AppBar>
          
      <Outlet />
    </Box>
  );
}