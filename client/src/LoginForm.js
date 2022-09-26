import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "./context/AuthProvider";
import './LoginForm.css';

import Axios from 'axios';

const LoginForm = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setemail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:5000/api/customer/log-in',
                {
                    email: email,
                    password: pwd,
                },
                {
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, pwd, accessToken });
            setemail('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to='homepage'>Go to Home</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Login</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default LoginForm


// class LoginForm extends Component {
//     render() {
//         return (
//             <div className="login-form">

//                 <div className="login-form-header">
//                     <h1 className='h1'> Invitations for <br /> every occassion </h1>
//                 </div>

//                 <div className="login-form-body">
//                     <form>
//                         <div className="login-form-title">
//                             <h3>Log in</h3>
//                         </div>

//                         <div className="form-group">
//                             <label>Email</label>
//                             <input type="email" className="form-control" placeholder="Enter email" />
//                         </div>

//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" className="form-control" placeholder="Enter password" />
//                         </div>

//                         {/* <p className="forgot-password text-left">
//                             Forgot <a href="#">password?</a>
//                         </p> */}

//                         <div className="form-group">
//                             <div className="custom-control custom-checkbox">
//                                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                                 <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                             </div>
//                         </div>

//                         <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>

//                         <p className="no-account text-left">
//                             Don't have an account? <Link to='/sign-up' className="rounded-pill btn btn-info fw-bold nav-hover">Sign up here</Link>
//                         </p>

//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default LoginForm;