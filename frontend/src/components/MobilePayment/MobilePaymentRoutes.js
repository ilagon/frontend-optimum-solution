import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./MobilePayment-SideBar";
import Searchbar from "../common/Searchbar"

import OneTimeTransferBody from "./OneTimeTransfer/OneTimeTransfer_Body";
import OtherRecipients_FormBody from "./OtherRecipients/OtherRecipients_Body"
import OtherRecipients_PayeeListBody from "./OtherRecipients/OtherRecipients_PayeeList";
import OtherRecipients_AddPayeeBody from "./OtherRecipients/OtherRecipients_AddPayee";
import MobilePaymentConfirmationBody from "./OneTimeTransfer/OneTimeTransferConfirmation_Body";

import {PaymentSuccessfulPage} from "../ResultPage/PaymentSuccessful";
import {PaymentUnSuccessfulPage} from "../ResultPage/PaymentUnsuccessful";

export default function MobilePaymentRoutes() {

    return (
        <div style={{display: "flex", height: "100vh"}}>
            <Sidebar/>
            <Searchbar/>

        <Router>
            <Switch>
                <Route exact path="/" component={OneTimeTransferBody} />
                <Route exact path="/MobilePayment/OtherRecipients" component={OtherRecipients_PayeeListBody} />
                <Route path="/MobilePayment/AddPayee" component={OtherRecipients_AddPayeeBody} />
                <Route path="/MobilePayment/OtherRecipients/Form" component={OtherRecipients_FormBody} />
                <Route path="/MobilePayment/ConfirmationPage" component={MobilePaymentConfirmationBody} />
                <Route path="/Payment/Successful" component={PaymentSuccessfulPage} />
                <Route path="/Payment/Unsuccessful" component={PaymentUnSuccessfulPage} />
            </Switch>
        </Router>

        </div>
    )

}