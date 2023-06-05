import React from 'react';

import { Container, Box } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import adidasLogo from '../../assets/images/brands/adidas.svg';
import nikeLogo from '../../assets/images/brands/nike.svg';
import pumaLogo from '../../assets/images/brands/puma.svg';
import ogLogo from '../../assets/images/brands/og.svg';

type BrandsItem = {
  img: string;
  alt: string;
};

const brands: BrandsItem[] = [
  { img: `${adidasLogo}`, alt: 'adidas-logo' },
  { img: `${nikeLogo}`, alt: 'nike-logo' },
  { img: `${pumaLogo}`, alt: 'puma-logo' },
  { img: `${adidasLogo}`, alt: 'adidas-logo' },
  { img: `${ogLogo}`, alt: 'og-logo' },
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
            key={uuidv4()}
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
