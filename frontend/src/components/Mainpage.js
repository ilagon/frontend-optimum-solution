import React from 'react'
import CustomerDetails from './CustomerDetails'
import ApprovalStatus from './ApprovalStatus'
import CreditCardStatus from './CreditCardStatus'
import Overview from './Overview'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header/header'

export default function Mainpage() {
    return (
        <div>
            <Router>
                <Header />
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
