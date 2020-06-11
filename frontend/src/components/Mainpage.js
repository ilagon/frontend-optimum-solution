import React from 'react'
import CustomerDetails from './CustomerDetails'
import ApprovalStatus from './ApprovalStatus'
import CreditCardStatus from './CreditCardStatus'
import Overview from './Overview'

export default function Mainpage() {
    return (
        <div>
            <header className='borderBottomWidth = 3px border-style: solid'>Optimum DigiBank</header>
            <Overview></Overview>
            <CustomerDetails></CustomerDetails>
            <ApprovalStatus></ApprovalStatus>
            <CreditCardStatus></CreditCardStatus>
        </div>
    )
}
