import React, { Component } from "react";
import './CustAccDetail.css';

class CustAccDetail extends Component {
    render() {
        return (
            <div className="CustAccDetail">
                <div className="accDetail">

                    <div className="accDetail-header">
                        <h2>Account Details</h2>
                    </div>

                    <div className="accDetail-body">
                        <div className="accDetail-body-left">

                            <div className="accDetail-body-left-name">
                                <h3>Name</h3>
                                <input type="Full Name" className="form-control"> </input>
                            </div>

                            <div className="accDetail-body-left-email">
                                <h3>Email</h3>
                                <input type="Email" className="form-control"> </input>
                            </div>

                            <div className="accDetail-body-left-barangay">
                                <h3>Barangay</h3>
                                <input type="Barangay" className="form-control"> </input>
                            </div>

                            <div className="accDetail-body-left-address">
                                <h3>Address</h3>
                                <input type="Address" className="form-control"> </input>
                            </div>

                            <div className="accDetail-body-left-fb">
                                <h3>Facebook Account</h3>
                                <input type="Facebook Account" className="form-control"> </input>
                            </div>

                        </div>

                        <div className="accDetail-body-right">

                            <div className="accDetail-body-right-contact">
                                <h3>Contact Number</h3>
                                <input type="Contact Number" className="form-control"> </input>
                            </div>

                            <div className="accDetail-body-right-password">
                                <h3>Password</h3>
                                <input type="Password" className="form-control"> </input>
                            </div>

                            <div className="accDetail-body-right-postal">
                                <h3>Postal Code</h3>
                                <input type="Postal Code" className="form-control"> </input>
                            </div>

                        </div>

                        <div className="accDetail-body-bottom">
                            <button type="update" className="btn btn-dark btn-lg btn-block">Update Account</button>
                            <button type="logout" className="btn btn-dark btn-lg btn-block">Log Out</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CustAccDetail;