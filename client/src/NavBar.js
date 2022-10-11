import React, { useEffect} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';


function NavBar() {
    // useEffect(() => {
    //     const custAuth = async () => {
    //         await Axios.get('http://localhost:5000/api/customer/auth',
    //             { withCredentials: true }
    //         ).then((res)=>{
    //             setUserID(res.data.user_id);
    //         }).catch((err) => {
    //             console.log(res);
    //             if(res.data.role=='customer'){
    //                 navigate('/customer');
    //             }else if(res.data.role=='staff'){
    //                 navigate('/staff/order-list');                    
    //             }else if(res.data.role=='owner'){
    //                 navigate('/owner/staff-list');                    
    //             }
    //         });
    //         setIsAuth(true);
    //     }

    //     custAuth();
    // },[])

    return (
        <>
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
        </>
    );
}

export default NavBar;