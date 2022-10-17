import React, { useEffect, useState} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Axios from 'axios';


function NavBar() {
    const navigate = useNavigate();
    const [render, setRender] =useState(false);

    useEffect(() => {
        const custAuth = async () => {
            await Axios.get('http://localhost:5000/api/is-logged-in',
                { withCredentials: true }
            ).then((res)=>{
                if(!res.data.role){
                    setRender(true);
                    console.log("no user logged in");
                }else if(res.data.role=='customer'){
                    navigate('/customer');
                }else if(res.data.role=='staff'){
                    navigate('/staff/order-list');                    
                }else if(res.data.role=='owner'){
                    navigate('/owner/staff-list');                    
                }
            }).catch((err) => {
                console.log(err);
            });
            
        }

        custAuth();
    },[])

    return (
        <>
        {!render && <h1>Please Connect To Server</h1>}
        
        {render && <>
            <nav className='nav'>
                <Link to="/" className="navbar-brand nav-link site-title nav-hover">Crafter's Haven</Link>
                <ul>
                    <li><Link to='/about-us' className="nav-link nav-text">About Us</Link></li>
                    <li><Link to='/order-form-login' className="rounded-pill btn btn-info nav-hover">Order Now</Link></li>
                </ul>
                <ul>
                    <li><Link to='/sign-up' className="rounded-pill btn btn-info nav-hover">Sign Up</Link></li>
                    <li><Link to='/login' className="rounded-pill btn btn-info nav-hover">Login</Link></li>
                </ul>
            </nav>
        <Outlet/>
        </>}</>
    );
}

export default NavBar;