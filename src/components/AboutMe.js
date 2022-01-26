// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutMe = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        container="h2"
      >About Me</Typography>

      <Box>
        {/** My image goes here */}

        <Typography paragraph>lorem</Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;