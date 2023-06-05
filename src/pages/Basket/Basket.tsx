import React from 'react';

import { Typography, Container, Box, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { clearItems } from '../../redux/slices/basket/basketSlice';

import { v4 as uuidv4 } from 'uuid';

import BasketItemComponent from '../../components/Basket/BasketItem/BasketItemComponent';
import BasketEmpty from '../../components/Basket/BasketEmpty';

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.basket);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Empty trash?')) {
      dispatch(clearItems());
    }
  };

  if (!totalCount) {
    return <BasketEmpty />;
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '45px',
        }}
      >
        <Box>
          <ShoppingCartIcon
            color="primary"
            sx={{ fontSize: '25px', marginRight: '10px' }}
          />
          <Typography
            component="span"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '26px',
              fontWeight: '400',
              lineHeight: '30px',
              color: '#3A415C',
            }}
          >
            Basket
          </Typography>
        </Box>
        <Box onClick={onClickClear} sx={{ cursor: 'pointer' }}>
          <DeleteIcon
            color="primary"
            sx={{ fontSize: '25px', marginRight: '10px' }}
          />
          <Typography
            component="span"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '26px',
              fontWeight: '400',
              lineHeight: '30px',
              color: '#3A415C',
            }}
          >
            Delete items
          </Typography>
        </Box>
      </Box>
      {items.map((item: any) => (
        <BasketItemComponent key={uuidv4()} {...item} />
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '35px',
          marginBottom: '20px',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30px',
            color: '#3A415C',
          }}
        >
          All clothes: {totalCount}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30px',
            color: '#3A415C',
          }}
        >
          Order amount: ${totalPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          color="inherit"
          sx={{
            textDecoration: 'none',
            borderRadius: '38px',
            padding: '11px 30px',
            maxWidth: '170px',
            maxHeight: '50px',
            background: '#589195',
            fontFamily: "'Outfit', sans-serif",
            marginBottom: '10px',
          }}
        >
          {'<'} Go back
        </Link>
        <Link
          href="/"
          color="inherit"
          sx={{
            textDecoration: 'none',
            borderRadius: '38px',
            padding: '11px 30px',
            maxWidth: '170px',
            maxHeight: '50px',
            background: '#589195',
            fontFamily: "'Outfit', sans-serif",
            marginBottom: '10px',
          }}
        >
          Pay now {'>'}
        </Link>
      </Box>
    </Container>
  );
};

export default Basket;
