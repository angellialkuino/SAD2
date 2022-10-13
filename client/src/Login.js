import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUpAndLogin.css';
import Axios from 'axios';

const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const testFunc = async () => {
        await Axios.get('http://localhost:5000/api/customer/get-test',
            { withCredentials: true }
        ).then((res) => {
            console.log(res);

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitting login info');
        await Axios.post('http://localhost:5000/api/customer/log-in',
            { email: email, password: pwd },
            { withCredentials: true }
        ).then((res) => {
            if (res.status === 200) {
                console.log(res);
                if(res.data.role=='customer'){
                    navigate('/customer');
                }else if(res.data.role=='staff'){
                    navigate('/staff/order-list');                    
                }else if(res.data.role=='owner'){
                    navigate('/owner/staff-list');                    
                }
            }

        }).catch((err) => {
            console.log("may error?", err);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg(err.response.message);
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

            <div className='login-form mt-5'>                
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
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <p className='noAccount'>
                        Need an Account?   <br />
                        <span className="line">
                            <Link to='/sign-up'>Sign Up</Link>
                        </span>
                    </p>
                </section>
            </div>
        </div></>
    )
}

export default LoginForm