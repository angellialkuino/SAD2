import React, { Component } from 'react';
import './OrderDetails.css';

class OrderDetailsCustomer extends Component {
    render() {
        return (
            <div className='order-details-main'>
                <div className='order-div'>
                    <h1>ORDER #00000000X</h1>
                    <div className='white-inner-div1'>
                        <h5>
                            Date Ordered
                        </h5>
                        <p>03/24/22</p>
                        <h5>
                            Invitation Type
                        </h5>
                        <p>Wedding</p>
                        <h5>
                            Motif/Theme
                        </h5>
                        <p>Floral</p>
                        <h5>
                            Font Style
                        </h5>
                        <p>Arial</p>
                        <h5>
                            Size of Card
                        </h5>
                        <p>inner | envelope</p>
                        <h5>
                            Urgency Level
                        </h5>
                        <p>Urgent</p>
                        <h5>
                            Date of Event
                        </h5>
                        <p>04/02/22</p>
                        <h5>
                            Invitation Title
                        </h5>
                        <p>title</p>
                        <h5>
                            Content Link
                        </h5>
                        <p>-URL-</p>
                        <h5>
                            Type of Paper
                        </h5>
                        <p>inner | envelope</p>
                        <h5>
                            Additional Details
                        </h5>
                        <p>-list here-</p>
                        <h5>
                            Receival Method
                        </h5>
                        <p>Pickup/Delievery</p>

                    </div>
                    <div className='order-details-button-row'>
                        <button className='button'>View Invitation</button>
                        <button className='button'>View Order Changes</button>
                    </div>

                </div>
                <div className='payment-status-div'>
                    <div className='payment-details'>
                        <h1>Payment Details</h1>
                        <div className='white-inner-div1'>
                            <p>Number of Invites:</p>
                            <p>Amount per Invite:</p>
                            <p>VAT:</p>
                            <p>Additional Changes:</p>
                            <h5>TOTAL AMOUNT DUE:</h5>
                        </div>
                    </div>
                    <div className='order-status'>
                        <h1>Order Status</h1>
                        <div className='white-inner-div2'>
                            <h5>Invites Should Be Finished by:</h5>
                            <p>July xx, xxxx</p>
                            <ul className="timeline-order">
                                <li className='pending' status="Pending"></li>
                                <li status="Creating"></li>
                                <li status="Finalizing"></li>
                                <li status="Ready to Check"></li>
                                <li status="Ready to Claim!"></li>
                            </ul>
                            <button className='button'>Cancel Order</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetailsCustomer;