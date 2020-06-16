import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    padding:"10px",

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#0e4686',
    textAlign : 'right'
  },

  palette: {
    contrastText: "#0e4686",
  },
}));

export default function Header() {
  

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
        <FontAwesomeIcon icon={faUserCircle} size="2x" color="#0e4686" />
          <Typography className={classes.title}>Janice Wong</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
