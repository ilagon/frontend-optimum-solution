//AboutUs.js
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


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
  }
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
        
                <Map google={props.google} zoom={18}
                    style={{width: '500px', height: '300px'}}
                    initialCenter={{
                    lat: 1.33690,
                    lng: 103.965962
                  }}
                  >
                  <Marker onClick={props.onMarkerClick}
                    name={'Current location'} />
                </Map>
         
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="h6" align="left">
                  <div>
                  We are located at:
                  1 Changi Business Park Crescent,
                  Plaza8 @ CBP, #03-09 to #03-12,
                  Podium B, 486025
                  <br/>
                  Contact No: +65 6236 0070
                  <br/>
                  Fax No: +65 65351334
                  <br/>
                  Email: info@optimumdigibank.com
                  </div>
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


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCs8xtYZXXFLe131vR7RYeNF9nsyDN92v8')
})(withStyles(styles)(ContactUs))