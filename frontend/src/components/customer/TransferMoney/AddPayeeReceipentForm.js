import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  formControl: {
    minWidth: 560,
    float: 'left',
    marginLeft: '50px'
  },
  formControl2: {
    margin: theme.spacing(3),
    minWidth: 650,
    float: 'left',
    marginLeft: '5px'
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
    marginLeft: '250px',
    margin: theme.spacing(2),
    marginTop: '200px'
  },
  cancel: {
    width: '80%',
    height: '70px',
    marginLeft: '250px',
  },
  frontKeepLeft: {
    float: 'left',
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

var cards = JSON.parse(localStorage.getItem("UserCreditCards"));

export default function AddPayeeReceipentForm() {
  const [state, setState] = React.useState({
    recipientName: '',
    recipentBank: '',
    recipentAccNo: '',
    transferAmount: '',
    senderCreditCardType: '',
    senderCreditCardBalance: '',
    senderCreditCardID: ''
  });

  var retrievedData = localStorage.getItem("transferDetails");
  var states = JSON.parse(retrievedData);
setState({
  ...state,
  recipientName:states.receipientName,
  recipentBank:states.recipentBank,
  recipentAccNo:states.recipentAccNo
});

//function getCards(){
 // axios
 //   .get("http://localhost:9002/creditcards/5ee8792db5be6439f4d8474e")
 //   .then((response) => {
 //     console.log(response.data.creditcard);
 //     response.data.creditcard.map((obj) => {
  //      if (obj.creditcard_status==='Approved') {
  //      cards.push(obj)
  //      }
//});
 //   })
//.catch((error) => console.log(error));
//};

const getCreditCardBalance = (creditCardType) => {
      var balance = 0.0;
      if (cards!==[]){
        for (const [index, value] of cards.entries()) {
          if(creditCardType===value.creditcard_type){
          balance=value.creditcard_balance;
          console.log(balance);
          setState({
            ...state, 
            senderCreditCardID: value._id
          });
          console.log(state.senderCreditCardID);
        }
        }
      }
      return balance;
};

  const handleChange = (event) => {
    const name = event.target.name;
    
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const CreditCardChange = (event) => {
    const name = event.target.name;
    
      setState({
        ...state, 
        senderCreditCardBalance: getCreditCardBalance(event.target.value),
        [name]: event.target.value,
      });
  };

  const nextHandler = (event) => {
    localStorage.setItem("transferDetails", JSON.stringify(state));
    window.location.href ="/SubmitTransfer";
   };

   const cancelHandler = (event) => {
    window.location.href ="/TransferMoney/payee";
   };

  const classes = useStyles();

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
              <p className={styles.FormTitle}>Transfer Money</p>
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
            <p style={{marginRight: "630px",color: "#173a77", fontSize: "1.55em"}}>{state.recipientName}</p>
          </div>

         
            <p style={{ whiteSpace:"nowrap",marginRight: "480px",color: "#173a77", fontSize: "1.55em"}}>{state.recipentBank} Savings Account</p>
       

          <form className={classes.root} noValidate autoComplete="on">
          <p style={{ whiteSpace:"nowrap",marginRight: "560px",color: "#173a77", fontSize: "1.55em"}}>{states.recipentAccNo}</p>
             <br></br>
            <TextField
              required
              id="transferAmt"
              label="Transfer Amount"
              placeholder="Transfer Amount"
              multiline
              onChange={handleChange}
              inputProps={{name: 'transferAmount'}}
            />
          </form>
        </Grid>
        {/* Sender Details */}
        <Grid item xs={12} md={4} lg={5}>
        <FormControl variant="filled" className={classes.formControl2}>
            <InputLabel htmlFor="creditCardSelect">Select CreditCard</InputLabel>
            <Select
              required
              className={styles.selectColor}
              native
              value={state.senderCreditCard}
              onChange={CreditCardChange}
              inputProps={{
                name: 'senderCreditCardType'
              }}
            >
              <option aria-label="None" value="" />
              {cards.map((obj) => (
              <option value={obj.creditcard_type}>
                {obj.creditcard_type}
              </option>
            ))}
            </Select>
          </FormControl>
          <div className={classes.frontKeepLeft}>
            <Typography component="h2" variant="h4" color="primary" gutterBottom>
              Current Balance
    </Typography>
            <Typography component="p" variant="h4" color="primary">
            {state.senderCreditCardBalance}
  </Typography>
  <Typography component="h2" variant="h5" color="secondary">
    <br></br>
    {state.senderCreditCardBalance<state.transferAmount ? 'Please type in an amount less than the balance amount' : ''}
  </Typography>
          </div>
        <Button onClick={nextHandler} variant="contained" color="secondary" className={classes.margin}>
            Next
        </Button>
        <ColorButton onClick={cancelHandler} variant="contained" color="secondary" className={classes.cancel}>
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