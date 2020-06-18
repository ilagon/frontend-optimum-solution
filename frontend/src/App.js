import React from "react";
import "./App.css";
import Dashboard from "./components/Overview/Dashboard";
import MobileSideBar from "./components/MobilePayment/MobilePayment-SideBar";
import Searchbar from "./components/common/Searchbar";
import OneTimeTransferBody from "./components/MobilePayment/OneTimeTransfer/OneTimeTransfer_Body";
import OtherRecipientsPayeeListBody from "./components/MobilePayment/OtherRecipients/OtherRecipients_PayeeList";
import MobilePaymentConfirmationBody from "./components/MobilePayment/OneTimeTransfer/OneTimeTransferConfirmation_Body";
import OtherRecipientsFormBody from "./components/MobilePayment/OtherRecipients/OtherRecipients_Body";
import AddPayeePageBody from "./components/MobilePayment/OtherRecipients/OtherRecipients_AddPayee";
import { PaymentSuccessfulPage } from "./components/ResultPage/PaymentSuccessful";
import { PaymentUnSuccessfulPage } from "./components/ResultPage/PaymentUnsuccessful";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { store } from "./index";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      <MobileSideBar />
      <Searchbar />
      <Router>
        <Switch>
          <Route exact path="/" component={OneTimeTransferBody} />
          <Route
            exact
            path="/MobilePayment/OtherRecipients"
            component={OtherRecipientsPayeeListBody}
          />
          <Route path="/MobilePayment/AddPayee" component={AddPayeePageBody} />
          <Route
            path="/MobilePayment/OtherRecipients/Form"
            component={OtherRecipientsFormBody}
          />
          <Route
            path="/MobilePayment/ConfirmationPage"
            component={MobilePaymentConfirmationBody}
          />
          <Route path="/Payment/Successful" component={PaymentSuccessfulPage} />
          <Route
            path="/Payment/Unsuccessful"
            component={PaymentUnSuccessfulPage}
          />
        </Switch>

        {/* <OneTimeTransferPage /> */}
      </Router>
    </div>
  );
}

export default App;
