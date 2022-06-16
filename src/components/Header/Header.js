import React from 'react';
import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DrawerComp from './DrawerComp';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navbarItems = ['home', 'about', 'gallery', 'register'];

  return (
    <AppBar
      sx={{
        bgcolor: '#e6005c',
        marginRight: `${isMatch ? '' : '10%'}`,
        width: `${isMatch ? '100%' : '90%'}`,
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography sx={{ fontWeight: '500', cursor: 'pointer' }} variant="body1">
              MATRIMONY SOCIETY
            </Typography>
            <DrawerComp navItems={navbarItems} />
          </>
        ) : (
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={3}>
              <Typography sx={{ fontWeight: '500' }} variant="body1">
                MATRIMONY SOCIETY
              </Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={7}>
              <Tabs>
                {navbarItems.map((item, i) => (
                  <NavLink
                    key={i}
                    to={`/${item}`}
                    style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#fff',
                      borderBottom: isActive ? '2px solid #fff' : '',
                      textDecoration: 'none',
                    })}
                  >
                    <Tab label={item} />
                  </NavLink>
                ))}

                <NavLink
                  to='/dashboard/settings'
                  style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#fff',
                    borderBottom: isActive ? '2px solid #fff' : '',
                    textDecoration: 'none',
                  })}
                >
                  <Tab label='Dashboard' />
                </NavLink>
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
