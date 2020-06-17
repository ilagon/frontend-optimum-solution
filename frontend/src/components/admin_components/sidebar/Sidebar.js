import React, { useState } from "react";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faHome,
  faIdCard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  List,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: "300px",
    backgroundColor: "#AA3A21",
  },
  headertextprimary: {
    color: "#fff",
    paddingBottom: "25px",
    paddingTop: "20px",
    paddingLeft: "20px",
    fontFamily: "Arial",
  },
  overviewtextprimary: {
    color: "#fff",
  },

  overviewicon: {
    paddingLeft: "15px",
  },

  textprimary: {
    color: "#fff",
    paddingRight: "20px",
  },

  active: {
    backgroundColor: "#ffe082",
  },

  icon: {
    paddingLeft: "15px",
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const [optionState, setOptionState] = useState(1);

  const handleOptionSelected = (event, index) => {
    setOptionState(index);
  };

  return (
    <Drawer variant="permanent">
      <List className={classes.root}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          className={classes.headertextprimary}
        >
          Optimum DigiBank
        </Typography>
        <ListItem
          button
          selected={optionState === 0}
          onClick={(event) => handleOptionSelected(event, 0)}
        >
          <ListItemIcon className={classes.overviewicon}>
            <FontAwesomeIcon icon={faHome} color="white" />
          </ListItemIcon>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItemText
              primary="OVERVIEW"
              className={classes.overviewtextprimary}
            />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={optionState === 1}
          onClick={(event) => handleOptionSelected(event, 1)}
        >
          <ListItemIcon className={classes.icon}>
            <FontAwesomeIcon icon={faIdCard} color="white" />
          </ListItemIcon>
          <Link to="/customerdetails" style={{ textDecoration: "none" }}>
            <ListItemText
              primary="Customer Details"
              className={classes.textprimary}
            />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={optionState === 2}
          onClick={(event) => handleOptionSelected(event, 2)}
        >
          <ListItemIcon className={classes.icon}>
            <FontAwesomeIcon icon={faUsers} color="white" />
          </ListItemIcon>
          <Link to="/approvalstatus" style={{ textDecoration: "none" }}>
            <ListItemText
              primary=" Approval Status"
              className={classes.textprimary}
            />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={optionState === 3}
          onClick={(event) => handleOptionSelected(event, 3)}
        >
          <ListItemIcon className={classes.icon}>
            <FontAwesomeIcon icon={faCreditCard} color="white" />
          </ListItemIcon>
          <Link to="/creditcardstatus" style={{ textDecoration: "none" }}>
            <ListItemText
              primary="CreditCard Status"
              className={classes.textprimary}
            />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
