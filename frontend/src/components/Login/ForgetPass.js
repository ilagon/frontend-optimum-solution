import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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
}));

const ForgetPass = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [error,setError] = useState(false)
    const getPass = (e) => {
        e.preventDefault();

        axios.post('http://localhost:7001/users/forget_password', {
            email: email
          })
          .then(function (res) {
            if(res.data.message == "Email has been sent"){
                console.log("directing to email sent")
                window.location.href = "/EmailSent"
            }
          })
          .catch(function (error) {
            setError(true)
            console.log(error)
          });
    }

    return (
        <div id="container">
            <img src="https://source.unsplash.com/ULwzqOnPem0" id="loginpic" />
            <Container id="login" component="main" maxWidth="xs">
                <CssBaseline />
                <Grid id="Container" item xs={false} sm={4} md={7} className={classes.image} />

                <div>
                    <Typography component="h1" variant="h5" className={classes.logo}>
                        Optimum DigiBank
                    </Typography>
                    <form className={classes.form} onSubmit={getPass}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="email"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setError(false)
                                
                                }}
                                    InputLabelProps={{
                                        style: {
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          width: '100%',
                                          color: '#173A77'
                                    }}}
                                    error={error ? true : false}
                                     helperText={error ?  "Email does not exist": ''}
                                />
                            </Grid>
                            
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            type="submit"
                        >
                            Submit
                        </Button>

                    </form>
                </div>

            </Container>


        </div>
    )
};

export default ForgetPass;