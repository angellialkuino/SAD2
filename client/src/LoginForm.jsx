import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form">
                
                <div className="login-form-header">
                    <h1> Invitations for <br/> every occassion </h1>
                </div>

                <div className="login-form-body">
                    <form>
                        <div className="login-form-title">
                            <h3>Log in</h3>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <p className="forgot-password text-left">
                            Forgot <a href="#">password?</a>
                        </p>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>

                        <p className="no-account text-left">
                            Don't have an account? <a href="#">Sign up here.</a>
                        </p>

                        </form>
                    </div>
            </div>
        )
    } 
}

export default LoginForm;