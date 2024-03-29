import React from 'react';

import { Typography, Box, Button } from '@mui/material';

import {
  plusItem,
  minusItem,
  removeItem,
} from '../../../redux/slices/basket/basketSlice';
import { useAppDispatch } from '../../../hooks/hook';
import { BasketItem } from '../../../redux/slices/basket/types';

const BasketItemComponent: React.FC<BasketItem> = ({
  randomId,
  img,
  name,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItem(randomId));
    }
  };

  return (
    <>
      {count > 0 && (
        <Box
          sx={{
            display: 'inline-block',
            maxWidth: { xs: '100%' },
          }}
        >
          <Box
            sx={{
              height: '310px',
              width: '310px',
              background: '#F7F8FC',
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '70px',
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
            ${price * count}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => dispatch(plusItem(randomId))}
              variant="contained"
              sx={{
                borderRadius: '38px',
                maxWidth: '120px',
                maxHeight: '30px',
                background: '#589195',
                fontFamily: "'Outfit', sans-serif",
                '&:hover': {
                  background: '#589195',
                },
              }}
            >
              +
            </Button>
            <Box
              sx={{
                background: '#589195',
                fontFamily: "'Outfit', sans-serif",
                color: 'white',
                paddingTop: '7px',
                margin: '0 15px',
                borderRadius: '20px',
                height: '35px',
                width: '35px',
                textAlign: 'center',
              }}
            >
              {count}
            </Box>
            <Button
              onClick={() => dispatch(minusItem(randomId))}
              variant="contained"
              sx={{
                borderRadius: '38px',
                maxWidth: '120px',
                maxHeight: '30px',
                background: '#589195',
                fontFamily: "'Outfit', sans-serif",
                '&:hover': {
                  background: '#589195',
                },
              }}
            >
              -
            </Button>
          </Box>
          <Button
            onClick={onClickRemove}
            variant="contained"
            sx={{
              marginTop: '10px',
              marginLeft: '55px',
              borderRadius: '38px',
              maxWidth: '120px',
              maxHeight: '30px',
              background: '#589195',
              fontFamily: "'Outfit', sans-serif",
              '&:hover': {
                background: '#589195',
              },
            }}
          >
            Remove
          </Button>
        </Box>
      )}
    </>
  );
};

export default BasketItemComponent;
