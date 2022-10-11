import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function NavBarStaff() {
    return (
        <React.Fragment>
            <nav className='nav'>
                <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/order-list-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Order List</Link></li>
                    <li><Link to='/order-history-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link></li>
                    <li><Link to='' className="rounded-pill btn btn-info fw-bold nav-hover">Logout</Link></li>
                </ul>
            </nav>

            <Outlet/>
        </React.Fragment>
    );
}

export default NavBarStaff;