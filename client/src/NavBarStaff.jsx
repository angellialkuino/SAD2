import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarStaff extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className='nav'>
                    <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                    <ul>
                        <li><Link to='/order-list-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Order List</Link></li>
                        <li><Link to='/order-history-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link></li>
                    </ul>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBarStaff;