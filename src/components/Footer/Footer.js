import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  const footer = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '5vh',
    bgcolor: '#333',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '5vh',
  };
  return (
    <Typography sx={footer} variant="body2">
      &copy; Lorem ipsum dolor, sit amet consectetur adipisicing elit. {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
