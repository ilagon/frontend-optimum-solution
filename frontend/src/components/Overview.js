import React from 'react'
import Reset from './button/ResetButton'

export default function Overview() {




    return (
        <div>
            <main>
                <table>
                    <th>Pending Customer Status</th>
                    <th>Pending CreditCard Approval</th>
                    <th>Total Customers</th>
                </table>
                <h1>Customer List</h1>
                <input placeholder='Search'></input>
                <Reset></Reset>
            </main>
        </div>
    )
}
