import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "./context/AuthProvider";
import './SignUpAndLogin.css';

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
        <> <div className='center-div'>
            <div className='signup-left-div'>
                <h1 className='centered-text-on-img white-text'>Invitations for every occassion</h1>
                <img className='signup-img' src={process.env.PUBLIC_URL + '/images/sample6.jpg'} alt="Debut Invitation" />

            </div>
            <div className='mt-5'>
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
                        <h1>Login to Account</h1>
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
                                <Link to='/sign-up'>Sign Up</Link>
                            </span>
                        </p>
                    </section>
                )}
            </div>
        </div></>
    )
}

export default LoginForm