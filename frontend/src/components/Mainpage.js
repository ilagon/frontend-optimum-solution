import React from 'react'
import CustomerDetails from './CustomerDetails'
import ApprovalStatus from './ApprovalStatus'
import CreditCardStatus from './CreditCardStatus'
import Overview from './Overview'
import Sidebar from './sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function Mainpage() {
    return (
        <div>
            <Router>
                <Sidebar></Sidebar>
                <Switch>
                    <Route exact path='/'>
                        <Overview></Overview>
                    </Route>
                    <Route path='/customerDetails'>
                        <CustomerDetails></CustomerDetails>
                    </Route>
                    <Route path='/approvalstatus'>
                        <ApprovalStatus></ApprovalStatus>
                    </Route>
                    <Route path='/creditcardstatus'>
                        <CreditCardStatus></CreditCardStatus>
                    </Route>
                </Switch>
            </Router>
        </div>

    )
}
