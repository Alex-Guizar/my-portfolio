// Packages
import React from 'react';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Custom Icons
import HtmlIcon from '../customIcons/HtmlIcon.svg';
import CssIcon from '../customIcons/CssIcon.svg';
import SassIcon from '../customIcons/SassIcon.svg';
import JsIcon from '../customIcons/JsIcon.svg';
import ReactIcon from '../customIcons/ReactIcon.svg';
import AngularIcon from '../customIcons/AngularIcon.svg';
import BootstrapIcon from '../customIcons/BootstrapIcon.svg';
import NodeIcon from '../customIcons/NodeIcon.svg';
import PhpIcon from '../customIcons/PhpIcon.svg';
import MongoDbIcon from '../customIcons/MongoDbIcon.svg';
import FirebaseIcon from '../customIcons/FirebaseIcon.svg';

// Skill Icon List
const mySkills = [
  {
    '_id': 1,
    'type': 'HTML',
    'icon': HtmlIcon,
    'iconWidth': 42
  },
  {
    '_id': 2,
    'type': 'CSS',
    'icon': CssIcon,
    'iconWidth': 30
  },
  {
    '_id': 2,
    'type': 'Sass',
    'icon': SassIcon,
    'iconWidth': 48
  },
  {
    '_id': 3,
    'type': 'JavaScript',
    'icon': JsIcon,
    'iconWidth': 40
  },
  {
    '_id': 4,
    'type': 'React',
    'icon': ReactIcon,
    'iconWidth': 42
  },
  {
    '_id': 5,
    'type': 'React Native',
    'icon': ReactIcon,
    'iconWidth': 42
  },
  {
    '_id': 6,
    'type': 'Angular',
    'icon': AngularIcon,
    'iconWidth': 42
  },
  {
    '_id': 7,
    'type': 'Bootstrap',
    'icon': BootstrapIcon,
    'iconWidth': 46
  },
  {
    '_id': 8,
    'type': 'NodeJS',
    'icon': NodeIcon,
    'iconWidth': 48
  }
  ,
  {
    '_id': 9,
    'type': 'PHP',
    'icon': PhpIcon,
    'iconWidth': 48
  }
  ,
  {
    '_id': 10,
    'type': 'MongoDB',
    'icon': MongoDbIcon,
    'iconWidth': 80
  }
  ,
  {
    '_id': 11,
    'type': 'Google Firebase',
    'icon': FirebaseIcon,
    'iconWidth': 32
  }
];

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
            <Typography paragraph>Hello, my name is Alex Guizar and I am a Full-Stack Developer with a strong background in Front-End Development. My goal is to create clean, snappy web applications with carefully crafted code that provide an enjoyable experience to the user.</Typography>

            <Typography paragraph>Since entering the web development field in 2013, I have pushed myself to continue learning and expand my toolkit.</Typography>

            <Typography paragraph>When not online, I can be found traveling the world, exploring new culinary adventures in the kitchen, snowboarding in the winter, or running raids in Final Fantasy XIV, where I handle callouts for my team and help devise new strategies.</Typography>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(3, 1fr)',
                sm: 'repeat(6, 1fr)',
                lg: 'repeat(12, 1fr)'
              }
            }}>
              {mySkills.map((skill) => (
                <Box key={skill._id} sx={{
                  paddingX: 1,
                  paddingY: 2,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{
                    flex: '0 0 48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}><img src={skill.icon} width={skill.iconWidth} /></Box>

                  <Typography 
                    variant="caption" 
                    display="block" 
                    mt={1}
                    fontSize={10}
                    lineHeight={1.5}
                  >{skill.type}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;