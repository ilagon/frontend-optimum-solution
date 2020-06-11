import React from 'react'
import ApproveAccount from './ApproveAccountButton'
import DenyAccount from './DenyAccountButton'

export default function ApprovalStatus() {
    return (
        <div>
            <h1>Customer Account Approval Status</h1>
            <table>
                <th>Customer ID</th>
                <th>Email</th>
                <th>Approval/Deny Account
                <tr><ApproveAccount></ApproveAccount><DenyAccount></DenyAccount></tr>
                </th>
            </table>
        </div>
    )
}
