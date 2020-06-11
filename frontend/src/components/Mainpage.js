import React from 'react'
import CustomerDetails from './CustomerDetails'
import ApprovalStatus from './ApprovalStatus'
import CreditCardStatus from './CreditCardStatus'
import Overview from './Overview'
import Reset from './ResetButton'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Mainpage() {
    return (
        <div>
            <nav>
                <header className='app-header'>Optimum DigiBank</header>
                <Router>
                    <Link to='/'>Overview</Link>
                    <Link to='/customerdetails'>Customer Details</Link>
                    <Link to='/approvalstatus'>Approval Status</Link>
                    <Link to='/creditcardstatus'>CreditCard Status</Link>
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
            </nav>


            <Reset></Reset>
        </div>
    )
}
