import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar style={{ backgroundColor: 'black' }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/addfeedback">
          Add Feedback
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
