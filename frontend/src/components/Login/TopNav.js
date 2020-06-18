import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: ['Avenir Heavy Oblique', 'Arial', 'sans serif'],
  },
  subtitle: {
    flexGrow: 1,
    fontFamily: ['Avenir Medium', 'Arial', 'sans serif'],
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#AA3A21',
    fontFamily: ['Avenir Heavy', 'Arial', 'sans serif'],
    color: '#fff',
    width: '10rem',
    height: '2.5rem',
    '&:hover': {
      backgroundColor: '#AA3A21'
    },
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Optimum DigiBank
          </Typography>
          
          <Typography className={classes.subtitle}>
            About Us
          </Typography>
          <Typography className={classes.subtitle}>
            Personal Banking
          </Typography>
          <Typography className={classes.subtitle}>
            FAQ
          </Typography>
          <Typography className={classes.subtitle}>
            Contact
          </Typography>
          
          <Button className={classes.submit} href="/Login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}