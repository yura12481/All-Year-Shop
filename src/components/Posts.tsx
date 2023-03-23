import React from 'react';
import {
  Container,
  Typography,
  Box,
  Rating,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from '@mui/material';

type CommentsItem = {
  id: number;
  rating: number;
  text: string;
  name: string;
  specialty: string;
};

const comments: CommentsItem[] = [
  {
    id: 1,
    rating: 5,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    name: 'Md Saimon',
    specialty: 'Journalist',
  },
  {
    id: 2,
    rating: 4,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    name: 'Luziana Farnandes',
    specialty: 'Web Developer',
  },
];

const Posts: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#F6F8FA',
      }}
    >
      <Container maxWidth="lg" sx={{ marginTop: '75px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ marginLeft: '15px' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: '400',
                fontSize: '40px',
                color: '#34394C',
                lineHeight: '50px',
                maxWidth: '311px',
                marginBottom: '15px',
              }}
            >
              What Customers Say About Us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: '300',
                fontSize: '14px',
                color: '#34394C',
                lineHeight: '24px',
                maxWidth: '365px',
              }}
            >
              Bobore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitat ion ullamco laboris
            </Typography>
          </Box>
          {comments.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: '350px',
                height: '396px',
                background: '#ffffff',
                marginRight: '30px',
                marginTop: '129px',
                marginBottom: '141px',
              }}
            >
              <Card sx={{ width: '350px' }}>
                <Rating
                  name="read-only"
                  size="small"
                  value={item.rating}
                  readOnly
                  sx={{
                    marginLeft: '65%',
                    marginTop: '57px',
                    marginBottom: '26px',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontStyle: 'italic',
                      fontWeight: '400',
                      fontSize: '16px',
                      color: '#707686',
                      lineHeight: '26px',
                      maxWidth: '286px',
                      margin: '0 auto',
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
                <CardHeader
                  sx={{ marginLeft: '13px' }}
                  avatar={
                    <Avatar
                      sx={{
                        color: '#ffffff',
                        background: 'red',
                      }}
                      aria-label="recipe"
                    >
                      {item.name[0]}
                    </Avatar>
                  }
                  title={item.name}
                  subheader={item.specialty}
                />
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Posts;
