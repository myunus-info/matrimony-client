import React from 'react';
import {
  Autocomplete,
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import AuthContext from '../../utils/auth-context';
import useHttp from '../../hooks/useHttp';

const Settings = () => {
  const Input = styled('input')({
    display: 'none',
  });
  const { sendRequest, isLoading, error } = useHttp();
  const authCtx = useContext(AuthContext);
  const { name, email, phone, age, gender, profileFor, password, confirmPassword } = authCtx.userData;

  const updateUser = (user, userData) => {
    console.log('User: ', user);
    console.log('userData: ', userData);
  };
  const updateUserHandler = userInfo => {
    sendRequest(
      {
        url: 'http://localhost:5000/api/updateMe',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: userInfo,
      },
      updateUser.bind(null, userInfo)
    );
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    updateUserHandler(data);
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography mb={1} variant="h5">
        YOUR ACCOUNT SETTINGS
      </Typography>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          value={name}
          type={'text'}
          label="Your Name"
          variant="outlined"
          color="info"
          margin="normal"
          {...register('name')}
        />
      </FormControl>
      <FormControl sx={{ width: '80%' }}>
        <TextField
          value={email}
          type={'email'}
          label="Your Email"
          variant="outlined"
          color="info"
          margin="normal"
          {...register('email')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <Autocomplete
          defaultValue={gender}
          options={['Male', 'Female']}
          renderInput={params => (
            <TextField
              {...params}
              value={gender}
              label="Gender"
              variant="outlined"
              color="info"
              margin="normal"
              {...register('gender')}
            />
          )}
        />
      </FormControl>

      <Stack direction="row" alignItems="center" spacing={2} mt={2}>
        <IconButton>
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="User image" />
        </IconButton>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            {...register('photo')}
          />
          <Button variant="outlined" color="info" component="span">
            Upload Your Photo
          </Button>
        </label>
      </Stack>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          value={phone}
          type="text"
          label="Phone"
          variant="outlined"
          color="info"
          margin="normal"
          {...register('phone')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          value={age}
          type="text"
          label="Age"
          variant="outlined"
          color="info"
          margin="normal"
          {...register('age')}
        />
      </FormControl>
      <FormControl sx={{ width: '80%' }}>
        <TextField
          value={password}
          type="password"
          label="Password"
          variant="outlined"
          color="info"
          margin="normal"
          {...register('password')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          value={confirmPassword}
          type="password"
          label="Confirm password"
          variant="outlined"
          color="info"
          margin="normal"
          {...register('confirmPassword')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <Autocomplete
          defaultValue={profileFor}
          options={['Myself', 'Daughter', 'Son', 'Sister', 'Brother', 'Relative', 'Friend']}
          renderInput={params => (
            <TextField
              value={profileFor}
              {...params}
              label="Looking for"
              variant="outlined"
              color="info"
              margin="normal"
              {...register('profileFor')}
            />
          )}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          type="text"
          label="NID"
          variant="outlined"
          color="info"
          margin="normal"
          placeholder="National Id card"
          {...register('NID')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          type="text"
          label="Weight"
          variant="outlined"
          color="info"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          {...register('weight')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          type="text"
          label="Height"
          variant="outlined"
          color="info"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">Ft</InputAdornment>,
          }}
          {...register('height')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextField
          type="text"
          label="Religion"
          variant="outlined"
          color="info"
          margin="normal"
          placeholder="Islam"
          {...register('religion')}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <Autocomplete
          options={['Sunni', 'Shia']}
          renderInput={params => (
            <TextField
              {...params}
              label="Sect"
              variant="outlined"
              color="info"
              margin="normal"
              {...register('sect')}
            />
          )}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <Autocomplete
          options={['Unmarried', 'Divorced', 'Widow', 'Widower', 'Married']}
          renderInput={params => (
            <TextField
              {...params}
              label="Marital status"
              variant="outlined"
              color="info"
              margin="normal"
              {...register('maritalStatus')}
            />
          )}
        />
      </FormControl>

      <FormControl sx={{ width: '80%' }}>
        <TextareaAutosize
          minRows={5}
          maxRows={7}
          placeholder="Tell us something about yourself!"
          style={{
            marginTop: '1.5rem',
            fontSize: '1.1rem',
            backgroundColor: '#eaeff1',
            padding: '1rem 0.5rem',
            outlineColor: '#0288d1',
          }}
          {...register('aboutYourself')}
        />
      </FormControl>

      <div style={{ width: '80%', marginTop: '1rem' }}>
        <Button
          sx={{ display: 'block', marginLeft: 'auto' }}
          type="submit"
          variant="contained"
          color="info"
        >
          Update Profile
        </Button>
      </div>
    </Box>
  );
};

export default Settings;
