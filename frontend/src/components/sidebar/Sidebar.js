import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div>
            <nav className='sidebar'>
                <ul className='sidebar-nav'>
                <h3>Optimum DigiBank</h3>
                    <li className='sidenav-item'><Link to='/'>Overview</Link></li>
                    <li className='sidenav-item'><Link to='/customerdetails'>Customer Details</Link></li>
                    <li className='sidenav-item'><Link to='/approvalstatus'>Approval Status</Link></li>
                    <li className='sidenav-item'><Link to='/creditcardstatus'>CreditCard Status</Link></li>
                </ul>
            </nav>
        </div>
    )
}
