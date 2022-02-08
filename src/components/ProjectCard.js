// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 420, margin: 'auto' }}>
      <Box
        sx={project.name === 'Chit Chat' ? { maxWidth: 420, paddingLeft: '35.95238%', paddingRight: '35.95238%' }: {}}
      >
        <CardMedia
          component="img"
          image={project.image}
          srcSet={`${project.image2x} 2x`}
          alt=""
        />
      </Box>

      <CardContent>
        <Typography variant="h5" component="div">
          {project.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={1}>
          <strong>Skills Used:</strong><br />{project.skills.join(', ')}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Grid container spacing={1}>
          {project.links.map((link) => (
            <Grid item key={link._id} xs={6}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  fontSize: 11,
                  width: '100%'
                }}
              >{link.name}</Button>
            </Grid>
          ))}
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;