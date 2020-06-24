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
  
    const [custEmail, setCustEmail] = useState([]);
    const customerId = "5ef3155ba7ea2e3db870382f";
    
    useEffect(() => {
      axios.get("http://localhost:9002/users/" + customerId)
      .then(function (response, data) {
        setCustEmail(response.data.user.email);
      })
      .catch(error => console.log(error))
    }, [])
  


  const classes = useStyles();
  const referenceNum = "1234567";
  let {name} = useParams();
  const creditcardName = name;
  // const email = "hannah@gmail.com";

  const handleChange = (e) => {
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
                <p className="darkBlueColor">{custEmail}</p>
              </Grid>
            </Grid>
            <Link to="/apply-creditcard/creditcard-confirm">
              <Button
                variant="contained"
                id="cardApplyBtn"
                onClick={handleChange}
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
