import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className='nav'>
                    <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                    <ul>
                        <li><Link to='/AboutUs' className="nav-link nav-text">About Us</Link></li>
                        <li><Link to='/OrderForm' className="rounded-pill btn btn-info fw-bold nav-hover">Order Now</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/SignUpForm' className="rounded-pill btn btn-info fw-bold nav-hover">Sign Up</Link></li>
                        <li><Link to='/LoginForm' className="rounded-pill btn btn-info fw-bold nav-hover">Login</Link></li>
                    </ul>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBar;