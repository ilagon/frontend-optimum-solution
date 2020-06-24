import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// Overrides the current default theme provided by the material UI
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#00a152",
    color: "#fff",
    right: "100px",
  },
}));

export default function ApproveAccountButton() {
 
const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.root} >Approve</Button>
    </div>
  );
}
