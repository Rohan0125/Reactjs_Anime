import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';

export default function Header() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <CircleIcon />
          </IconButton>
          <Typography className='header_name' variant="h6" color="inherit" component="div">
            AnimeList
          </Typography>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
