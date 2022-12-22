import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import manTitle from '../img/title/man-title.png';

const TitlePage: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#DEECEC',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          paddingTop: '45px',
          paddingBottom: '117px',
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '60px',
              color: '#589195',
              marginBottom: '13px',
            }}
          >
            SUMMER SALE IS ON
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '50px',
              fontWeight: '500',
              lineHeight: '60px',
              color: '#3A415C',
              maxWidth: '430px',
              marginBottom: '13px',
            }}
          >
            Make Your Fashion More Perfect
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '18px',
              fontWeight: '300',
              lineHeight: '28px',
              color: '#707686',
              maxWidth: '593px',
              marginBottom: '25px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: '38px',
              padding: '11px 30px',
              maxWidth: '170px',
              maxHeight: '50px',
              background: '#589195',
              fontFamily: "'Outfit', sans-serif",
              marginBottom: '10px',
              '&:hover': {
                background: '#589195',
              },
            }}
          >
            Explore More
          </Button>
        </Box>
        <Box
          component="img"
          src={manTitle}
          alt="man-title"
          sx={{
            maxHeight: { sm: 562, xs: 250 },
            maxWidth: { sm: 478, xs: 220 },
          }}
        />
      </Container>
    </Box>
  );
};

export default TitlePage;
