import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

export default function DenyCreditCardButton() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  return (
    <div>
      <Button variant="contained">Deny</Button>
    </div>
  );
}
