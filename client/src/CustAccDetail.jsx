import React, { Component } from "react";
import './CustAccDetail.css';

class CustAccDetail extends Component {
    render() {
        return (
            <div className="">
                <div className="">

                    <div className="">
                        <h2>Account Details</h2>
                    </div>

                    <div className="accDetail-body">
                        <div className="accDetail-body-left">

                            <div className="accDetail-body-left-name">
                                <h3>Name</h3>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="accDetail-body-left-email">
                                <h3>Email</h3>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="accDetail-body-left-barangay">
                                <h3>Barangay</h3>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="accDetail-body-left-address">
                                <h3>Address</h3>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="accDetail-body-left-fb">
                                <h3>Facebook Account</h3>
                                <input type="text" className="form-control" />
                            </div>

                        </div>

                        <div className="accDetail-body-right">

                            <div className="accDetail-body-right-contact">
                                <h3>Contact Number</h3>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="accDetail-body-right-password">
                                <h3>text</h3>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="accDetail-body-right-postal">
                                <h3>Postal Code</h3>
                                <input type="text" className="form-control" />
                            </div>

                        </div>

                        <div className="accDetail-body-bottom">
                            <button className="btn btn-dark btn-lg btn-block">Update Account</button>
                            <button className="btn btn-dark btn-lg btn-block">Log Out</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CustAccDetail;