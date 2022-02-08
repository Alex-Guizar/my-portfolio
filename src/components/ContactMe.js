// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactMe = () => {
  return (
    <Container maxWidth="lg" id="contact-me-anchor">
      <Box marginTop={8} paddingBottom={8}>
        <Typography
          variant="h3"
          component="h2"
        >Contact Me</Typography>

        <Typography marginTop={4} paragraph>Have a question or want to collaborate on a project? Feel free to email me.</Typography>

        <Typography marginTop={4} paragraph>Email Me: <Link href="mailto:alexguizar90@gmail.com">alexguizar90@gmail.com</Link></Typography>

        <Button variant="contained" href="Guizar-Alex-Resume.pdf" target="_blank">My Resume</Button>

        <Box marginTop={1}>
          <IconButton aria-label="Visit my LinkedIn" href="https://www.linkedin.com/in/alexander-guizar-32649263/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="Visit my GitHub" href="https://github.com/Alex-Guizar" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactMe;