import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/OtherRecipients.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InfoIcon from "@material-ui/icons/Info";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import axios from "axios";
import react, { useState, useEffect,setLoading,cards } from 'react';

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
      marginTop: theme.spacing(8),
      minWidth: 240,
    },
  }));
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:9002/payee/tax/5ee9d8eea80b44418c8d8b6c")
        .then((response) => {
          cards = response.data.creditcard;
          setLoading(true);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  });

  const classes = useStyles();
  
  const handleOnClick = (event) => {
    payeeList.map((obj) => {
      if (obj._id === event.target.id) {
        dispatch(storePayee(obj));
      }
    });
    history.push("/MobilePayment/OtherRecipients/Form");
  };
  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
        <Grid item sm={6} className="bodyTitle nonActiveTitle">
        <a href="/" style={{textDecoration: "none"}}>
                <h1>One Time Transfer</h1>
              </a>
        </Grid>
        <Grid item sm={6} className="bodyTitle activeTitle">
          <h1>Other Recipients</h1>
        </Grid>
        <Grid item sm={10} className={classes.gridMargin + " taxPayment"}>
          <h1>Tax Payment</h1>
        </Grid>
        <Grid item sm={12}>
          <Paper elevation={3} className="paperHeight">
           <p style={{color: "#173a77"}}>MAS</p>
           <p style={{color: "#173a77"}}>Income Tax</p>
            <InfoIcon className="infoIcon" />
          </Paper>
        </Grid>
      </Grid>
      <Button id="addPayee" variant="contained">
        Add Payee
      </Button>
    </main>
  );
}
