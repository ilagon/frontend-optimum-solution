import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/OneTimeTransfer.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { store } from "../../../index";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BodyContainer() {
  const history = useHistory();
  const state = store.getState();
  console.log(state);
  console.log("cc id:" + state.mobilePayment.creditCard._id);
  const handleSubmit = () => {
    axios
      .post("http://localhost:9002/payment_history/addPayment", {
        payment_type: "Mobile Bill",
        payment_amount: state.mobilePayment.amount,
        transfer_number: 1,
        creditcardId: state.mobilePayment.creditCard._id,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
    <div className="toForm toFormConfirmation">
      <h1>To</h1>
      <p>Reference Number: {state.mobilePayment.phoneNumber}</p>
      <p>Mobile Bill</p>
      <p>$ {state.mobilePayment.amount}</p>
    </div>
  );

  const formFrom = (
    <div className="fromForm fromFormConfirmation">
      <h1>From</h1>
      <p>{state.mobilePayment.creditCard.creditcard_type}</p>
      <div>
        <a href="/" style={{ textDecoration: 'none' }}>
          <Button
            id="submitButton"
            variant="contained"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </a>
      </div>
      <div>
        <Button
          id="cancelButton"
          variant="contained"
          onClick={() => history.push("/")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );

  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
        <Grid item sm={10} className={classes.gridMargin + " billPayment"}>
          <h1>Bill Payment Details</h1>
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
