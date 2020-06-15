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

  const classes = useStyles();

  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
        <Grid item sm={6} className="bodyTitle nonActiveTitle">
          <h1>One Time Transfer</h1>
        </Grid>
        <Grid item sm={6} className="bodyTitle activeTitle">
          <h1>Other Recipients</h1>
        </Grid>
        <Grid item sm={10} className={classes.gridMargin + " billPayment"}>
          <h1>Bill Payment</h1>
        </Grid>
        <Grid item sm={12}>
          <Paper elevation={3} className="paperHeight">
            insert div content here
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
