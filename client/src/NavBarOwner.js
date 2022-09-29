import React from 'react';
import { Link } from 'react-router-dom';

function NavBarOwner() {
    return (
        <React.Fragment>
            <nav className='nav'>
                <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/staff-list' className="rounded-pill btn btn-info fw-bold nav-hover">Staff List</Link></li>
                    <li><Link to='/order-list-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Order List</Link></li>
                    <li><Link to='/order-history-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Order History</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default NavBarOwner;