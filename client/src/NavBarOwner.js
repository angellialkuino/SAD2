import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link,Outlet,useNavigate } from 'react-router-dom';

function NavBarOwner() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const custAuth = async () => {
            await Axios.get('http://localhost:5000/api/owner/auth',
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

    const logOut = async () => {
        await Axios.get('http://localhost:5000/api/customer/log-out',
            { withCredentials: true }
        ).then((res) => {
            navigate('/');
            // Navigate to home page without cust navbar
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <React.Fragment>
            {isAuth && <>
            <nav className='nav'>
                <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/staff-list' className="rounded-pill btn btn-info fw-bold nav-hover">Staff List</Link></li>
                    <li><Link to='/order-list-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Order List</Link></li>
                    <li><Link to='/order-history-staff' className="rounded-pill btn btn-info fw-bold nav-hover">Order History</Link></li>
                    <li><button onClick={logOut} className="btn btn-dark btn-lg btn-block">Log Out</button></li>
                </ul>
            </nav>
            <Outlet/>
            </>}
        </React.Fragment>
    );
}

export default NavBarOwner;