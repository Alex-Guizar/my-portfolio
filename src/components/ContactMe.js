// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ContactMe = () => {
  return (
    <Box marginTop={8}>
      <Typography
        variant="h2"
        container="h2"
      >Contact Me</Typography>

      <Typography marginTop={4} paragraph>Have a question or want to collaborate on a project? Feel free to email me.</Typography>

      <Button variant="contained" href="mailto:alexguizar90@gmail.com">Contact Me</Button>
    </Box>
  );
}

export default ContactMe;