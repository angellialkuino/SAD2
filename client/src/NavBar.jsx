import React, { Component } from 'react';
class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid m-2 ms-5 me-5">
                        {/* NEED: provide links */}
                        <a className="navbar-brand" href="#">Crafter's Haven</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <div className="d-grid mx-auto gap-2 d-md-flex">
                                <a className="nav-link me-md-2 m-2" to="/">About Us</a>
                                <a className="rounded-pill btn btn-info fw-bold me-md-2" to="/">Order Now</a>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a className="rounded-pill btn btn-info fw-bold me-md-2" to="/">Sign Up</a>
                                <a to="/login" className="rounded-pill btn btn-info fw-bold me-md-2">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBar;