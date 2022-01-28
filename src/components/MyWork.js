// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Custom Components
import ProjectCard from './ProjectCard';

// Project Data
import Data from '../data/MyWork.json';

const projects = Data.projects;

const MyWork = () => {
  return (
    <Container maxWidth="lg">
      <Box marginTop={8}>
        <Typography
          variant="h3"
          component="h2"
        >My Work</Typography>

        <Grid container spacing={2} marginTop={4}>
          {projects.map((project) => (
            <Grid key={project._id} item xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default MyWork;