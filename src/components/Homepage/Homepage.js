import React, { useState } from 'react';
import Box from '@mui/material/Box';
import bannerImg from '../../img/banner.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { FormControlLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Homepage = props => {
  const navigate = useNavigate();
  const [radio, setRadio] = useState('Male');
  props.selectGender(radio);

  // const [btnState, setBtnState] = useState({
  //   btn1: true,
  //   btn2: false,
  // });

  // const handleCheck1 = () => setBtnState({ btn1: true, btn2: false });
  // const handleCheck2 = () => setBtnState({ btn1: false, btn2: true });

  const styles = {
    paperContainer: {
      height: '95vh',
      backgroundImage: `url(${bannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: '0 5%',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: '5%',
      width: '90%',
      height: '95vh',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    typography: {
      position: 'absolute',
      right: 0,
      bottom: '5%',
      width: '85%',
      backgroundColor: '#e6005c',
      color: '#fff',
      padding: '2rem',
    },

    // button1: {
    //   marginRight: '1rem',
    //   padding: '1px 2rem',
    //   fontSize: '1.3rem',
    //   backgroundColor: `${btnState.btn1 ? '#e6005c' : '#fff'}`,
    //   color: `${btnState.btn1 ? '#fff' : '#000'}`,
    //   '&:hover': {
    //     backgroundColor: `${btnState.btn1 ? '#e6005c' : '#fff'}`,
    //     color: `${btnState.btn1 ? '#fff' : '#000'}`,
    //   },
    // },
    // button2: {
    //   padding: '1px 2rem',
    //   fontSize: '1.3rem',
    //   backgroundColor: `${btnState.btn2 ? '#e6005c' : '#fff'}`,
    //   color: `${btnState.btn2 ? '#fff' : '#000'}`,
    //   '&:hover': {
    //     backgroundColor: `${btnState.btn2 ? '#e6005c' : '#fff'}`,
    //     color: `${btnState.btn2 ? '#fff' : '#000'}`,
    //   },
    // },
  };

  return (
    <>
      <Header />
      <Box>
        <div style={styles.paperContainer} />
        <div style={styles.overlay}>
          <Grid container sx={{ placeItems: 'center', paddingTop: '17%', paddingLeft: '9%' }}>
            <Grid item xs={12}>
              <Typography color={'#fefefe'} variant="h4">
                WHAT IS YOUR GENDER?
              </Typography>

              <Box sx={{ marginTop: '1rem' }}>
                {/* <Button sx={styles.button1} onClick={handleBtn1}>
                  Male
                </Button>
                <Button sx={styles.button2} onClick={handleBtn2}>
                  Female
                </Button> */}

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Male"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{ color: '#fff' }}
                    value="Male"
                    control={
                      <Radio onChange={e => setRadio(e.target.value)} sx={{ color: '#e6005c' }} />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    sx={{ color: '#fff' }}
                    value="Female"
                    control={
                      <Radio onChange={e => setRadio(e.target.value)} sx={{ color: '#e6005c' }} />
                    }
                    label="Female"
                  />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div style={styles.typography}>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rem animi blanditiis cupiditate
            eveniet ullam libero, consequatur assumenda quaerat accusantium iusto veritatis aliquam
            eligendi necessitatibus incidunt. Aliquid eius impedit repudiandae fugit error dolorum dolor
            veniam. Doloribus assumenda, libero fugit maxime consequuntur nemo voluptatem nulla corporis
            repellendus asperiores voluptatum obcaecati blanditiis reiciendis tenetur, placeat nobis
            repudiandae deserunt! Numquam.
            <IconButton
              sx={{ display: 'block', fontSize: '1rem', color: '#fff', fontWeight: 'bold' }}
              onClick={() => navigate('/register')}
            >
              <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">CONTINUE</Typography> <ArrowRightAltIcon />
              </span>
            </IconButton>
          </Typography>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
