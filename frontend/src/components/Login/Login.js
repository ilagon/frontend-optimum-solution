import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/ULwzqOnPem0)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'absolute',
    },
    links: {
      textDecoration: 'none',
      fontFamily: ['Avenir Heavy', 'Arial', 'sans serif'],
      color: '#173A77',
      fontWeight: '700',
      fontSize: '1.5rem'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontFamily: ['Avenir Heavy', 'Arial', 'sans serif'],
      color: '#AA3A21',
      fontSize: '2.5rem',
      fontWeight: '700',
      fontStyle: 'italic'
    },
    form: {
      width: '25rem', // Fix IE 11 issue.
      position: 'relative',
      marginTop: theme.spacing(1),
      color: 'black'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#AA3A21',
      fontFamily: ['Avenir Heavy', 'Arial', 'sans serif'],
      color: '#fff',
      width: '25rem',
      height: '3rem',
      '&:hover': {
        backgroundColor: '#AA3A21'
      },
    },
    forgetButton: {
      color: '#173A77',
      fontStyle: 'bold'
    }
  }));
  
  export default function SignInSide() {
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState(false);
    const [result,setResult] = useState('')


    const submit = (e) =>{
      e.preventDefault();
      //for testing only
      if(email == "apzhawk@gmail.com" && pass == "123"){
        setError(false)
      }
      else{
        setError(true)
      }
    }


    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper} >
          <h1 className={classes.title}>Optimum DigiBank</h1> 
          <Box display="flex" p={1} bgcolor="background.paper">
            <Box p={5}>
              <a href="/Login" className={classes.links}>LOGIN</a>
            </Box>
            <Box p={5}>
              <a href="/SignUp" className={classes.links}>REGISTER</a>
            </Box>
          </Box>
            <form className={classes.form} onSubmit={submit}>
              <TextField
                margin="normal"
                type="email"
                required
                fullWidth
                id="Email"
                label="Email"
                name="Email"
                autoFocus
                value ={email}
                InputLabelProps={{
                  style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                    color: '#173A77'
              } }}
                onChange ={(e) => {setEmail(e.target.value)
                setError(false)
                }}
                error={error ? true : false}
                helperText={error ?  "Incorrect Username or password": ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value ={pass}
                InputLabelProps={{
                  style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                    color: '#173A77'
              } }}
                onChange ={(e) => {setPass(e.target.value)
                  setError(false)
                }}
                error={error ? true : false}
              />
              <div align="center">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
              </Button></div>
              <Grid container align="center">
                <Grid item xs>
                  <Link href="/ForgetPass" variant="body2" className={classes.forgetButton}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }