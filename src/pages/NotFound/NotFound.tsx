import React from 'react';

import { Typography, Container } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '50px',
          fontWeight: '500',
          lineHeight: '60px',
          color: '#3A415C',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Nothing found :(
      </Typography>
    </Container>
  );
};

export default NotFound;
