import React from "react";
import "./App.css";
import Dashboard from "./components/Overview/Dashboard";
import OneTimeTransferPage from "./components/MobilePayment/OneTimeTransferPage";
import OtherRecipientsPage from "./components/MobilePayment/OtherRecipients_PayeePage";
import OneTimeTransferConfirmationPage from "./components/MobilePayment/OneTimeTransfer/OneTimeTransferConfirmation";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { store } from "./index";
import { useDispatch } from "react-redux";

function App() {

  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <Switch>
          <Route exact path="/" component={OneTimeTransferPage} />
          <Route path="/MobilePayment/ConfirmationPage" component={OneTimeTransferConfirmationPage} />
          <Route path="/MobilePayment/OtherRecipients" component={OtherRecipientsPage} />
        </Switch>
        {/* <OneTimeTransferPage /> */}
      </div> 
    </Router>
  );
}

export default App;
