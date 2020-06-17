import React from "react";
import CustomerDetails from "./CustomerDetails";
import ApprovalStatus from "./ApprovalStatus";
import CreditCardStatus from "./CreditCardStatus";
import Overview from "./Overview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function Mainpage() {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Overview></Overview>
          </Route>
          <Route path="/customerDetails">
            <CustomerDetails />
          </Route>
          <Route path="/approvalstatus">
            <ApprovalStatus />
          </Route>
          <Route path="/creditcardstatus">
            <CreditCardStatus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
