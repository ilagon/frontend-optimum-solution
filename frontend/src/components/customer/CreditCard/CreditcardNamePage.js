import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Overview/Overview.css";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import CreditcardSubmission from './CreditcardSubmissionPage';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function ApplyCC() {
  const classes = useStyles();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <main className="content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className="container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 className="darkRedColor">Credit Card Application</h2>
              <TextField
                id="cardName"
                label="Name to appear on card"
                size="small"
                className="cardNameInput"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {/* <Link to="/apply-creditcard/creditcard-submit"> */}
          <Link to = {`/apply-creditcard/creditcard-submit/${name}`}>
            <Button variant="contained" id="cardNameBtn">
              Next
            </Button>
          </Link>
        </Container>
      </main>
    </React.Fragment>
  );
}
