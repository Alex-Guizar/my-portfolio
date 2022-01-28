// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box marginTop={8} paddingBottom={8} textAlign="center">
        <Typography paragraph>Email: <Link href="mailto:alexguizar90@gmail.com">alexguizar90@gmail.com</Link></Typography>

        <Box>
          <IconButton aria-label="Visit my LinkedIn" href="https://www.linkedin.com/in/alexander-guizar-32649263/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="Visit my GitHub" href="https://github.com/Alex-Guizar" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="Visit my Twitter" href="https://twitter.com/alexguizar90" target="_blank" rel="noreferrer">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;