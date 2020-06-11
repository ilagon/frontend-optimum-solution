import React from 'react'
import CustomerDetails from './CustomerDetails'
import ApprovalStatus from './ApprovalStatus'
import CreditCardStatus from './CreditCardStatus'

export default function Overview() {
    return (
        <div>
            <CustomerDetails></CustomerDetails>
            <ApprovalStatus></ApprovalStatus>
            <CreditCardStatus></CreditCardStatus>
        </div>
    )
}
