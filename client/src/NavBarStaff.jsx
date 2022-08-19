import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';

class NavBarStaff extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className='nav'>
                    <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                    <ul>
                        <li><a className="rounded-pill btn btn-info fw-bold nav-hover">Order List</a></li>
                        <li><a className="rounded-pill btn btn-info fw-bold nav-hover">Order History</a></li>
                    </ul>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBarStaff;