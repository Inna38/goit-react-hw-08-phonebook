import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function Navigation() {
  const token = useSelector(state => state.loginUser.user.token);
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
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {token ? (
              <NavLink to="/contacts" className={css.link}>
                Contacts
              </NavLink>
            ) : (
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            )}
          </Typography>
          {!token ? (
            <>
              <NavLink to="/register" className={css.link}>
                Register
              </NavLink>
              <NavLink to="/login" className={css.link}>
                Login
              </NavLink>
            </>
          ) : (
            <UserMenu />
          )}
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
}
