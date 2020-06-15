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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
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
    }
}));

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const getUsers = () => {
        axios.get("http://localhost:7001/users/",
            email,
            password
        )
            .then(res => console.log(res))
            .catch(err => { console.log(err) })
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div id="container">
            <img src="https://source.unsplash.com/ULwzqOnPem0" id="loginpic" />
            <Container id="login" component="main" maxWidth="xs">
                <CssBaseline />
                <Grid id="Container" item xs={false} sm={4} md={7} className={classes.image} />

                <div>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>
                    <Typography component="h1" variant="h5">
                        <a href="/SignUp">REGISTER</a>
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleEmail}
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
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick={getUsers}
                        >
                            Login
                        </Button>

                        <Typography>
                            <a href="/ForgetPass">
                                Forget Password?
                            </a>
                        </Typography>
                    </form>
                </div>

            </Container>


        </div>
    )
};

export default Login;