import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Overview/Overview.css";
import {
  BrowserRouter as Router,
  Link,
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function ApplyCreditcardSubmit() {
  const classes = useStyles();
  const referenceNum = "1234567";
  let {name} = useParams();
  const creditcardName = name;
  const email = "hannah@gmail.com";
  let {cctype} = useParams();
  const creditcardType = cctype;
  const customerId = "5ee86a90e62e0a29d8c0a003";

  const handleChange = () => {
  };

  const applyCC = () => {
    //selected creditcard type is not in DB (Apply new CC)
    axios
      .post("http://localhost:9002/creditcards/creditcardApplication", {
        creditcard_type: creditcardType,
        userId: customerId,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

    return (
      <React.Fragment>
        <main className="content">
          <div className={classes.appBarSpacer} />
          <Container maxWidth="md" className="container">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h2 className="darkRedColor">Credit Card Application</h2>
                <p className="darkBlueColor">Ref No.: {referenceNum}</p>
                <p className="darkBlueColor">{creditcardName}</p>
                <p className="darkBlueColor">{email}</p>
              </Grid>
            </Grid>
            <Link to="/apply-creditcard/creditcard-confirm">
              <Button
                variant="contained"
                id="cardApplyBtn"
                onClick={applyCC}
              >
                Apply
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="contained"
                id="cardCancelBtn"
                onClick={handleChange}
              >
                Cancel
              </Button>
            </Link>
          </Container>
        </main>
      </React.Fragment>
    );
  }
