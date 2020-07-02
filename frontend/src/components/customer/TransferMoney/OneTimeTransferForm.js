import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 240,
   marginRight: '439px',
   float: 'right'
  },
  formControl2: {
    margin: theme.spacing(6),
    minWidth: 240,
    float: 'left',
    marginLeft: '5px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(7),
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

  nextButton: {
    marginTop: "100px",
    width: "260px",
    backgroundColor: "#e26448",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e26448",
    },
    fontSize: "1.25em"
  },
 
}));

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
  const [cards, setCards] = useState([]);
  let id = sessionStorage.getItem('_id');

  
  useEffect(() => {
    axios
      .post("http://localhost:9000/creditcard/cust/searchActive", {
        userId: id
      })
      .then((response) => {
        setCards(response.data.creditcard);
      })
      .catch(err => console.log(err))
    })

  const getCreditCardBalance = (creditCardType) => {
        var balance = 0.0;
        if (cards.length!==0){
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
    if (cards.length!==0){
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
    window.location.href ="/Customer/SubmitTransfer";
    localStorage.setItem("transferDetails", JSON.stringify(state));
  }

  return (
    <div>
      <CssBaseline />
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
        <Grid item xs={12} lg={6}>
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
              native
              value={state.recipentBank}
              onChange={handleChange}
              inputProps={{
                name: 'recipentBank'
              }}
            >
              <option aria-label="None" value="" />
              <option value='Optimum Digibank'>Optimum Digibank</option>
            </Select>
          </FormControl>

          <form className={classes.root} noValidate autoComplete="on">
          <div>
            <TextField
              required
              id="accNum"
              label="Account No."
              placeholder="Account No."
              multiline
              onChange={handleChange}
              inputProps={{name: 'recipentAccNo'}}
            />
            </div>
            <div>
            <TextField
              required
              id="transferAmt"
              label="Transfer Amount"
              placeholder="Transfer Amount"
              multiline
              onChange={handleChange}
              inputProps={{name: 'transferAmount'}}
            />
            </div>
          </form>
        </Grid>
        {/* Sender Details */}
        <Grid item xs={12} md={4} lg={5}>

          <FormControl variant="filled" className={classes.formControl2}>
            <InputLabel htmlFor="creditCardSelect">Select CreditCard</InputLabel>
            <Select
              required
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
          <div className={styles.frontKeepLeft}>
            <p>Current Balance</p>
            <p>{state.senderCreditCardBalance==='' ? '' : '$' + state.senderCreditCardBalance}</p>
  <p className={styles.errorMessage}><br></br>{state.senderCreditCardBalance<state.transferAmount ? 'Please type in an amount less than the balance amount' : ''}</p>
          </div>
          <Button variant="contained" className={classes.nextButton} onClick={handleRoute}>
            Next
</Button>
        </Grid>
      </Grid>
    </div>
 
  );
} 