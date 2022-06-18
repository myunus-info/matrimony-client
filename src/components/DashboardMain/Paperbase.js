import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import Header from './Header';
import Navigator from './Navigator';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../../utils/auth-context';

const drawerWidth = 256;
const Paperbase = () => {
  const authCtx = useContext(AuthContext);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        {isSmUp ? null : (
          <Navigator
            PaperProps={{ style: { width: drawerWidth, backgroundColor: '#101f33' } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}

        <Navigator
          PaperProps={{ style: { width: drawerWidth, backgroundColor: '#101f33' } }}
          sx={{ display: { sm: 'block', xs: 'none' } }}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header onDrawerToggle={handleDrawerToggle} />

        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          {authCtx.isLoggedIn ? <Outlet /> : <Navigate to="/register" />}
        </Box>
      </Box>
    </Box>
  );
};

export default Paperbase;
