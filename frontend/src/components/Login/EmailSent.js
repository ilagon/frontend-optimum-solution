import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  paper: {
    marginTop: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#173A77',
    fontFamily: [
      'Avenir Heavy',
      'sans serif',
    ],
  },
  bodytxt: {
    color: '#173A77',
    fontFamily: [
      'Avenir Medium',
      'sans serif',
    ],
  },
  bodytxt2: {
    color: '#AA3A21',
    fontFamily: [
      'Avenir Medium',
      'sans serif',
    ],
  },
}));

export default function EmailSent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container id="logout" component="main" maxWidth="sm">

        <div className={classes.paper}>
          <MailOutlineIcon style={{ color: 'AA3A21', fontSize: 120 }} />
          <Typography component="h1" variant="h2" className={classes.title}>
            Email Sent!
          </Typography>
          <Typography component="h2" variant="h6" className={classes.bodytxt}>
            We've sent you an email with a link to reset your password
          </Typography>
          <Typography component="h2" variant="h6" className={classes.bodytxt}>
            Didn't get the email or not your email address?
            {' '}
            <Link href="/ForgetPass" className={classes.bodytxt2}>Try again.</Link>

          </Typography>
          <Typography component="h2" variant="h6" className={classes.bodytxt}>
            Click here to return to the
            {' '}
            <Link href="/Login" className={classes.bodytxt2}> Login Page </Link>

          </Typography>

        </div>
      </Container>

    </div>
  );
}
