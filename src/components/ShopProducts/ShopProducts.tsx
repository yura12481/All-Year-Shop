import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { IClothes } from '../../models';
import ClothesItem from '../ClothesItem';
import Skeleton from './Skeleton';

const ShopProducts: React.FC = () => {
  const [data, setData] = useState<IClothes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch('https://63a41f0f821953d4f2aa043e.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <Container maxWidth="lg">
      {isLoading
        ? [...new Array(8)].map(() => <Skeleton key={uuidv4()} />)
        : data.map((item) => <ClothesItem key={uuidv4()} {...item} />)}
    </Container>
  );
};

export default ShopProducts;
