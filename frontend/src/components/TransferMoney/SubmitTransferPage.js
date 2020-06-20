import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  formControl2: {
    margin: theme.spacing(6),
    minWidth: 650,
    marginRight: '5px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '70ch',
      color: '#173A77',
      marginRight: '160px'
    },
  },
  margin: {
    width: '80%',
    height: '70px',
    marginRight: '900px',

    marginTop: '200px'
  },
  cancel: {
    width: '80%',
    height: '70px',
    marginRight: '900px',
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

export default function SubmitTransferPage() {

  const classes = useStyles();

  const handleSubmit = () => {
    window.location.href = "/Payment/Successful";
  }

  return (
    <div className={styles.root}>
      <CssBaseline />
      <main className={styles.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="100%" className={styles.container} >
                  {/* Title */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <div id={styles.TitleContainer}>
              <p className={styles.FormTitle}>Transfer Money Details</p>
              </div>
        </Grid>
      </Grid>
      <div>
           {/* Title */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={styles.formBody}>
            <p style={{ float: "left", marginTop: "50px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em" }}>To</p>
          </div>
          <div className={styles.formFromBody}>
            <p style={{ marginLeft: "180px", marginTop: "60px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em" }}>From</p><br />
          </div>
        </Grid>
      </Grid>
      {/* Receipent Details */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <div className={styles.fromBody}>
          <p style={{whiteSpace:"nowrap",marginRight: "460px",color: "#173a77", fontSize: "1.55em"}}>Reference No.: 1234567</p>
            <p style={{marginRight: "630px",color: "#173a77", fontSize: "1.55em"}}>Adrian</p>
          </div>

         
            <p style={{ whiteSpace:"nowrap",marginRight: "480px",color: "#173a77", fontSize: "1.55em"}}>DBS Savings Account</p>
       
            <p style={{ whiteSpace:"nowrap",marginRight: "570px",color: "#173a77", fontSize: "1.55em"}}>123 4 567890</p>
            <p style={{ whiteSpace:"nowrap",marginRight: "630px",color: "#173a77", fontSize: "1.55em"}}>$20.00</p>
        </Grid>
        {/* Sender Details */}
        <Grid item xs={12} md={4} lg={5}>
        <p style={{ marginRight: "510px",whiteSpace:"nowrap",color: "#173a77", fontSize: "1.55em"}}>Platimum Card</p>
      
        <Button variant="contained" color="secondary" className={classes.margin} onClick={handleSubmit}>
            Submit
        </Button>
        <br></br>
        <br></br>
        <ColorButton variant="contained" color="secondary" className={classes.cancel}>
            Cancel
        </ColorButton>
        </Grid>
      </Grid>
      </div>
      </Container>
          </main>
    </div>
  );
} 