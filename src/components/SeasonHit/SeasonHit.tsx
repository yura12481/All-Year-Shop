import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import tShirt1Img from '../../assets/images/season hit/t-shirt1.png';
import tShirt2Img from '../../assets/images/season hit/t-shirt2.png';
import tShirt3Img from '../../assets/images/season hit/t-shirt3.png';
import tShirt4Img from '../../assets/images/season hit/t-shirt4.png';

import ClothesItem from '../ShopProducts/ShopProductItem/ShopProductItem';

type ShopItem = {
  id: number;
  img: string;
  rating: number;
  name: string;
  price: number;
  discount?: string;
  reviews: number;
};

const shopItems: ShopItem[] = [
  {
    id: 555,
    img: `${tShirt1Img}`,
    rating: 5,
    name: 'Ladies yellow top',
    price: 25,
    reviews: 4,
  },
  {
    id: 556,
    img: `${tShirt2Img}`,
    rating: 3,
    name: 'Ladies Black top',
    price: 35,
    reviews: 3,
  },
  {
    id: 557,
    img: `${tShirt3Img}`,
    rating: 4,
    name: 'Ladies long top',
    price: 40,
    discount: '$45',
    reviews: 2,
  },
  {
    id: 558,
    img: `${tShirt4Img}`,
    rating: 5,
    name: 'Ladies yellow top',
    price: 15,
    reviews: 5,
  },
];

const SeasonHit: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: '86px' }}>
      <Box>
        <Typography
          variant="h2"
          sx={{
            marginBottom: '20px',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '50px',
            fontWeight: '400',
            lineHeight: '40px',
            color: '#34394C',
            maxWidth: '310px',
          }}
        >
          Latest Arrival
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '18px',
            fontWeight: '300',
            lineHeight: '28px',
            color: '#707686',
            maxWidth: '365px',
            marginBottom: '20px',
          }}
        >
          Showing our latest arrival on this summer
        </Typography>
      </Box>
      {shopItems.map((item) => (
        <ClothesItem key={uuidv4()} {...item} />
      ))}
    </Container>
  );
};

export default SeasonHit;
