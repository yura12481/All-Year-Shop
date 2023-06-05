import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Box, Typography } from '@mui/material';

import SignUp from '../../components/Auth/SignUp';

const RegisterPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#DEECEC', height: '100vh' }}>
      <Container maxWidth="lg" sx={{ paddingTop: '100px' }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '50px',
              fontWeight: '400',
              lineHeight: '60px',
              color: '#34394C',
              textAlign: 'center',
            }}
          >
            Register
          </Typography>
          <SignUp />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '18px',
              fontWeight: '300',
              lineHeight: '28px',
              color: '#34394C',
              textAlign: 'center',
            }}
          >
            Alredy have an account?{' '}
            <Link
              to="/login"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '18px',
                fontWeight: '300',
                lineHeight: '28px',
                color: '#34394C',
              }}
            >
              Sign-in
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterPage;
