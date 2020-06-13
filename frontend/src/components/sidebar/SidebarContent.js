import React from "react";
import { Link } from "react-router-dom";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import HouseIcon from "@material-ui/icons/House";
import PeopleIcon from "@material-ui/icons/People";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function Sidebar() {
  return (
    <div>
      <h4>Optimum DigiBank</h4>
      <ListItem button>
        <ListItemIcon>
          <HouseIcon />
        </ListItemIcon>
        <Link to="/">
          <ListItemText primary="Overview" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <Link to="/customerdetails">
          <ListItemText primary="Customer Details" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Link to="/approvalstatus">
          <ListItemText primary=" Approval Status" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CreditCardIcon />
        </ListItemIcon>
        <Link to="/creditcardstatus">
          <ListItemText primary="CreditCard Status" />
        </Link>
      </ListItem>
    </div>
  );
}
