import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import "../Overview/Overview.css";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  }));

export default function CreditCardStatus() {
    const classes = useStyles();
    const [creditcards, setcreditcards] = useState([]);
    const [creditCardNum, setCreditCardNum] = useState('Null');
    const [creditCardStatus, setCreditCardStatus] = useState('');
    const customerId = "5eeb358d2f67c7147836cdb9";
    
    useEffect(() => {
      axios.get("http://localhost:9002/creditcards/" + customerId)
      .then(res => {
        setcreditcards(res.data.creditcard);
      })
      .catch(error => console.log(error))
    }, [])
  
    const handleChangeCC = (e) => {
      setCreditCardNum(creditcards[e.target.value].creditcard_num);
      setCreditCardStatus(creditcards[e.target.value].creditcard_status);
    };
  
    return (
          <main className="content">
            <div className={classes.appBarSpacer} />
            <Container maxWidth="md" className="container">
              <Grid container spacing={3}>
                {/* Select CreditCard Dropdown */}
                <Grid item xs={6}>
                  <Paper className="selectCreditCardPaper" elevation="3">
                    <FormControl variant="filled" className="formControl">
                      <InputLabel htmlFor="creditCardSelect">
                        Select CreditCard
                      </InputLabel>
                      <Select
                        className="creditCardDd"
                        native
                        onChange={handleChangeCC}
                      >
                          <option value="0"></option>
                        {
                        creditcards.map((creditcard, index) => (
                          <option
                            value={index}
                            key={creditcard.creditcard_num}
                          >
                            {creditcard.creditcard_type} {creditcard.creditcard_num}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                <h2 className="darkBlueColor">Credit Card Status</h2>
                <p className="darkBlueColor">Ref No.: {creditCardNum}</p>
                <p className="darkBlueColor">
                {creditCardNum === 'Null' ? "Please select a credit card." : ""} 
                {creditCardStatus === 'Approved' ? "Your credit card has been approved. Thank you." : ""} 
                {creditCardStatus === 'Rejected' ? "Your credit card application has been declined. Thank you." : ""} 
                {creditCardStatus === 'Pending' ? "Your credit card is pending for approval. Thank you." : ""} 
                </p>
                </Grid>
              </Grid>
            </Container>
          </main>
      );
}