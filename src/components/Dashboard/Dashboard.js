import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { dashboardItems } from './dashboardItems';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../utils/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <Grid container sx={{ placeItems: 'center' }}>
      <Grid item xs={3}>
        <Drawer variant="permanent" PaperProps={{ sx: { backgroundColor: '#e6005c' } }}>
          <Toolbar variant="dense" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            <IconButton sx={{ color: '#fff' }}>
              <HomeOutlinedIcon />
            </IconButton>
            <Typography color={'#fff'} variant="body2">
              MATRIMONY SOCIETY
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {dashboardItems.map((item, i) => (
              <ListItem key={i}>
                <NavLink
                  to={`/dashboard/${item.route}`}
                  style={({ isActive }) => ({
                    borderLeft: isActive ? '2px solid #fff' : '',
                    textDecoration: 'none',
                  })}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                    <ListItemText sx={{ color: '#fff' }} primary={item.label} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      <Grid item xs={9}>
        {auth ? <Outlet /> : <Navigate to="/register" />}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
