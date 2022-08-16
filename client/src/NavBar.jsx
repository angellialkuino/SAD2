import React, { Component } from 'react';
import AboutUs from './AboutUs';
import App from './App';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid m-2 ms-5 me-5">
                        {/* NEED: provide links */}
                        <Router>
                            <Link to="/" className="navbar-brand">Crafter's Haven</Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <div className="d-grid mx-auto gap-2 d-md-flex">
                                    <Link to='/about' className="nav-link me-md-2 m-2">About Us</Link>
                                    <a className="rounded-pill btn btn-info fw-bold me-md-2" to="/">Order Now</a>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <a className="rounded-pill btn btn-info fw-bold me-md-2" to="/">Sign Up</a>
                                    <a to="/login" className="rounded-pill btn btn-info fw-bold me-md-2">Login</a>
                                </div>

                                {/* <Routes>
                                    <Route exact path='/about' element={< AboutUs />}></Route>
                                </Routes> */}
                            </div>
                        </Router>

                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBar;