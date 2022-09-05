import React, { Component } from 'react';
import './SignUp.css';

class SignUpForm extends Component {
    render() {
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
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="confirm_password" className="form-control" placeholder="Confirm password" />
                        </div>


                        <div className="form-group">
                            <label>Facebook Account Link</label>
                            <input type="facebook" className="form-control" placeholder="Enter Facebook Account Link" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>

                        <p className="no-account text-right">
                            Have an account already? <a href="#">Log in here.</a>
                        </p>


                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm;