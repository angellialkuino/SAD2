import React, { Component } from 'react';
import './index.css';

class SignUpForm extends Component {
    render() {
        return (
            <div className="signup-form">
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Facebook Account Link</label>
                        <input type="facebook" className="form-control" placeholder="Enter Facebook Account Link" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

                    <p className="no-account text-right">
                        Have an account already? <a href="#">Log in here.</a>
                    </p>

                    </form>
            </div>
        )
    } 
}

export default SignUpForm;