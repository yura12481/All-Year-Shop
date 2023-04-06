import React from 'react';
import { Container, Box } from '@mui/material';
import adidasLogo from '../assets/images/brands/adidas.svg';
import nikeLogo from '../assets/images/brands/nike.svg';
import pumaLogo from '../assets/images/brands/puma.svg';
import ogLogo from '../assets/images/brands/og.svg';

type BrandsItem = {
  id: number;
  img: string;
  alt: string;
};

const brands: BrandsItem[] = [
  { id: 1, img: `${adidasLogo}`, alt: 'adidas-logo' },
  { id: 2, img: `${nikeLogo}`, alt: 'nike-logo' },
  { id: 3, img: `${pumaLogo}`, alt: 'puma-logo' },
  { id: 4, img: `${adidasLogo}`, alt: 'adidas-logo' },
  { id: 5, img: `${ogLogo}`, alt: 'og-logo' },
];

const Brands: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '150px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '55px',
        }}
      >
        {brands.map((item) => (
          <Box
            key={item.id}
            component="img"
            src={item.img}
            alt={item.alt}
            sx={{
              maxHeight: { sm: 475, xs: 100 },
              maxWidth: { sm: 475, xs: 60 },
              marginTop: '15px',
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Brands;
