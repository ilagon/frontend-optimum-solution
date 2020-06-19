import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 560,
    float: 'left',
    marginLeft: '50px'
  },
  formControl2: {
    margin: theme.spacing(6),
    minWidth: 650,
    float: 'left',
    marginLeft: '5px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(7),
      width: '70ch',
      color: '#173A77',
      float: 'left'
    },
  },
  margin: {
    margin: theme.spacing(2),
    width: '35%',
    height: '70px',
    float: 'right',
    marginRight: '3px',
    marginTop: '200px',
    marginBottom: '80px',
  },
  frontKeepLeft: {
    float: 'left',
    margin: theme.spacing(2),
    marginLeft: '5px'
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#AA3A21'),
    backgroundColor: '#AA3A21',
    '&:hover': {
      backgroundColor: '#AA3A21',
    },
  },
}))(Button);

export default function OtherReceipentsTransferForm() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      {/* Payee 1 */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={styles.paper}>
        <div className={styles.textLeft}> 
        <Typography Typography component="h2" variant="h4" color="primary" gutterBottom>
         Ain<br></br><br></br>UOB Savings Account 1235 6 78902
         <InfoRoundedIcon fontSize="inherit" className={styles.infoIcon}></InfoRoundedIcon>
        </Typography>
        </div>
              </Paper>
        </Grid>
      </Grid>
      {/* Payee 2 */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={styles.paper}>
        <div className={styles.textLeft}> 
        <Typography Typography component="h2" variant="h4" color="primary" gutterBottom>
         Adrian<br></br><br></br>DBS Savings Account 1234 5 67890
         <InfoRoundedIcon fontSize="inherit" className={styles.infoIcon}></InfoRoundedIcon>
        </Typography>
        </div>
        </Paper>
                {/* Payee Button */}
                <ColorButton variant="contained" color="secondary" className={classes.margin}>
            Add Payee
        </ColorButton>
        </Grid>
        </Grid>

    </div>
  );
} 