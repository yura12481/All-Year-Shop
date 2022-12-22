import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { v4 as uuidv4 } from 'uuid';

const pages = [
  'Home',
  'Profile',
  'Basket',
  'About',
  'Shop',
  'Page',
  'Block',
  'Contact',
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
        <List sx={{ width: '250px' }}>
          {pages.map((page) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={uuidv4()}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
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
