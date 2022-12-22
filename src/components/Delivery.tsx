import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import logo1 from '../img/delivery/logo-1.svg';
import logo2 from '../img/delivery/logo-2.svg';
import logo3 from '../img/delivery/logo-3.svg';
import logo4 from '../img/delivery/logo-4.svg';

const deliveryItems = [
  {
    img: `${logo1}`,
    title: 'Free Shipping',
    subtitle: 'Ut enim ad minim veniam liquip ami tomader',
  },
  {
    img: `${logo2}`,
    title: 'Secure Payments',
    subtitle: 'Eonim ad minim veniam liquip tomader',
  },
  {
    img: `${logo3}`,
    title: 'Easy Returns',
    subtitle: 'Be enim ad minim veniam liquipa ami tomader',
  },
  {
    img: `${logo4}`,
    title: '24/7 Support',
    subtitle: 'Ut enim ad minim veniam liquip ami tomader',
  },
];

const Delivery: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '72px', marginBottom: '61px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {deliveryItems.map((item) => (
          <Box key={uuidv4()}>
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                maxWidth: '54px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '30px',
                color: '#34394C',
                maxWidth: '155px',
                marginBottom: '10px',
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '16px',
                fontWeight: '300',
                lineHeight: '25px',
                color: '#7F8698',
                maxWidth: '204px',
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Delivery;
