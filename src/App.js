// Packages
import React from 'react';
import ReactDom from 'react-dom';

// Material Components
import Container from '@mui/material/Container';

// Custom Components
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

// CSS
import './App.css';

function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />

      <Greeting />

      <AboutMe />

      <MyWork />

      <ContactMe />

      <Footer />
    </React.Fragment>
  );
}

export default App;
