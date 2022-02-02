// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      </CardContent>

      <CardActions disableSpacing>
        {project.website !== ''
          ? <IconButton aria-label="Visit project Website" href={project.website} target="_blank" rel="noreferrer">
              <WebIcon />
            </IconButton>
          : ''
        }
 
        {project.github !== ''
          ? <IconButton aria-label="Visit project GitHub" href={project.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </IconButton>
          : ''
        }

        {project.skills.length
          ? <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show Skills"
          >
            <CodeIcon />
          </ExpandMore>
          : ''
        }
      </CardActions>

      {project.skills.length
        ? <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Skills Used:</Typography>

            <Typography paragraph>{project.skills.map((skill, i) => skill + (i + 1 !== project.skills.length ? ', ': ' '))}</Typography>
          </CardContent>
        </Collapse>
        : ''
      }
    </Card>
  );
}

export default ProjectCard;