import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import UserMenu from "./UserMenu";
import { paymentListItems, serviceListItems } from "./SideNavigation";
import CreditBalance from "./CreditBalance";
import CreditLimit from "./CreditLimit";
import PaymentDetails from "./PaymentDetails";
import "./Overview.css";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function Overview() {
  const [creditcards, setcreditcards] = useState([]);
  const [balance, setBalance] = useState(0);
  const [creditLimit, setCreditLimit] = useState(0);
  const [creditCardId, setCreditCardId] = useState('');
  const customerId = "5eeb358d2f67c7147836cdb9";
  
  useEffect(() => {
    axios.get("http://localhost:9002/creditcards/" + customerId)
    .then(res => {
      setcreditcards(res.data.creditcard);
    })
    .catch(error => console.log(error))
  }, [])

  const handleChangeCC = (e) => {
    setBalance(creditcards[e.target.value].creditcard_balance);
    setCreditLimit(creditcards[e.target.value].creditcard_limit);
    setCreditCardId(creditcards[e.target.value]._id);
  };

  const classes = useStyles();

  return (
    <div className="root">
      {/* <CssBaseline />
      <AppBar position="absolute" className="appBar">
        <Toolbar className="toolbar">
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="SEARCH"
              classes={{
                root: "inputRoot",
                input: "inputInput",
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <UserMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: "drawerPaperx",
        }}
      >
        <Typography component="p" variant="h6" className="digiBankText">
          Optimum DigiBank
        </Typography>
        <List>{paymentListItems}</List>
        <Divider />
        <List>{serviceListItems}</List>
      </Drawer> */}
      <main className="content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className="container">
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
                        key={creditcard._id}
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
            {/* Credit Balance Amount */}
            <Grid item xs={12} md={8} lg={6}>
              <Paper className="fixedHeightPaper" elevation="3">
                <CreditBalance balance={balance} />
              </Paper>
            </Grid>
            {/* Credit Limit */}
            <Grid item xs={12} md={4} lg={6}>
              <Paper className="fixedHeightPaper" elevation="3">
                <CreditLimit limit={creditLimit}/>
              </Paper>
            </Grid>
            {/* Payment Details */}
            <Grid item xs={12}>
              <Paper className="paper" elevation="3">
                <PaymentDetails creditCardId={creditCardId} customerId ={customerId}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
