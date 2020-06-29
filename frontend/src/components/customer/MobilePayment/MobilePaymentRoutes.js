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
            <Grid item sm={6} className="bodyTitle" style={{opacity: (window.location.pathname === "/MobilePayment") ? "1" : "0.5"}}>
              <a
                href="/Customer/MobilePayment"
                style={{textDecoration: "none", color: "#173a77"}}
              >
                <h1>One Time Transfer</h1>
              </a>
            </Grid>
            <Grid item sm={6} className="bodyTitle" style={{opacity: (window.location.pathname === "/MobilePayment") ? "0.5" : "1"}}>
              <a
                href="/Customer/MobilePayment/OtherRecipients"
                style={{ textDecoration: "none", color: "#173a77" }}
              >
                <h1>Other Recipients</h1>
              </a>
            </Grid>
          </Grid>
          <Switch>
            <Route
              exact
              path="/Customer/MobilePayment"
              component={OneTimeTransferBody}
            />
            <Route
              exact
              path="/Customer/MobilePayment/OtherRecipients"
              component={OtherRecipients_PayeeListBody}
            />
            <Route
              path="/Customer/MobilePayment/AddPayee"
              component={OtherRecipients_AddPayeeBody}
            />
            <Route
              path="/Customer/MobilePayment/OtherRecipients/Form"
              component={OtherRecipients_FormBody}
            />
            <Route
              path="/Customer/MobilePayment/ConfirmationPage"
              component={MobilePaymentConfirmationBody}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
