import React from 'react'
import ApproveAccount from './button/ApproveAccountButton'
import DenyAccount from './button/DenyAccountButton'

export default function ApprovalStatus() {
    return (
        <div>
            <h1>Customer Account Approval Status</h1>
            <input placeholder='Search'></input>
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
