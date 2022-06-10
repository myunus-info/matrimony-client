import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const DraweComp = ({ navItems }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        open={open}
        onClick={() => setOpen(false)}
        PaperProps={{
          sx: { bgcolor: '#ff005a' },
        }}
      >
        <Toolbar variant="dense" />
        <Divider />

        <List>
          {navItems.map((item, i) => (
            <ListItem key={i} onClick={() => setOpen(false)} divider>
              <ListItemButton>
                <ListItemText primary={item} sx={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto', color: '#fff' }} onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </>
  );
};

export default DraweComp;
