import React from "react";
import './CustAccDetail.css';

function CustAccDetail() {
    return (
        <div className="accDetail">
            <div className="accDetailMain">
                <div className="accDetail-body">

                    <div className="accDetail-header">
                        <h2>Account Details</h2>
                    </div>

                    <div className="accDetail-body-left">

                        <div className="accDetail-body-field">
                            <h3>Name</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Email</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Barangay</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Address</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Facebook Account</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Contact Number</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Password</h3>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Postal Code</h3>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="accDetail-body-bottom">
                        <button className="btn btn-dark btn-lg btn-block">Log Out</button>
                        <button className="btn btn-dark btn-lg btn-block">Update Account</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CustAccDetail;