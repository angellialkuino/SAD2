import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid m-2">
                        {/* NEED: provide links */}
                        <a className="navbar-brand" href="#">Crafter's Haven</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <div className="d-grid mx-auto gap-2 d-md-flex">
                                <Link className="nav-link me-md-2 m-1" to="/">About Us</Link>
                                <Link className="rounded-pill btn btn-info fw-bold me-md-2" to="/">Order Now</Link>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link className="rounded-pill btn btn-info fw-bold me-md-2" to="/">Sign Up</Link>
                                <Link to="/login" className="rounded-pill btn btn-info fw-bold me-md-2">Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBar;