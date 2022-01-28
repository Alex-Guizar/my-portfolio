// Packages
import React from 'react';

// Material Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { block: 'About', targetId: '#about-me-anchor' },
  { block: 'Work', targetId: '#my-work-anchor' },
  { block: 'Contact', targetId: '#contact-me-anchor' }
];

const handleScroll = (targetId) => {
  const anchor = document.querySelector(targetId);
  if (anchor) {
    const yOffset = anchor.offsetTop;
    const stickyOffset = 100;

    window.scrollTo({
      top: yOffset - stickyOffset,
      behavior: 'smooth'
    })
  }

  // if (anchor) {
  //   anchor.scrollTo({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // }
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <Toolbar id="back-to-top-anchor" />
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              ALEX
            </Typography>

            <Box sx={{display: { xs: 'flex', sm: 'none' }, ml: 'auto'}}>
              <IconButton
                size="large"
                aria-label="page navigation"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' }
                }}
              >
                {sections.map((section) => (
                  <MenuItem key={section.block} onClick={() => {
                    handleCloseNavMenu();
                    handleScroll(section.targetId);
                  }}>
                    <Typography textAlign="center">{section.block}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{display: { xs: 'none', sm: 'flex'}, ml: 'auto'}}>
            {sections.map((section) => (
                <Button
                  key={section.block}
                  sx={{ my: 2, color: 'white', display: 'block'}}
                  onClick={() => handleScroll(section.targetId)}
                >{section.block}</Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

export default ResponsiveAppBar;