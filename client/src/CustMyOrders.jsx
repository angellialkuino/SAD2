import React, { Component } from "react";
import './CustMyOrders.css';

class CustMyOrders extends Component {
    render() {
        return (
            <div className="custMyOrders">
                <div className="custMyOrders-main">
                    <div className="custMyOrders-body">

                        <div className="custMyOrders-header">
                            <h2>My Orders</h2>
                        </div>

                        <div className="custMyOrders-body-labels-and-buttons">
                            <div className="custMyOrders-labels">
                                <h3>Order ID #4798759</h3>
                                <button type="view" className="btn btn-dark btn-lg btn-block">View Order Details</button>
                            </div>

                            <div className="custMyOrders-labels">
                                <h3>Order ID #4798760</h3>
                                <button type="view" className="btn btn-dark btn-lg btn-block">View Order Details</button>
                            </div>

                            <div className="custMyOrders-labels">
                                <h3>Order ID #4798761</h3>
                                <button type="view" className="btn btn-dark btn-lg btn-block">View Order Details</button>
                            </div>

                            <div className="custMyOrders-labels">
                                <h3>Order ID #4798762</h3>
                                <button type="view" className="btn btn-dark btn-lg btn-block">View Order Details</button>
                            </div>
                            
                        </div>         
                    </div>
                </div>
            </div>
        );
    }
}

export default CustMyOrders;