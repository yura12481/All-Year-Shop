import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Link } from '@mui/material';
import facebookLogo from '../assets/images/footer/facebook.svg';
import instagramLogo from '../assets/images/footer/instagram.svg';
import twitterLogo from '../assets/images/footer/twitter.svg';

type SocialNetworkItem = {
  id: number;
  img: string;
  alt: string;
};
type InformationItem = {
  id: number;
  subtitle: string;
};

const socialNetworks: SocialNetworkItem[] = [
  { id: 1, img: `${facebookLogo}`, alt: 'facebook-logo' },
  { id: 2, img: `${instagramLogo}`, alt: 'instagram-logo' },
  { id: 3, img: `${twitterLogo}`, alt: 'twitter-logo' },
];

const address: InformationItem[] = [
  { id: 1, subtitle: '20, Awesome Road,' },
  { id: 2, subtitle: 'New York, Usa 4D BS3' },
  { id: 3, subtitle: '+123 456 7890' },
  { id: 4, subtitle: 'hello@ulina.com' },
];

const usfulLinks: InformationItem[] = [
  { id: 1, subtitle: 'Shop Cupon' },
  { id: 2, subtitle: 'About Us' },
  { id: 3, subtitle: 'Carrer' },
  { id: 4, subtitle: 'Supports' },
];

const categories1: InformationItem[] = [
  { id: 1, subtitle: 'Men' },
  { id: 2, subtitle: 'Kids' },
  { id: 3, subtitle: 'Bags' },
  { id: 4, subtitle: 'Cloths' },
];

const categories2: InformationItem[] = [
  { id: 1, subtitle: 'women' },
  { id: 2, subtitle: 'Accessories' },
  { id: 3, subtitle: 'Jewellary' },
  { id: 4, subtitle: 'Beauty Item' },
];

const services: InformationItem[] = [
  { id: 1, subtitle: 'Privacy policy' },
  { id: 2, subtitle: 'Cookies' },
  { id: 3, subtitle: 'Terms of service' },
];

const Footer: React.FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <Box
      sx={{
        background: '#F6F8FA',
        paddingTop: '112px',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Cormorant', serif",
                fontWeight: '700',
                fontSize: '30px',
                color: '#1B2858',
                lineHeight: '36px',
                marginBottom: '11px',
              }}
            >
              All Year Shop
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '350px',
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: '300',
                fontSize: '18px',
                color: '#707686',
                lineHeight: '28px',
                marginBottom: '24px',
              }}
            >
              Quis nostrud exercitatin ullamc boris nisi ut aliquip ex ea
              commodo conse.
            </Typography>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label="Your email here"
              variant="outlined"
              fullWidth
              type="email"
              sx={{ marginBottom: '25px' }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '150px',
              }}
            >
              {socialNetworks.map((item) => (
                <Link href="#" key={item.id}>
                  <Box
                    key={item.id}
                    component="img"
                    src={item.img}
                    alt={item.alt}
                    sx={{ height: '30px', width: '30px', cursor: 'pointer' }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
          <Box sx={{ marginBottom: '15px' }}>
            <Typography
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: '500',
                fontSize: '18px',
                color: '#34394C',
                lineHeight: '28px',
                marginBottom: '17px',
              }}
            >
              Address
            </Typography>
            {address.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: '300',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#6E7489',
                  marginRight: '8px',
                }}
              >
                <Link href="#" underline="none" color="inherit">
                  {item.subtitle}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box sx={{ marginBottom: '15px' }}>
            <Typography
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: '500',
                fontSize: '18px',
                color: '#34394C',
                lineHeight: '28px',
                marginBottom: '17px',
              }}
            >
              Usful Links
            </Typography>
            {usfulLinks.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: '300',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#6E7489',
                  marginRight: '8px',
                }}
              >
                <Link href="#" underline="none" color="inherit">
                  {item.subtitle}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: '500',
                fontSize: '18px',
                color: '#34394C',
                lineHeight: '28px',
                marginBottom: '17px',
              }}
            >
              Categories
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
              }}
            >
              <Box sx={{ marginRight: '76px' }}>
                {categories1.map((item) => (
                  <Typography
                    key={item.id}
                    sx={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: '300',
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#6E7489',
                      marginRight: '8px',
                    }}
                  >
                    <Link href="#" underline="none" color="inherit">
                      {item.subtitle}
                    </Link>
                  </Typography>
                ))}
              </Box>
              <Box>
                {categories2.map((item) => (
                  <Typography
                    key={item.id}
                    sx={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: '300',
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#6E7489',
                      marginRight: '8px',
                    }}
                  >
                    <Link href="#" underline="none" color="inherit">
                      {item.subtitle}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(204, 210, 222, 0.81)',
            paddingTop: '11px',
            paddingBottom: '15px',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: '500',
                fontSize: '18px',
                color: '#707686',
                lineHeight: '26px',
                marginRight: '10px',
              }}
            >
              <Link href="#" underline="none" color="inherit">
                ©All Year Shop 2023
              </Link>
            </Typography>
          </Box>
          <Box>
            {services.map((item) => (
              <Typography
                key={item.id}
                component="span"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#707686',
                  lineHeight: '24px',
                  marginRight: '10px',
                }}
              >
                <Link href="#" underline="none" color="inherit">
                  {item.subtitle}
                </Link>
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
