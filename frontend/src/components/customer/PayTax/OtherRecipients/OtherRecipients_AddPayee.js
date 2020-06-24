import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/OtherRecipients.css";
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
    <div className="toForm">
      <h1>To</h1>
      <div>
        <TextField
          required
          className={classes.textBoxMargin}
          id="phoneNumberInput"
          label="Phone Number"
        />
      </div>
    </div>
  );
  return (
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Grid container direction="row" justify="space-evenly" wrap="wrap">
        <Grid item sm={10} className={classes.gridMargin + " taxPayment"}>
          <h1>Tax Payment</h1>
        </Grid>
        <Grid
          item
          sm={6}
          direction="row"
          className={classes.gridMargin + " border"}
        >
          {formTo}
        </Grid>
        <Grid
          item
          sm={6}
          direction="row"
          className={classes.gridMargin + " border"}
        >
          <div className="buttonContainer">
            <div>
              <Button id="savePayeeButton" variant="contained">
                Save Payee
              </Button>
            </div>
            <div>
              <Button id="confirmButton" variant="contained">
                Confirm
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
