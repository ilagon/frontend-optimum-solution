import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/OneTimeTransfer.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default function BodyContainer() {
  const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,

    gridMargin: {
      marginTop: theme.spacing(1),
    },

    textBoxMargin: {
      marginTop: theme.spacing(5),
    },

    formControl: {
      marginTop: theme.spacing(1),
      minWidth: 240,
    },
  }));

  const classes = useStyles();

  const formTo = (
    <div className="toForm">
      <h1>To</h1>
      <div>
        <p style={{border: "2px solid red"}}>insert the payee value</p>
      </div>
      <div>
        <TextField
          required
          className={classes.textBoxMargin}
          id="amountInput"
          label="Amount"
        />
      </div>
    </div>
  );

  const formFrom = (
    <div className="fromForm">
      <h1>From</h1>
      <div>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="creditCardSelect">Select CreditCard</InputLabel>
          <Select labelId="selectCreditCard" id="selectCreditCard">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <p>Current Balance</p>
      <p>Balance amount here</p>
      <Button id="nextButton" variant="contained">
        Next
      </Button>
    </div>
  );

  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
        <Grid item sm={6} className="bodyTitle activeTitle">
          <h1>Other Recipients</h1>
        </Grid>
        <Grid item sm={6} className="bodyTitle nonActiveTitle">
        <a href="/Customer/TaxPayment/OtherRecipients" style={{textDecoration: "none"}}>
                <h1>One Time Transfereee</h1>
              </a>
        </Grid>
        <Grid item sm={10} className={classes.gridMargin + " billPayment"}>
          <h1>Tax Payment</h1>
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
