import React from 'react';
import { Box, Typography, Rating, Button } from '@mui/material';
import { IClothes } from '../models';
import { useAppDispatch, useAppSelector } from '../hook';
import { addItem, BasketItem } from '../redux/slices/basketSlice';

const ClothesItem: React.FC<IClothes> = ({
  id,
  img,
  rating,
  reviews,
  name,
  price,
  discount,
}) => {
  const dispatch = useAppDispatch();
  const countItem = useAppSelector((state) =>
    state.basket.items.find((obj) => obj.id === id)
  );
  const addedCount = countItem ? countItem.count : 0;

  const onClickAdd = () => {
    const item: BasketItem = {
      id,
      img,
      name,
      price,
      count: 0,
      randomId: '0',
    };
    dispatch(addItem(item));
  };
  return (
    <Box
      sx={{
        display: 'inline-block',
        maxWidth: { xs: '100%' },
      }}
    >
      <Box
        sx={{
          height: '330px',
          width: '255px',
          background: '#F7F8FC',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '33px',
          marginTop: '15px',
        }}
      >
        <Box
          component="img"
          src={img}
          alt={name}
          sx={{ maxHeight: '219px', maxWidth: '200px' }}
        />
      </Box>
      <Rating
        name="read-only"
        size="small"
        value={rating}
        readOnly
        sx={{
          marginRight: '10px',
          marginTop: '15px',
        }}
      />
      <Typography
        component="span"
        sx={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '16px',
          fontWeight: '300',
          lineHeight: '25px',
          color: '#7F8698',
        }}
      >
        {reviews} Reviews
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '60px',
          color: '#34394C',
          maxHeight: '45px',
        }}
      >
        {name}
      </Typography>
      <Typography
        component="span"
        variant="h2"
        sx={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '25px',
          fontWeight: '600',
          lineHeight: '60px',
          color: '#297176',
          maxHeight: '45px',
          marginRight: '18px',
        }}
      >
        ${price}
      </Typography>
      {discount && (
        <Typography
          component="span"
          sx={{
            textDecoration: 'line-through',
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '60px',
            color: '#969DAD',
          }}
        >
          {discount}
        </Typography>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={onClickAdd}
          variant="contained"
          sx={{
            borderRadius: '38px',
            padding: '11px 20px',
            maxWidth: '120px',
            maxHeight: '30px',
            background: '#589195',
            fontFamily: "'Outfit', sans-serif",
            '&:hover': {
              background: '#589195',
            },
          }}
        >
          + ADD
        </Button>
        <Box
          component="span"
          sx={{
            background: '#589195',
            fontFamily: "'Outfit', sans-serif",
            color: 'white',
            paddingTop: '7px',
            marginLeft: '8px',
            borderRadius: '20px',
            height: '35px',
            width: '35px',
            textAlign: 'center',
          }}
        >
          {addedCount && addedCount}
        </Box>
      </Box>
    </Box>
  );
};

export default ClothesItem;
