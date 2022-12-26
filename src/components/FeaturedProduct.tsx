import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import featuredProductLogo from '../assets/images/featured product/featured-product.png';
import Clock from './Clock/Clock';

const FeaturedProduct: React.FC = () => {
  return (
    <Box sx={{ background: '#F6F8FA', padding: '86px 0' }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Box
          component="img"
          src={featuredProductLogo}
          alt="featured-product"
          sx={{
            marginRight: '127px',
            maxHeight: { sm: 475, xs: 220 },
            maxWidth: { sm: 475, xs: 220 },
          }}
        />
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '60px',
              color: '#589195',
              marginBottom: '10px',
            }}
          >
            Featured Product
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '50px',
              fontWeight: '400',
              lineHeight: '60px',
              color: '#34394C',
              marginBottom: '15px',
            }}
          >
            Ulina Fashionable Jeans
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '18px',
              fontWeight: '300',
              lineHeight: '28px',
              color: '#707686',
              maxWidth: '519px',
            }}
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequa uis aute irure dolor
          </Typography>
          <Box>
            <Typography
              component="span"
              variant="h2"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '50px',
                fontWeight: '500',
                lineHeight: '60px',
                color: '#589195',
                marginRight: '20px',
              }}
            >
              $199
            </Typography>
            <Typography
              component="span"
              sx={{
                textDecoration: 'line-through',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '60px',
                color: '#5B6075',
                marginRight: '67px',
              }}
            >
              $399
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: '38px',
                padding: '11px 36px',
                maxWidth: '159px',
                maxHeight: '50px',
                background: '#589195',
                fontFamily: "'Outfit', sans-serif",
                marginBottom: '10px',
                '&:hover': {
                  background: '#589195',
                },
              }}
            >
              BUY NOW
            </Button>
          </Box>
          <Clock />
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProduct;
