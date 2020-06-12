import React from 'react'
import Search from './searchbar/Searchbar'

export default function CustomerDetails() {
    return (
        <div>
            <main>
                <h1>Customer Details</h1>
                <Search />
                <table>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Contact No.</th>
                </table>
            </main>
        </div>
    )
}
