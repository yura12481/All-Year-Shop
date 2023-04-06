import React, { useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShopIcon from '@mui/icons-material/Shop';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

type PageItem = {
  title: string;
  icon: JSX.Element;
};

const pages: PageItem[] = [
  { title: 'Home', icon: <HomeIcon /> },
  { title: 'About', icon: <InfoIcon /> },
  { title: 'Shop', icon: <ShopIcon /> },
  { title: 'Discounts', icon: <LocalOfferIcon /> },
  { title: 'Reviews', icon: <CommentIcon /> },
  { title: 'Basket', icon: <ShoppingCartIcon /> },
];

const DrawerFC: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List sx={{ width: '320px' }}>
          {pages.map((page) => (
            <Box key={uuidv4()}>
              <Link
                to={`/${page.title}`.toLowerCase()}
                onClick={() => setOpenDrawer(false)}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemButton>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText>{page.title}</ListItemText>
                </ListItemButton>
              </Link>
            </Box>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto' }}
        size="large"
        color="primary"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerFC;
