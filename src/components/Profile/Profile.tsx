import React from 'react';

import { Container, Typography, Box, Button } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../../hooks/use-auth';

interface ProfileProps {
  onSignOut: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onSignOut }) => {
  const { email } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ marginTop: '126px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <PersonIcon color="primary" sx={{ fontSize: '150px' }} />
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '30px',
              fontWeight: '400',
              lineHeight: '60px',
              color: '#34394C',
              marginBottom: '15px',
            }}
          >
            Welcome {email}, do you want to log out of your account?
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => onSignOut()}
            variant="contained"
            sx={{
              borderRadius: '38px',
              padding: '11px 36px',
              width: '320px',
              maxHeight: '50px',
              background: '#589195',
              fontFamily: "'Outfit', sans-serif",
              marginBottom: '10px',
              '&:hover': {
                background: '#589195',
              },
            }}
          >
            Log Out
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
