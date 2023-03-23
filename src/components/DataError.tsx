import React from 'react';
import { Typography, Box } from '@mui/material';
const DataError: React.FC = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '50px',
            fontWeight: '400',
            lineHeight: '60px',
            color: '#34394C',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          An error has occurred =(
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '18px',
            fontWeight: '300',
            lineHeight: '28px',
            color: '#707686',
            maxWidth: '519px',
            margin: '25px auto',
          }}
        >
          Unfortunately, it was not possible to get clothes. Please try again
          later.
        </Typography>
      </Box>
    </>
  );
};

export default DataError;
