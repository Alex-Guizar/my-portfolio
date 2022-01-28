// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AboutMe = () => {
  return (
    <Container maxWidth="lg" id="about-me-anchor">
      <Box sx={{ marginTop: 8 }}>
        <Typography
          variant="h3"
          component="h2"
        >About Me</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            marginTop: 4
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              paddingRight: { md: 2 },
              minWidth: { md: 350 },
              flexGrow: 1
            }}
          >
            <img
              src="images/AlexCropBW.jpg"
              alt="Image of me in an elevator"
              style={{ 
                width: '100%',
                maxWidth: 350, 
                borderRadius: 50,
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              marginTop: { xs: 2, md: 4 }
            }}
          >
            <Typography paragraph>Hello, my name is Alex Guizar and I am a Full-Stack Developer with a strong background in Front-End Development. My goal is to create clean, snappy web applications with carefully crafted code that give the user an enjoyable experience.</Typography>

            <Typography paragraph>Since entering the web development field in 2013, I have pushed myself to continue learning and expand my toolkit.</Typography>

            <Typography paragraph>When not online, I can be found traveling the world, exploring new culinary adventures both in the kitchen and abroad, snowboarding in the winter, or running raids in Final Fantasy XIV where I handle callouts for my team and help devise new strategies.</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;