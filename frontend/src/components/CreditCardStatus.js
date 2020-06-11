import React from 'react'
import ApproveCreditCard from './ApproveCreditCardButton'
import DenyCreditCard from './DenyCreditCardButton'

export default function CreditCardStatus() {
    return (
        <div>
            <h1>Customer CreditCard Approval Status</h1>
            <table>
                <th>Customer ID</th>
                <th>Email</th>
                <th>CreditCard Type</th>
                <th>Approve/Deny CreditCard
                <tr><ApproveCreditCard></ApproveCreditCard><DenyCreditCard></DenyCreditCard></tr>
                </th>
            </table>
        </div>
    )
}
