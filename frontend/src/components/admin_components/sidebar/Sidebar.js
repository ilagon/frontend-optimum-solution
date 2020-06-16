import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faHome,
  faIdCard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

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
    fontFamily: "Roboto",
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
          <Link to="/">
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
          <Link to="/customerdetails">
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
          <Link to="/approvalstatus">
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
          <Link to="/creditcardstatus">
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

// Previous Codes :
// import './Sidebar.css'
// export default function Sidebar() {
//     return (
//         <div>
//             <nav className='sidebar'>
//                 <h4>Optimum DigiBank</h4>
//                 <ul className='sidebar-nav'>
//                     <li className='sidenav-item'>
//                         <Link to='/'>
//                             <HouseIcon />Overview
//                         </Link>
//                     </li>
//                     <li className='sidenav-item'>
//                         <Link to='/customerdetails'>
//                             <ContactMailIcon /> Customer Details
//                              </Link>
//                     </li>
//                     <li className='sidenav-item'>
//                         <Link to='/approvalstatus'>
//                             <PeopleIcon /> Approval Status
//                         </Link>
//                     </li>
//                     <li className='sidenav-item'>
//                         <Link to='/creditcardstatus'>
//                             <CreditCardIcon />CreditCard Status
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
