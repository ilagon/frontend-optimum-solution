import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import UserMenu from "../Overview/UserMenu";
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "../Overview/Overview.css";
import MobilePaymentRoutes from "../MobilePayment/MobilePaymentRoutes";
import TransferMoneyPage from "../TransferMoney/transfer_money";
import OverviewPage from "../Overview/OverviewPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import SubmitTransferPage from '../TransferMoney/SubmitTransferPage';
import {PaymentSuccessfulPage} from "../ResultPage/PaymentSuccessful";
import {PaymentUnSuccessfulPage} from "../ResultPage/PaymentUnsuccessful";
import MobilePaymentConfirmationBody from "../MobilePayment/OneTimeTransfer/OneTimeTransferConfirmation_Body";
import AddPayeeForm from "../TransferMoney/AddPayeeForm";
import AddPayeeReceipentForm from "../TransferMoney/AddPayeeReceipentForm";
import CreditCardStatus from '../CreditCard/CreditcardStatusPage';
import ApplyCreditCardPage from '../CreditCard/ApplyCreditcardPage';
import CreditCardName from '../CreditCard/CreditcardNamePage';
import CreditCardSubmit from '../CreditCard/CreditcardSubmissionPage';
import CreditCardConfirm from '../CreditCard/CreditcardConfirmationPage';

import TaxPaymentRoutes from "../TaxPayment/TaxPaymentRoutes";

import {TransferSuccessfulPage} from '../ResultPage/TransferSuccessful';
import {TransferUnSuccessfulPage} from '../ResultPage/TransferUnsuccessful';

export default function Dashboard() {

  return (
    <Router>
    <div className="root" style={{display:"flex"}}>
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

        <NavLink className="navlink" activeClassName="activeNavlink" to="/apply-creditcard">
              <CreditCardIcon className="iconPadding" />
            <ListItemText primary="Apply for Credit Card" />
        </NavLink>

        <NavLink className="navlink" activeClassName="activeNavlink" to="/creditcard-status">
              <NotificationsIcon className="iconPadding" />
            <ListItemText primary="Credit Card Status" />
        </NavLink>
        </List>
      </Drawer>
      {/* <main className="content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className="container"></Container>
      </main> */}
    
      <Switch>
        <Route exact path="/" component={OverviewPage}></Route>
        {/* <Route path="/MobilePayment" component={OneTimeTransferBody}></Route> */}
        <Route path="/MobilePayment" component={MobilePaymentRoutes} />
        <Route path="/TransferMoney" component={TransferMoneyPage}/>
        <Route path="/AddPayee" component={AddPayeeForm}/>
        <Route path='/SubmitTransfer' component={SubmitTransferPage}/>
        <Route path="/SetTransferFromPayeeList" component={AddPayeeReceipentForm}/>
        <Route path="/Payment/Successful" component={PaymentSuccessfulPage} />
        <Route path="/Payment/Unsuccessful" component={PaymentUnSuccessfulPage} />
        <Route path="/Transfer/Successful" component={TransferSuccessfulPage} />
        <Route path="/Transfer/Unsuccessful" component={TransferUnSuccessfulPage} />
        <Route exact path="/apply-creditcard" component={ApplyCreditCardPage}></Route>
        <Route exact path="/apply-creditcard/creditcard-name" component={CreditCardName}/>
        <Route exact path="/apply-creditcard/creditcard-submit" component={CreditCardSubmit}></Route>
        <Route exact path="/apply-creditcard/creditcard-confirm" component={CreditCardConfirm}></Route>
        <Route exact path="/creditcard-status" component={CreditCardStatus}></Route>
        <Route path="/TaxPayment" component={TaxPaymentRoutes}></Route>
      </Switch>
    </div>
    </Router>
  );
}
