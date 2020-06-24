import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./css/OneTimeTransfer.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

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

  const formTo = (
    <div className="toForm toFormConfirmation">
      <h1>To</h1>
      <p>Reference No.: insert value here</p>
      <p>Income Tax</p>
      <p>$ insert amount here</p>
    </div>
  );

  const formFrom = (
    <div className="fromForm fromFormConfirmation">
      <h1>From</h1>
      <p>insert creditcard here</p>
      <div>
        <Button id="submitButton" variant="contained">
          Submit
        </Button>
      </div>
      <div>
        <Button id="cancelButton" variant="contained">
          Cancel
        </Button>
      </div>
    </div>
  );

  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
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
  );
}
