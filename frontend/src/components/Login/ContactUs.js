//AboutUs.js
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#173A77',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: 700,
  },
  subtitle: {
    marginBottom: theme.spacing(15),
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
});

function ContactUs(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
          <Typography variant="h2" marked="center" className={classes.title} component="h2">
            Contact Us
          </Typography>
          <Typography variant="h4" marked="center" className={classes.subtitle} component="h2">
          How may we assist you?
          </Typography>        
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                {/* google map here */}
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="h6" align="left">
                <p>As the leading banking services in South East Asia, we ensure your investments are in responsible hands. Every foresight and insights were made and executed especially for you.</p>
                
                <p>We go further than what is needed, with experiences and specialties in commodities, investments, and services because we value what you truly value.</p>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);