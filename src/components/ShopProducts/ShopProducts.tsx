import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { IClothes } from '../../models';
import ClothesItem from '../ClothesItem';
import Skeleton from './Skeleton';

const clothesFor = ['All clothes', 'Men', 'Women', 'Kids'];

const ShopProducts: React.FC = () => {
  const [data, setData] = useState<IClothes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect((): void => {
    setIsLoading(true);
    fetch(
      `https://63a41f0f821953d4f2aa043e.mockapi.io/items?${
        activeIndex > 0 ? `category=${activeIndex}` : 'page=1&limit=8'
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [activeIndex]);
  return (
    <Container maxWidth="lg" sx={{ marginTop: '126px' }}>
      <Typography
        sx={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '50px',
          fontWeight: '400',
          lineHeight: '60px',
          color: '#34394C',
          marginBottom: '13px',
        }}
      >
        Featured Product
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '18px',
            fontWeight: '300',
            lineHeight: '28px',
            color: '#707686',
            maxWidth: '365px',
            marginBottom: '25px',
          }}
        >
          Showing our latest arrival on this summer
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {clothesFor.map((item, indx) =>
            activeIndex === indx ? (
              <Typography
                key={uuidv4()}
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '26px',
                  fontWeight: '400',
                  lineHeight: '60px',
                  color: '#34394C',
                  marginBottom: '13px',
                  marginRight: '60px',
                }}
              >
                {item}
              </Typography>
            ) : (
              <Typography
                key={uuidv4()}
                onClick={() => setActiveIndex(indx)}
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '26px',
                  fontWeight: '400',
                  lineHeight: '60px',
                  color: '#AFB4C4',
                  marginBottom: '13px',
                  marginRight: '60px',
                  cursor: 'pointer',
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
      </Box>
      {isLoading
        ? [...new Array(8)].map(() => <Skeleton key={uuidv4()} />)
        : data.map((item) => <ClothesItem key={uuidv4()} {...item} />)}
    </Container>
  );
};

export default ShopProducts;
