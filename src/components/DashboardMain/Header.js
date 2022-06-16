import React from 'react';
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({ onDrawerToggle }) => {
  return (
    <AppBar color="info" position="sticky" elevation={0}>
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid item sx={{ display: { sm: 'none', xs: 'block' } }}>
            <IconButton onClick={onDrawerToggle}>
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="h2">
              DASHBOARD PAGE
            </Typography>
          </Grid>
          <Grid item>
            <IconButton sx={{ color: '#fff', fontSize: '1rem' }}>
              <LogoutIcon sx={{ fontSize: '1.5rem', paddingRight: '3px' }} />
              <Typography sx={{ fontSize: '1rem' }} variant="body2">
                LOGOUT
              </Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="User image" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
