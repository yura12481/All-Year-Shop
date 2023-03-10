import React, { useState } from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DrawerFC from './Drawer/DrawerFC';
import { useAppSelector } from '../hook';

const pages: string[] = ['Home', 'About', 'Shop', 'Page', 'Block', 'Contact'];

const Header: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down('lg'));

  const items = useAppSelector((state) => state.basket.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <AppBar
      position="static"
      sx={{
        background: '#DEECEC',
        height: '100px',
        borderBottom: '2px solid #84BABE',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            margin: '15px 0 15px 0',
            '&.MuiToolbar-root': { padding: '0' },
          }}
        >
          {media ? (
            <>
              <IconButton size="large" color="primary">
                <Link to="/">
                  <StoreIcon color="primary" />
                </Link>
              </IconButton>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Cormorant', serif",
                  fontWeight: 700,
                  fontSize: '30px',
                  lineHeight: '36px',
                  color: '#589195',
                }}
              >
                All Year Shop
              </Typography>

              <DrawerFC />
            </>
          ) : (
            <>
              <IconButton size="large">
                <Link to="/">
                  <StoreIcon color="primary" />
                </Link>
              </IconButton>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Cormorant', serif",
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '36px',
                    color: '#589195',
                  }}
                >
                  All Year Shop
                </Typography>
              </Link>
              <Tabs
                onChange={(e, value) => setValue(value)}
                value={value}
                textColor="inherit"
                sx={{
                  maxWidth: '607px',
                  marginLeft: 'auto',
                }}
              >
                {pages.map((page) => (
                  <Tab
                    key={uuidv4()}
                    label={page}
                    sx={{
                      color: '#6A7087',
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '21.1px',
                    }}
                  />
                ))}
              </Tabs>
              <IconButton size="large" sx={{ marginLeft: 'auto' }}>
                <Link to="/user">
                  <PersonIcon color="primary" />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="/basket">
                  <Badge badgeContent={totalCount} color="error">
                    <ShoppingCartIcon color="primary" />
                  </Badge>
                </Link>
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
