import React from 'react'
import ApproveAccount from './button/ApproveAccountButton'
import DenyAccount from './button/DenyAccountButton'
import Search from './searchbar/Searchbar'

export default function ApprovalStatus() {
    return (
        <div>
            <main>
                <h1>Customer Account Approval Status</h1>
                <Search />
                <table>
                    <th>Customer ID</th>
                    <th>Email</th>
                    <th>Approval / Deny Account
                <tr><ApproveAccount></ApproveAccount><DenyAccount></DenyAccount></tr>
                    </th>
                </table>
            </main>
        </div>
    )
}
