import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        marginTop: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        color: '#AA3A21',
        fontFamily: [
            'Avenir Heavy Oblique',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ]
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#AA3A21',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#AA3A21'
          },
    },
    'a': {
        color: '#173A77'
    },
}));


export default function SignUp() {
    const classes = useStyles();

    const [password, setPassword] = useState('')
    const [cnfmPassword, setCnfmPassword] = useState('')

    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }
    const handleCfmPassword = e => {
        setCnfmPassword(e.target.value);
        console.log(e.target.value)
    }

    const checkPass = () => {
        //confirm the password matches before registering
        if (cnfmPassword === password) {
            //check pw not old pw

            axios.post("http://localhost:7001/users/register", {
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
        <Container id="login" component="main" maxWidth="xs">
            <CssBaseline />
            <Grid id="Container" item xs={false} sm={4} md={7} className={classes.image} />

                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" className={classes.logo}>
                        Optimum DigiBank
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handlePassword}
                                    InputLabelProps={{
                                        style: {
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          width: '100%',
                                          color: '#173A77'
                                    } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPass"
                                    label="Retype Password"
                                    type="password"
                                    id="password"
                                    onChange={handleCfmPassword}
                                    InputLabelProps={{
                                        style: {
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          width: '100%',
                                          color: '#173A77'
                                    } }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick={checkPass} >
                            Submit
                        </Button>

                    </form>
                </div>
            </Container>
        </div>
    );
}