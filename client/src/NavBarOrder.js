import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';


function NavBarCustomerLoggedIn() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [userID, setUserID] = useState('');

    useEffect(() => {
        const custAuth = async () => {
            await Axios.get('http://localhost:5000/api/customer/auth',
                { withCredentials: true }
            ).then((res)=>{
                setUserID(res.data.user_id);
            }).catch((err) => {
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
                <Link to="/customer" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li>Order Form</li>
                    <li><Link to='/customer' className="rounded-pill btn btn-info fw-bold nav-hover">Cancel</Link></li>
                </ul>
            </nav>
            <Outlet context={userID}/>
            </>}

        </React.Fragment>
    );
}

export default NavBarCustomerLoggedIn;