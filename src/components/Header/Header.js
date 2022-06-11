import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DrawerComp from './DrawerComp';

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navbarItems = ['Home', 'About', 'Gallery', 'Contact', 'Admin'];

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
            <Typography sx={{ fontStyle: 'italic', fontWeight: '700', cursor: 'pointer' }} variant="h6">
              MATRIMONY SOCIETY
            </Typography>
            <DrawerComp navItems={navbarItems} />
          </>
        ) : (
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={3}>
              <Typography sx={{ fontStyle: 'italic', fontWeight: '700' }} variant="h6">
                MATRIMONY SOCIETY
              </Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={7}>
              <Tabs
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(_, val) => setValue(val)}
              >
                {navbarItems.map((item, i) => (
                  <Tab key={i} label={item} />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
