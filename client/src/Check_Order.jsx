import React, { Component } from 'react';
import './Check_Order.css';

class Check_Order extends Component {
    render() {
        return (
            <div className="Check_Order">
                <div className="Check_Order-container">
                    <div className="Check_Order-container-body>">
                        <div className ="side-to-side">
                            <div className="Check_Order-container-body-left">

                                <div className="Check_Order-header">
                                    <h3>Please Check Your Order</h3>
                                </div>

                                <div className="Check_Order_body">
                                    <p> Order Number: #######</p>
                                    <br/>
                                    <p> Name:</p>
                                    <p> Contact Number:</p>
                                    <p> Address:</p>
                                    <p> Payment Method:</p>
                                    <br/>
                                    <p> Quantity:</p>
                                    <p> Amount per Set:</p>
                                    <p> VAT:</p>
                                    <p> TOTAL:</p>
                                </div>

                            </div>

                        

                            <div className="Check_Order-container-info">
                                <div className="Check_Order-container-info-body">
                                    <p> Order Number: #######</p>
                                    <br/>
                                    <p> Name:</p>
                                    <p> Contact Number:</p>
                                    <p> Address:</p>
                                    <p> Payment Method:</p>
                                    <br/>
                                    <p> Quantity:</p>
                                    <p> Amount per Set:</p>
                                    <p> VAT:</p>
                                    <p> TOTAL:</p>
                                </div>
                            </div>
                        </div>

                        <div className="Check_Order-footer">
                            <div className="Check_Order-buttons">
                                <button className="Check_Order-button-back btn-primary"> Back </button>
                                <button className="Check_Order-button-next btn-primary"> Next </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Check_Order;