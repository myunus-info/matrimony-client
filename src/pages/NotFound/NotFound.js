import { Box, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const NotFound = () => {
  return (
    <>
      <Header />

      <Box sx={{ maxWidth: '90%', margin: '7rem auto 0', textAlign: 'center' }}>
        <Typography variant="h4">Page Not Found!!!🔥🔥🔥</Typography>
        <Typography variant="h3">404</Typography>
        <Typography variant="h5">Please Try again later!!!</Typography>
      </Box>
      <Footer />
    </>
  );
};

export default NotFound;
