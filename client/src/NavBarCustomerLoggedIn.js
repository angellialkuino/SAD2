import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';


function NavBarCustomerLoggedIn() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const custAuth = async () => {
            await Axios.get('http://localhost:5000/api/customer/auth',
                { withCredentials: true }
            ).then().catch((err) => {
                console.log(err.response.status);
                if(err.response.status == 401){
                    //navigate to unautherized page
                    navigate("/");
                }
            });
            setIsAuth(true);
        }

        custAuth();
    },[])

    return (
        <React.Fragment>
            {isAuth && <>
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
            </>}

        </React.Fragment>
    );
}

export default NavBarCustomerLoggedIn;