import React from 'react'
import ApproveCreditCard from './button/ApproveCreditCardButton'
import DenyCreditCard from './button/DenyCreditCardButton'
import Search from './searchbar/Searchbar'

export default function CreditCardStatus() {
    return (
        <div>
            <main>
                <h1>Customer CreditCard Approval Status</h1>
                <Search />
                <table>
                    <th>Customer ID</th>
                    <th>Email</th>
                    <th>CreditCard Type</th>
                    <th>Approve / Deny CreditCard
                <tr><ApproveCreditCard></ApproveCreditCard><DenyCreditCard></DenyCreditCard></tr>
                    </th>
                </table>
            </main>
        </div>
    )
}
