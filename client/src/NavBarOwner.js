import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link,Outlet,useNavigate } from 'react-router-dom';

function NavBarOwner() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const ownerAuth = async () => {
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

        ownerAuth();
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
                <Link to="/owner" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/owner/staff-list' className="rounded-pill btn btn-info fw-bold nav-hover">Staff List</Link></li>
                    <li><Link to='/owner/order-list' className="rounded-pill btn btn-info fw-bold nav-hover">Order List</Link></li>
                    <li><Link to='/owner/order-history' className="rounded-pill btn btn-info fw-bold nav-hover">Order History</Link></li>
                    <li><button onClick={logOut} className="rounded-pill btn btn-info fw-bold nav-hover">Log Out</button></li>
                </ul>
            </nav>
            <Outlet/>
            </>}
        </React.Fragment>
    );
}

export default NavBarOwner;