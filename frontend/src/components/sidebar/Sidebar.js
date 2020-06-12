import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HouseIcon from '@material-ui/icons/House';

export default function Sidebar() {
    return (
        <div>
            <nav className='sidebar'>
                <h4>Optimum DigiBank</h4>
                <ul className='sidebar-nav'>
                    <li className='sidenav-item'>
                        <Link to='/'>
                            <HouseIcon></HouseIcon>Overview
                        </Link>
                    </li>
                    <li className='sidenav-item'>
                        <Link to='/customerdetails'>
                            Customer Details
                             </Link>
                    </li>
                    <li className='sidenav-item'>
                        <Link to='/approvalstatus'>
                            Approval Status
                        </Link>
                    </li>
                    <li className='sidenav-item'>
                        <Link to='/creditcardstatus'>
                            <CreditCardIcon></CreditCardIcon>CreditCard Status
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
