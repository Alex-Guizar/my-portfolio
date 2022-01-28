// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Material Components
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Custom Components
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

// CSS
import './App.css';

function ScrollTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (e) => {
    const anchor = (e.target.ownerDocuement || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >{children}</Box>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired
}

function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />

      <Greeting />

      <AboutMe />

      <MyWork />

      <ContactMe />

      <Footer />

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="Scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
