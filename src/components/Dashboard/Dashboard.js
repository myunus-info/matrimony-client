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
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Grid container sx={{ placeItems: 'center' }}>
      <Grid item xs={3}>
        <Drawer
          variant="permanent"
          // open={true}
          PaperProps={{
            sx: { backgroundColor: '#e6005c' },
          }}
        >
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
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                  <ListItemText sx={{ color: '#fff' }} primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
