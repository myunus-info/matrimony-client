import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';

const Settings = () => {
  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Box component="form">
      <Typography mb={1} variant="h5">
        YOUR ACCOUNT SETTINGS
      </Typography>

      <FormControl sx={{ width: '80%' }}>
        <TextField type={'text'} label="Your Name" variant="outlined" color="info" margin="normal" />
      </FormControl>
      <FormControl sx={{ width: '80%' }}>
        <TextField type={'email'} label="Your Email" variant="outlined" color="info" margin="normal" />
      </FormControl>

      <Stack direction="row" alignItems="center" spacing={2} mt={2}>
        <IconButton>
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="User image" />
        </IconButton>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="outlined" color="info" component="span">
            Upload Your Photo
          </Button>
        </label>
      </Stack>

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
          }}
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
