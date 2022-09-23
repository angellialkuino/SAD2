import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Axios from 'axios';
import './SignUp.css';

function Sign_up() {
    const [full_name, setfull_name] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [fb_account, setfb_account] = useState('');

    //get function for reference
    useEffect(() => {
        Axios.get('http://localhost:5000/api/customer/sign-up', {})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const addUser = () => {
        //this is node js' server connection (5000) with /customer/sign-up as the address to store user data
        Axios.post('http://localhost:5000/api/customer/sign-up', {
            full_name: full_name,
            email: email,
            password: password,
            fb_account: fb_account
        }).then(() => {
            console.log("success");
        })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div className="signup-form">

            <div className="signup-form-header">
                <h1 className='h1'> Invitations for <br /> every occassion </h1>
            </div>

            <div className="signup-form-body">
                <form>
                    <div className="signup-form-title">
                        <h3> Sign Up</h3>
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full name" onChange={(event) => {
                            setfull_name(event.target.value);
                        }} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => {
                            setemail(event.target.value);
                        }} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => {
                            setpassword(event.target.value);
                        }} />
                    </div>

                    {/* <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="confirm_password" className="form-control" placeholder="Confirm password" />
                    </div> */}


                    <div className="form-group">
                        <label>Facebook Account Link</label>
                        <input type="facebook" className="form-control" placeholder="Enter Facebook Account Link" onChange={(event) => {
                            setfb_account(event.target.value);
                        }} />
                    </div>

                    <button type="submit" onClick={addUser} className="btn btn-dark btn-lg btn-block">Sign Up</button>

                    <p className="no-account text-right">
                        Have an account already? <Link to='/log-in' className="rounded-pill btn btn-info fw-bold nav-hover">Login here</Link>
                    </p>


                </form>
            </div>
        </div>
    )

}

export default Sign_up;