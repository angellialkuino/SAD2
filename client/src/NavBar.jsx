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
                        <li><Link to='/aboutus' className="nav-link nav-hover">About Us</Link></li>
                        <li><a className="rounded-pill btn btn-info fw-bold nav-hover">Order Now</a></li>
                    </ul>
                    <ul>
                        <li><a className="rounded-pill btn btn-info fw-bold nav-hover">Sign Up</a></li>
                        <li><a className="rounded-pill btn btn-info fw-bold nav-hover">Login</a></li>
                    </ul>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBar;