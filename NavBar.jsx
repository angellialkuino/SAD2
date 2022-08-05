import React, { Component } from 'react';
class NavBar extends Component {
    render() {
        return (
            <React.Fragment> {/* instead of <div> to avoid creating an extra <div> */}
                <nav className="navbar navbar-expand-lg bg-warning">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">Crafter's Haven</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Order Now</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;