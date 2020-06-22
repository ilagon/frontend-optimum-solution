import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./css/OneTimeTransfer.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import OneTimeTransferBody from "./OneTimeTransfer/OneTimeTransfer_Body";
import OtherRecipients_FormBody from "./OtherRecipients/OtherRecipients_Body";
import OtherRecipients_PayeeListBody from "./OtherRecipients/OtherRecipients_PayeeList";
import OtherRecipients_AddPayeeBody from "./OtherRecipients/OtherRecipients_AddPayee";
import MobilePaymentConfirmationBody from "./OneTimeTransfer/OneTimeTransferConfirmation_Body";

import { PaymentSuccessfulPage } from "../ResultPage/PaymentSuccessful";
import { PaymentUnSuccessfulPage } from "../ResultPage/PaymentUnsuccessful";

export default function MobilePaymentRoutes() {
  const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  }));

  const classes = useStyles();
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Router>
        <main className="content">
          <div className={classes.appBarSpacer} />
          <Grid container direction="row" justify="space-evenly" wrap="wrap">
            <Grid item sm={6} className="bodyTitle">
              <a
                href="/MobilePayment"
                style={{ textDecoration: "none", color: "#173a77" }}
              >
                <h1>One Time Transfer</h1>
              </a>
            </Grid>
            <Grid item sm={6} className="bodyTitle">
              <a
                href="/MobilePayment/OtherRecipients"
                style={{ textDecoration: "none", color: "#173a77" }}
              >
                <h1>Other Recipients</h1>
              </a>
            </Grid>
          </Grid>
          <Switch>
            <Route
              exact
              path="/MobilePayment"
              component={OneTimeTransferBody}
            />
            <Route
              exact
              path="/MobilePayment/OtherRecipients"
              component={OtherRecipients_PayeeListBody}
            />
            <Route
              path="/MobilePayment/AddPayee"
              component={OtherRecipients_AddPayeeBody}
            />
            <Route
              path="/MobilePayment/OtherRecipients/Form"
              component={OtherRecipients_FormBody}
            />
            <Route
              path="/MobilePayment/ConfirmationPage"
              component={MobilePaymentConfirmationBody}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
