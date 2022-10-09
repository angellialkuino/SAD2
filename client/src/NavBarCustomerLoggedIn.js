import React from 'react';
import { Link } from 'react-router-dom';


function NavBarCustomerLoggedIn() {
    return (
        <React.Fragment>
            <nav className='nav'>
                <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/about-us' className="nav-link nav-text">About Us</Link></li>
                    <li><Link to='/order-form-login' className="rounded-pill btn btn-info fw-bold nav-hover">Order Now</Link></li>
                </ul>
                <ul>
                    <li><Link to='/current-orders' className="rounded-pill btn btn-info fw-bold nav-hover">My Orders</Link></li>
                    <li><Link to='/account-details' className="rounded-pill btn btn-info fw-bold nav-hover">My Account</Link></li>
                    <li><Link to='' className="rounded-pill btn btn-info fw-bold nav-hover">Logout</Link></li>
                </ul>
            </nav>

        </React.Fragment>
    );
}

export default NavBarCustomerLoggedIn;