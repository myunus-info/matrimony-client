import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';
import DraweComp from './DraweComp';

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navbarItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <AppBar sx={{ bgcolor: '#FF005A' }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography sx={{ fontStyle: 'italic', fontWeight: '700' }} variant="2">
              MATRIMONY SOCIETY
            </Typography>
            <DraweComp navItems={navbarItems} />
          </>
        ) : (
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={3}>
              <Typography sx={{ fontStyle: 'italic', fontWeight: '700' }} variant="2">
                MATRIMONY SOCIETY
              </Typography>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={3}>
              <Box display={'flex'}>
                <Button sx={{ marginLeft: 'auto' }} variant="contained" color="secondary">
                  Signup
                </Button>
                <Button sx={{ marginLeft: 1 }} variant="contained" color="secondary">
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
