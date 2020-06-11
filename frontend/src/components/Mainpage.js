import React from 'react'
import CustomerDetails from './CustomerDetails'
import ApprovalStatus from './ApprovalStatus'
import CreditCardStatus from './CreditCardStatus'
import Overview from './Overview'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Mainpage() {
    return (
        <div>
            <nav>
                <header className='app-header'>Optimum DigiBank</header>
                <Router>
                    <ul>
                        <li>
                            <Link to='/'>Overview</Link>
                        </li>
                        <li>
                            <Link to='/customerdetails'>Customer Details</Link>
                        </li>
                        <li>
                            <Link to='/approvalstatus'>Approval Status</Link>
                        </li>
                        <Link to='/creditcardstatus'>CreditCard Status</Link>
                    </ul>
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



        </div>
    )
}
