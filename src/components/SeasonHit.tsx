import React from 'react';
import { Box, Container, Typography, Rating } from '@mui/material';
import tShirt1 from '../img/season hit/t-shirt1.png';
import tShirt2 from '../img/season hit/t-shirt2.png';
import tShirt3 from '../img/season hit/t-shirt3.png';
import tShirt4 from '../img/season hit/t-shirt4.png';

const shopItems = [
  {
    img: `${tShirt1}`,
    rating: 5,
    description: 'Ladies yellow top',
    price: '$25',
    reviews: 4,
  },
  {
    img: `${tShirt2}`,
    rating: 3,
    description: 'Ladies Black top',
    price: '$35',
    reviews: 3,
  },
  {
    img: `${tShirt3}`,
    rating: 4,
    description: 'Ladies long top',
    price: '$40',
    discount: '$45',
    reviews: 2,
  },
  {
    img: `${tShirt4}`,
    rating: 5,
    description: 'Ladies yellow top',
    price: '$15',
    reviews: 5,
    size: '',
  },
];

const SeasonHit: React.FC = () => {
  return (
    <Container maxWidth="lg">
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
        <Box
          key={item.reviews}
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
            <Box component="img" src={item.img} alt={item.description} />
          </Box>
          <Rating
            name="read-only"
            size="small"
            value={item.rating}
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
            {item.reviews} Reviews
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
            {item.description}
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
    </Container>
  );
};

export default SeasonHit;
