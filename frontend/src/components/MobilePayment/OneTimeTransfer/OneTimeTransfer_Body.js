import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/OneTimeTransfer.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import OneTimeTransferConfirmationPage from "../OneTimeTransfer/OneTimeTransferConfirmation_Body";

export default function BodyContainer() {
  const creditCardObject = [
    {
      name: "CreditCard1",
      balance: 100,
    },
    {
      name: "CreditCard2",
      balance: 200,
    },
    {
      name: "CreditCard3",
      balance: 300,
    },
  ];

  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [creditCard, setCreditCard] = useState({ name: "", balance: "" });

  const handleCreditCard = (e) => {
    creditCardObject.map((creditcard) => {
      if (creditcard.name === e.target.value) {
        setCreditCard({ name: e.target.value, balance: creditcard.balance });
      }
    });
  };

  const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,

    gridMargin: {
      marginTop: theme.spacing(1),
    },

    textBoxMargin: {
      marginTop: theme.spacing(5),
    },

    formControl: {
      marginTop: theme.spacing(8),
      minWidth: 240,
    },
  }));

  const classes = useStyles();

  const formTo = (
    <div className="toForm">
      <h1>To</h1>
      <div>
        <TextField
          required
          className={classes.textBoxMargin}
          id="phoneNumberInput"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          className={classes.textBoxMargin}
          id="amountInput"
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </div>
  );

  const formFrom = (
    <Router>
      <Switch>
        <div className="fromForm">
          <h1>From</h1>
          <div>
            <FormControl variant="filled" className={classes.formControl}>
              <Select
                labelId="selectCreditCard"
                id="selectCreditCard"
                onChange={(e) => handleCreditCard(e)}
              >
                {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
                {creditCardObject.map((option) => (
                  <MenuItem value={option.name}>{option.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <p>Current Balance</p>
          <p>${creditCard.balance}</p>
          <a href="/a">
            <Button id="nextButton" variant="contained">
              Next
            </Button>
          </a>
          <Route
            path="/"
            render={() => (
              <OneTimeTransferConfirmationPage
                phoneNumber={phoneNumber}
                amount={amount}
                creditCard={creditCard}
              />
            )}
          />
        </div>
      </Switch>
    </Router>
  );

  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
        <Grid item sm={6} className="bodyTitle activeTitle">
          <h1>One Time Transfer</h1>
        </Grid>
        <Grid item sm={6} className="bodyTitle nonActiveTitle">
          <a href="/MobilePayment/OtherRecipients">
            <h1>Other Recipients</h1>
          </a>
        </Grid>
        <Grid item sm={10} className={classes.gridMargin + " billPayment"}>
          <h1>Bill Payment</h1>
        </Grid>
        <Grid
          item
          sm={6}
          direction="row"
          className={classes.gridMargin + " border"}
        >
          {formTo}
        </Grid>
        <Grid item sm={6} className={classes.gridMargin + " border"}>
          {formFrom}
        </Grid>
      </Grid>
    </main>
  );
}
