import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <React.Fragment>
            <nav className='nav'>
                <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/about-us' className="nav-link nav-text">About Us</Link></li>
                    <li><Link to='/order-form-login' className="rounded-pill btn btn-info nav-hover">Order Now</Link></li>
                </ul>
                <ul>
                    <li><Link to='/sign-up' className="rounded-pill btn btn-info nav-hover">Sign Up</Link></li>
                    <li><Link to='/login' className="rounded-pill btn btn-info nav-hover">Login</Link></li>
                </ul>
            </nav>

        </React.Fragment>
    );
}

export default NavBar;