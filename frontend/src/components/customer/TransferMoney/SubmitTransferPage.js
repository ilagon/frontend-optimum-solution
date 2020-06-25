import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from "axios";


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
    width: "260px",
    height: '70px',
    marginRight: '900px',
    color: "white",
    fontWeight: "bold",
    marginTop: '200px',
    backgroundColor: "#e26448",
    "&:hover": {
      backgroundColor: "#e26448",
    },
    fontSize: "1.25em"
  },
  cancel: {
    width: "260px",
    height: '70px',
    marginRight: '900px',
    fontSize: "1.25em",
    color: "white",
    fontWeight: "bold",
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
  var retrievedData = localStorage.getItem("transferDetails");
  var states = JSON.parse(retrievedData);

  const cancelHandle = () => {
    window.location.href ="/TransferMoney";
  }
  const handleSubmit = async () => {
  axios
  .post("http://localhost:9002/payment_history/addPayment", {
    payment_type: "Transfer",
    payment_amount: states.transferAmount,
    transfer_number: 1,
    creditcardId: states.senderCreditCardID,
  })
  .then((response) => {
    console.log(response);
    axios
      .patch("http://localhost:9002/creditcards/updateBalance", {
        creditcard_Id: states.senderCreditCardID,
        creditcard_balance:
        states.senderCreditCardBalance -
          states.transferAmount,
      })
      .then((response2) => {
        console.log(response2);
        window.location.href = "/Payment/Successful";
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/Payment/Unsuccessful";
      });
  })
  .catch((error) => {
    console.log(error);
    window.location.href = "/Payment/Unsuccessful";
  });
};

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
            <h1 style={{ float: "left", marginTop: "50px", fontWeight: "bold", color: "#173a77"}}>To</h1>
          </div>
          <div className={styles.formBody2}>
            <h1 style={{ float: "right", marginRight: "700px", marginTop: "60px", fontWeight: "bold", color: "#173a77"}}>From</h1><br />
          </div>
        </Grid>
      </Grid>
      {/* Receipent Details */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={6}>
        
          <p style={{whiteSpace:"nowrap",marginRight: "400px",color: "#173a77", fontSize: "1.55em"}}>Reference No.: 1234567</p>
  <p style={{color: "#173a77", fontSize: "1.55em"}}>{states.recipientName}</p>
        

         
            <p style={{ whiteSpace:"nowrap",marginRight: "400px",color: "#173a77", fontSize: "1.55em"}}>{states.recipentBank} Savings Account</p>
       
            <p style={{ whiteSpace:"nowrap",marginRight: "570px",color: "#173a77", fontSize: "1.55em"}}>{states.recipentAccNo}</p>
            <p style={{ whiteSpace:"nowrap",marginRight: "630px",color: "#173a77", fontSize: "1.55em"}}>${states.transferAmount}</p>
        </Grid>
        {/* Sender Details */}
        <Grid item xs={12} md={4} lg={5}>
  <p style={{ marginRight: "510px",whiteSpace:"nowrap",color: "#173a77", fontSize: "1.55em"}}>{states.senderCreditCardType}</p>
      
        <Button onClick={handleSubmit} variant="contained" color="secondary" className={classes.margin}>
            Submit
        </Button>
        <br></br>
        <br></br>
        <ColorButton onClick={cancelHandle} variant="contained" color="secondary" className={classes.cancel}>
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