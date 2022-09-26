import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Check_Order.css';

class Check_Order extends Component {
    render() {
        return (
            <div className="Check_Order">
                <div className="Check_Order-container">
                    <div className="Check_Order-header">
                        <h3>Please Check Your Order</h3>
                    </div>

                    <div className="Check_Order_body">
                        <p> Order Number: #######</p>
                        <br />
                        <p> Name:</p>
                        <p> Contact Number:</p>
                        <p> Address:</p>
                        <p> Payment Method:</p>
                        <br />
                        <p> Quantity:</p>
                        <p> Amount per Set:</p>
                        <p> VAT:</p>
                        <p> TOTAL:</p>
                    </div>
                </div>
                <div className="form1-footer">
                    <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/order-pickup' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </div>
        );
    }
}

export default Check_Order;