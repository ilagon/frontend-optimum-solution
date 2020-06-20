import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import UserMenu from "../Overview/UserMenu";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "../Overview/Overview.css";
import OneTimeTransferBody from "../MobilePayment/OneTimeTransfer/OneTimeTransfer_Body";
import TransferMoneyPage from "../TransferMoney/transfer_money";
import OverviewPage from "../Overview/OverviewPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Router>
    <div className="root">
      <CssBaseline />
      <AppBar position="absolute" className="appBar">
        <Toolbar className="toolbar">
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="SEARCH"
              classes={{
                root: "inputRoot",
                input: "inputInput",
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <UserMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: "drawerPaperx",
        }}
      >
        <Typography component="p" variant="h6" className="digiBankText">
          Optimum DigiBank
        </Typography>
        
        <List>
        <NavLink className="navlink" activeClassName="activeNavlink" exact to="/" >
            <HomeIcon className="iconPadding"/>
            <ListItemText primary="Overview" />
        </NavLink>
        
        <ListSubheader className="navSubHeader">PAYMENT</ListSubheader>
        
        <NavLink className="navlink" activeClassName="activeNavlink" to="/MobilePayment">          
            <PhoneIphoneIcon className="iconPadding" />
            <ListItemText primary="Mobile Bills" />
        </NavLink>

        <NavLink className="navlink" activeClassName="activeNavlink" to="/TransferMoney">
            <SyncAltIcon className="iconPadding" />
            <ListItemText primary="Transfer Money" />
        </NavLink>

        <NavLink className="navlink" activeClassName="activeNavlink" to="/TaxPayment">
              <DescriptionIcon className="iconPadding" />
            <ListItemText primary="Pay Tax" />
        </NavLink>
        </List>
        <Divider />
        <List>
        <ListSubheader className="navSubHeader">SERVICE</ListSubheader>

        <NavLink className="navlink" activeClassName="activeNavlink" to="/ApplyCreditCard">
              <CreditCardIcon className="iconPadding" />
            <ListItemText primary="Apply for Credit Card" />
        </NavLink>

        <NavLink className="navlink" activeClassName="activeNavlink" to="/CreditCardStatus">
              <NotificationsIcon className="iconPadding" />
            <ListItemText primary="Credit Card Status" />
        </NavLink>
        </List>
      </Drawer>
      {/* <main className="content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className="container"></Container>
      </main> */}
    </div>

    <Switch>
      <Route exact path="/" component={OverviewPage}></Route>
      <Route exact path="/" component={OneTimeTransferBody}></Route>
      <Route exact path="/" component={TransferMoneyPage}></Route>
      <Route exact path="/" component={OneTimeTransferBody}></Route>
      <Route exact path="/" component={OverviewPage}></Route>
      <Route exact path="/" component={OverviewPage}></Route>
    </Switch>
    </Router>
  );
}
