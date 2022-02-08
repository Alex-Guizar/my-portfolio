// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const GreetingBlock = () => {
  return (
    <Box sx={{
      background: 'url(images/greeting-banner-4k.jpg) no-repeat center',
      backgroundSize: 'cover',
      height: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 69px)' }
    }}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{
          maxWidth: 400,
          position: 'relative',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 2,
          top: '50%',
          transform: 'translateY(-60%)',
          borderRadius: 4
        }}>
          <Typography paragraph>
            Hi, my name is
          </Typography>
          <Typography 
            variant="h3"
            component="h1"
            marginBottom={2}
          >
            Alex Guizar
          </Typography>
          <Typography paragraph>
            And I am a Full-Stack Developer who loves to create user interactivity. I currently work out of San Luis Obispo, California.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default GreetingBlock;