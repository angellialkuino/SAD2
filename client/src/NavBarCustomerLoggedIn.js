import React, { useEffect } from 'react';
import Axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


function NavBarCustomerLoggedIn() {
    useEffect(() => {
        const custAuth = async () => {
            await Axios.get('http://localhost:5000/api/customer/get-test',
                { withCredentials: true }
            ).then((res) => {
                console.log(res);
    
            })
        }
    }
        ,[])
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
                </ul>
            </nav>
            <Outlet/>

        </React.Fragment>
    );
}

export default NavBarCustomerLoggedIn;