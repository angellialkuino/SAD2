import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUpAndLogin.css';

import Axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate()
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

        console.log("handleSubmit func");
        await Axios.post('http://localhost:5000/api/customer/log-in',
            { email: email, password: pwd },
            { withCredentials: true }
        ).then((res) => {
            if (res.status === 200) {
                console.log(res);
                setSuccess(true);
                //setSuccessMsg(res.data.message);
                //setRoles("customer"); //check if backend returns anythin pero dba matic cust naman toh?
                setemail('');
                setPwd('');
            } else if (res.status === 400) {
                setErrMsg(res.data.message); //or is it res.body.message
            }

        }).catch((err) => {
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
        });

    }

    return (
        <> {success ? (navigate("/terms-and-conditions")) : (
            <section>
                <div className='center-div'>
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
                                        <Link to='/sign-up'>Sign Up</Link>
                                    </span>
                                </p>
                            </section>
                        )}
                    </div>
                </div>
            </section>
        )} </>
    )
}

export default LoginPage
