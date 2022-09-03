import React, { Component } from "react";

class CustOrderDetail extends Component {
    render() {
        return (
            <div className="custOrderDetail">

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

export default CustOrderDetail;