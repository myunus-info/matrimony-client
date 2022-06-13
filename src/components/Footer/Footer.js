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
    <Typography align="center" variant="body2" sx={footer}>
      @ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sequi tempora ea quam!
    </Typography>
  );
};

export default Footer;
