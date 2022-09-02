import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="custDetail">

                <div className="orderTable">
                    <div className="orderTable-header">
                        <h2>Order Form</h2>
                    </div>

                    <div className="orderTable-body">

                    </div>
                </div>

                <div className="paymentDetails">
                    <div className="paymentDetails-header">
                        <h2>Payment Details</h2>
                    </div>

                    <div className="paymentDetails-body">
                    </div>
                </div>

                <div className="orderStatus">
                    <div className="orderStatus-header">
                        <h2>Order Status</h2>
                    </div>

                </div>
            </div>

        );
    }
}