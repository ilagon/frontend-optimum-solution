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
import Typography from '@material-ui/core/Typography';
import { Link, Router} from 'react-router-dom';
import axios from "axios";

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
    margin: theme.spacing(29),
    width: '100%',
    height: '70px',
    float: 'left',
    marginLeft: '5px'
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

var cards = [];

export default function OneTimeTransferForm() {
  
  const [state, setState] = React.useState({
    recipientName: '',
    recipentBank: '',
    recipentAccNo: '',
    transferAmount: '',
    senderCreditCardType: '',
    senderCreditCardBalance: '',
    senderCreditCardID: ''
  });

  function getCards(){
    axios
      .get("http://localhost:9002/creditcards/5ee8792db5be6439f4d8474e")
      .then((response) => {
        console.log(response.data.creditcard);
        response.data.creditcard.map((obj) => {
          if (obj.creditcard_status==='Approved') {
          cards.push(obj)
          }
});
console.log(cards);
localStorage.setItem("UserCreditCards", JSON.stringify(cards));
      })
.catch((error) => console.log(error));
};

  const getCreditCardBalance = (creditCardType) => {
        var balance = 0.0;
        if (cards.length!=0){
          for (const [index, value] of cards.entries()) {
            if(creditCardType===value.creditcard_type){
            balance=value.creditcard_balance;
            console.log(balance);
          }
          }
        }
        return balance;
  };

  const getCreditCardID = (creditCardType) => {
    var creditCardID = '';
    if (cards.length!=0){
      for (const [index, value] of cards.entries()) {
        if(creditCardType===value.creditcard_type){
       creditCardID=value._id;
        console.log(creditCardID);
      }
      }
    }
    return creditCardID;
  };
  

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    console.log(event.target.value);
    
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const CreditCardChange = (event) => {
    const name = event.target.name;
    console.log(name);
    console.log(event.target.value);
  
      setState({
        ...state, 
        senderCreditCardBalance: getCreditCardBalance(event.target.value),
        senderCreditCardID: getCreditCardID(event.target.value),
        [name]: event.target.value,
      });
      console.log(state.senderCreditCardBalance);
  };

  const classes = useStyles();

  const handleRoute= () => {
    window.location.href ="/SubmitTransfer";
    localStorage.setItem("transferDetails", JSON.stringify(state));
  }

  return (
    <div>
      {cards.length===0 ? getCards() : ''}
      <CssBaseline />
      {/* Title */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={styles.formBody}>
            <p style={{ float: "left", marginTop: "50px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em" }}>To</p>
          </div>
          <div>
            <p style={{ float: "right", marginRight: "740px", marginTop: "60px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em" }}>From</p><br />
          </div>
        </Grid>
      </Grid>
      {/* Receipent Details */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <form className={classes.root} noValidate autoComplete="on">
            <TextField
              required
              id="name"
              label="Name"
              placeholder="Name"
              multiline
              onChange={handleChange}
              inputProps={{name: 'recipientName'}}
            />
          </form>

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="bankSelect">Select Bank</InputLabel>
            <Select
              required
              className={styles.selectColor}
              native
              value={state.recipentBank}
              onChange={handleChange}
              inputProps={{
                name: 'recipentBank'
              }}
            >
              <option aria-label="None" value="" />
              <option value='Optimum Digibank'>Optimum Digibank</option>
              <option value='Optimum Digibank'>whatever fuck bank you can think of</option>
            </Select>
          </FormControl>

          <form className={classes.root} noValidate autoComplete="on">
            <TextField
              required
              id="accNum"
              label="Account No."
              placeholder="Account No."
              multiline
              onChange={handleChange}
              inputProps={{name: 'recipentAccNo'}}
            />
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
             ${state.senderCreditCardBalance}
  </Typography>
  <Typography component="h2" variant="h5" color="secondary">
    <br></br>
    {state.senderCreditCardBalance<state.transferAmount ? 'Please type in an amount less than the balance amount' : ''}
  </Typography>
          </div>
          <ColorButton variant="contained" color="secondary" className={classes.margin} onClick={handleRoute}>
            Next
</ColorButton>
        </Grid>
      </Grid>
    </div>
 
  );
} 