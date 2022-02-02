// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ContactMe = () => {
  return (
    <Container maxWidth="lg" id="contact-me-anchor">
      <Box marginTop={8}>
        <Typography
          variant="h3"
          component="h2"
        >Contact Me</Typography>

        <Typography marginTop={4} paragraph>Have a question or want to collaborate on a project? Feel free to email me.</Typography>

        <Button variant="contained" href="mailto:alexguizar90@gmail.com">Contact Me</Button>

        <Button sx={{marginLeft: 2}} variant="contained" href="Guizar-Alex-Resume.pdf" target="_blank">My Resume</Button>
      </Box>
    </Container>
  );
}

export default ContactMe;