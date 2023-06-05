import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Box, Typography } from '@mui/material';

import Login from '../../components/Auth/Login';

const LoginPage: React.FC = () => {
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
            Login
          </Typography>
          <Login />
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
            or{' '}
            <Link
              to="/register"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '18px',
                fontWeight: '300',
                lineHeight: '28px',
                color: '#34394C',
              }}
            >
              register
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
