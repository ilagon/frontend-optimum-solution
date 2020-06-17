import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/OneTimeTransfer.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { storeInput } from "../../common/redux/actions/mobilePayment_storeInput";
import { store } from "../../../index";
import { useHistory } from "react-router-dom";
import axios from "axios";

var cards = [];

export default function BodyContainer() {
  const dispatch = useDispatch();
  console.log(store.getState());
  const history = useHistory();

  const handleFormInputs = () => {
    dispatch(storeInput(phoneNumber, amount, creditCard));
    history.push("/MobilePayment/ConfirmationPage");
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [creditCard, setCreditCard] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:9002/creditcards/5ee8792db5be6439f4d8474e")
        .then((response) => {
          cards = response.data.creditcard;
          setLoading(true);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  });

  const handleCreditCard = (e) => {
    cards.map((creditcard) => {
      if (creditcard.creditcard_type === e.target.value) {
        setCreditCard(creditcard);
      }
    });
    console.log(creditCard);
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
    <div className="fromForm">
      <h1>From</h1>
      <div>
        <FormControl variant="filled" className={classes.formControl}>
          <Select
            labelId="selectCreditCard"
            id="selectCreditCard"
            onChange={(e) => handleCreditCard(e)}
          >
            {cards.map((obj) => (
              <MenuItem value={obj.creditcard_type}>
                {obj.creditcard_type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p>Current Balance</p>
      <p>${creditCard.creditcard_balance}</p>
      <Button
        id="nextButton"
        variant="contained"
        onClick={() => handleFormInputs()}
      >
        Next
      </Button>
    </div>
  );
  return (
    <div>
      <div>Something</div>
      {isLoading ? (
        <main className="content">
          <div className={classes.appBarSpacer} />
          <Grid container direction="row" justify="space-evenly" wrap="wrap">
            <Grid item sm={6} className="bodyTitle activeTitle">
              <h1>One Time Transfer</h1>
            </Grid>
            <Grid item sm={6} className="bodyTitle nonActiveTitle">
              <a href="/MobilePayment/OtherRecipients" style={{textDecoration: "none"}}>
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
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
