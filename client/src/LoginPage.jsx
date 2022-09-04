import React, { Component } from 'react';
import "./LoginPage.css";

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="main-div">
                    <div className="login-page-body">
                        <div className="page-group">
                            <form>
                                <div className="login-page-title">
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

                                <button type="submit" className="btn-page btn-dark btn-lg btn-block">Log In</button>

                                <p className="no-account text-left">
                                    Don't have an account? <a href="#">Sign up here.</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default LoginPage;