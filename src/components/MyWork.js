// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Custom Components
import ProjectCard from './ProjectCard';

const MyWork = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        container="h2"
      >My Work</Typography>

      <ProjectCard />
    </Box>
  );
}

export default MyWork;