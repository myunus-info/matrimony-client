import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const dashboardItems = [
  {
    icon: <SettingsOutlinedIcon />,
    label: 'Settings',
    route: 'settings',
  },
  {
    icon: <GridViewIcon />,
    label: 'Manage Users',
    route: 'manage-users',
  },
  {
    icon: <AddModeratorOutlinedIcon />,
    label: 'Make Admin',
    route: 'make-admin',
  },
  {
    icon: <RateReviewOutlinedIcon />,
    label: 'Review',
    route: 'review',
  },
  {
    icon: <AddCardOutlinedIcon />,
    label: 'Billing',
    route: 'billing',
  },
];

const Navigator = ({ ...props }) => {
  return (
    <Drawer variant="permanent" {...props}>
      <List disablePadding>
        <ListItem sx={{ cursor: 'pointer' }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: '#fff' }}> MATRIMONY SOCIETY</ListItemText>
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Divider sx={{ mb: 2, borderTop: '1px solid gray' }} />

        {dashboardItems.map(({ icon, label, route }, index) => (
          <Box key={index}>
            <ListItem>
              <NavLink
                to={`/dashboard/${route}`}
                style={({ isActive }) => ({
                  borderLeft: isActive ? '2px solid #4fc3f7' : '',
                  textDecoration: 'none',
                })}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>{icon}</ListItemIcon>
                  <ListItemText sx={{ color: '#fff' }}>{label}</ListItemText>
                </ListItemButton>
              </NavLink>
            </ListItem>

            {/* <Divider sx={{ mt: 2 }} /> */}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigator;
