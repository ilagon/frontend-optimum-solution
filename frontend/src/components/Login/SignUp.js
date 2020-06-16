import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

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
        fontFamily: 'Helvetica Neue',
        color: 'black',
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
        fontFamily: 'Arial',
        color: '#ab3a22',
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
        backgroundColor: '#ab3a22',
        width: '25rem',
        height: '3rem'
      },
      forgetButton: {
        color: 'black',
        fontStyle: 'bold'
      }
    }));


export default function SignUp() {
    const classes = useStyles();


    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfmPassword, setCnfmPassword] = useState('')

    const handleName = e => {
        setName(e.target.value);
        console.log(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }
    const handlePassword1 = e => {
        setCnfmPassword(e.target.value);
        console.log(e.target.value)
    }

    const registerUser = () => {
        //confrim the password matches before registering
        if (cnfmPassword === password) {
            //also need to confirm the same email doesn't already
            //exist in DB

            axios.post("http://localhost:7001/users/register", {
                name: name,
                email: email,
                password: password
            })
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })
        }
        else {
            //render error msg
            console.log("Passwords do not match!")
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
              <form className={classes.form} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  floatingLabel={true}
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  autoComplete="email"
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
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="retype"
                  label="Retype Password"
                  type="retype"
                  id="retype"
                  autoComplete="current-password"
                />
                <div align="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button></div>
              </form>
            </div>
          </Grid>
        </Grid>
      );
    }