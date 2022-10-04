import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "./context/AuthProvider";
import './SignUpAndLogin.css';

import Axios from 'axios';

const LoginForm = ({ success, setSuccess, roles, setRoles }) => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setemail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const testFunc = () => {
        Axios.get('http://localhost:5000/api/customer/get-test',
            { withCredentials: true }
        ).then((res) => {
            console.log(res);
            
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit func");
        await Axios.post('http://localhost:5000/api/customer/log-in',
            { email: email, password: pwd },
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                console.log(res);
                setSuccess(true);
                //setSuccessMsg(res.data.message);
                setRoles("customer"); //check if backend returns anythin pero dba matic cust naman toh?
                //setAuth({ email, pwd, roles, accessToken });
                setemail('');
                setPwd('');
            }else if (res.status===400){
                setErrMsg(res.data.message); //or is it res.body.message
            }
            
        }).catch( (err) => {
            console.log("may error?", err);
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
                            <button type="submit" >Login</button>
                        </form>
                        <p>
                            Need an Account?<br />
                            <span className="line">
                                <Link to='/sign-up'>Sign Up</Link>
                            </span>
                            
                            <button onClick={testFunc}>Test Link</button>
                            
                        </p>
                    </section>
                )}
            </div>
        </div></>
    )
}

export default LoginForm