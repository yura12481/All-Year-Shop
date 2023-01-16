import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import tShirt1 from '../assets/images/season hit/t-shirt1.png';
import tShirt2 from '../assets/images/season hit/t-shirt2.png';
import tShirt3 from '../assets/images/season hit/t-shirt3.png';
import tShirt4 from '../assets/images/season hit/t-shirt4.png';
const shopItems = [
  {
    img: `${tShirt1}`,
    rating: 5,
    name: 'Ladies yellow top',
    price: '$25',
    reviews: 4,
  },
  {
    img: `${tShirt2}`,
    rating: 3,
    name: 'Ladies Black top',
    price: '$35',
    reviews: 3,
  },
  {
    img: `${tShirt3}`,
    rating: 4,
    name: 'Ladies long top',
    price: '$40',
    discount: '$45',
    reviews: 2,
  },
  {
    img: `${tShirt4}`,
    rating: 5,
    name: 'Ladies yellow top',
    price: '$15',
    reviews: 5,
  },
];

const Cart: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '45px',
        }}
      >
        <ShoppingCartIcon
          color="primary"
          sx={{ fontSize: '40px', marginRight: '10px' }}
        />
        <Typography
          component="span"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '60px',
            color: '#3A415C',
          }}
        >
          Basket
        </Typography>
      </Box>
      {shopItems.map((item) => (
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
              src={item.img}
              alt={item.name}
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
            {item.name}
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
            {item.price}
          </Typography>
          {item.discount && (
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
              {item.discount}
            </Typography>
          )}
        </Box>
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
            fontSize: '25px',
            color: '#000000',
          }}
        >
          All clothes: 4
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '25px',
            color: '#000000',
          }}
        >
          Order amount: 115$
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

export default Cart;
