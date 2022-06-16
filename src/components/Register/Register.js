import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import couple from '../../img/couple.jpg';
import { Autocomplete, Button, FormControl, TextField, Typography } from '@mui/material';
import { styles } from './styles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = ({ gender }) => {
  const candidateTypes = ['Myself', 'Daughter', 'Son', 'Sister', 'Brother', 'Relative', 'Friend'];

  const [isLogin, setIsLogin] = useState(false);
  const switchAuthModeHandler = () => setIsLogin(prevState => !prevState);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={3}
        sx={{
          placeItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '95%',
          margin: '0 auto',
        }}
      >
        <Grid sx={styles.registerImage} item xs={12} sm={6}>
          <Box sx={{ width: '100%', height: '95vh' }}>
            <img style={{ width: '100%', height: '100%' }} src={couple} alt="Register" />
          </Box>
          <div style={styles.overlay} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginTop: '4rem' }}>
          <Typography variant="h5">{`${isLogin ? 'LOGIN' : 'SIGNUP'}  TO FIND YOUR MATCH`}</Typography>
          <Box component="form">
            {isLogin ? (
              <>
                <FormControl sx={{ width: '100%' }}>
                  <TextField type={'email'} label="Your Email" variant="standard" margin="normal" />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                  <TextField type={'password'} label="Password" variant="standard" margin="normal" />
                </FormControl>
                <Button
                  sx={{ width: '100%', margin: '1.5rem 0', fontSize: '1rem' }}
                  variant="contained"
                  color="primary"
                >
                  {isLogin ? 'LOGIN' : 'SIGNUP'}
                </Button>
                <div style={{ width: '50%', margin: '0 auto' }}>
                  <Typography textAlign={'center'} variant="body2">
                    {isLogin ? 'Are You a New User?' : 'Already have an account?'}
                  </Typography>
                  <Typography
                    textAlign={'center'}
                    onClick={switchAuthModeHandler}
                    sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                    variant="body1"
                  >
                    {isLogin ? 'SIGNUP' : 'LOGIN'}
                  </Typography>
                </div>
              </>
            ) : (
              <>
                <FormControl sx={{ width: '100%' }}>
                  <TextField type={'text'} label="Your Name" variant="standard" margin="normal" />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                  <TextField type={'email'} label="Your Email" variant="standard" margin="normal" />
                </FormControl>
                <Grid container sx={{ placeItems: 'center' }}>
                  <Grid item xs={5}>
                    <FormControl sx={{ width: '100%' }}>
                      <Autocomplete
                        options={candidateTypes}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label="Profile looking for?"
                            variant="standard"
                            margin="normal"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={5}>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField type={'number'} label="Mobile No." variant="standard" margin="normal" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl sx={{ width: '100%' }}>
                      <Autocomplete
                        value={gender}
                        options={['Male', 'Female']}
                        renderInput={params => (
                          <TextField {...params} label="Gender" variant="standard" margin="normal" />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={5}>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField type={'number'} label="Age" variant="standard" margin="normal" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField type={'password'} label="Password" variant="standard" margin="normal" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={5}>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        type={'password'}
                        label="Confirm password"
                        variant="standard"
                        margin="normal"
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={3}>
                    <Button
                      sx={{ width: '100%', margin: '1.5rem 0', fontSize: '1rem' }}
                      variant="contained"
                      color="primary"
                    >
                      {isLogin ? 'LOGIN' : 'SIGNUP'}
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography textAlign={'center'} variant="body2">
                      {isLogin ? 'New User?' : 'Already have an account?'}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    {/* <Button
                  sx={{ width: '100%', margin: '1.5rem 0', fontSize: '1rem' }}
                  variant="contained"
                  color="info"
                >
                  Login
                </Button> */}
                    <Typography
                      onClick={switchAuthModeHandler}
                      sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                      variant="body1"
                    >
                      {isLogin ? 'SIGNUP' : 'LOGIN'}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Register;
