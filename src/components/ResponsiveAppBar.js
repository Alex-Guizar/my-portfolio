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
// import MenuIcon from '@mui/icons-material/Menu';

const sections = ['About', 'Work', 'Contact'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
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
              MENU
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
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{display: { xs: 'none', sm: 'flex'}, ml: 'auto'}}>
           {sections.map((section) => (
              <Button
                key={section}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >{section}</Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;