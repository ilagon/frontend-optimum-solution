import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
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
        <div id="container">
            <img src="https://source.unsplash.com/ULwzqOnPem0" id="loginpic" />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>
                    <Typography component="h1" variant="h5">
                        <a href="/SignUp">REGISTER</a>
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="fullname"
                                    name="FullName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="FullName"
                                    label="Full Name"
                                    autoFocus
                                    onChange={handleName}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handlePassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confrimPass"
                                    label="confrim Password"
                                    type="password"
                                    id="password"
                                    onChange={handlePassword1}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Change this to the error message"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={registerUser} >
                            Sign Up
                        </Button>
                        
                    </form>
                </div>
            </Container>
        </div>
    );
}