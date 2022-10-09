import React from 'react'
import { Link } from 'react-router-dom';

const OrderDetailsUpdate = () => {
    return ( //change the <p> to input tags :")"
        <>
            <div className='order-details-main'>
                <div className='order-div'>
                    <h1>ORDER #00000000X</h1>
                    <div className='white-inner-div1'>
                        <div>
                            <h5>
                                Date Ordered
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Invitation Type
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Motif/Theme
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Font Style
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Size of Card
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Urgency Level
                            </h5>
                            <input className='input-field'
                                type="text" />
                        </div>
                        <div><h5>
                            Date of Event
                        </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Invitation Title
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Content Link
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Type of Paper
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Additional Details
                            </h5>
                            <input className='input-field'
                                type="text" />
                            <h5>
                                Receival Method
                            </h5>
                            <input className='input-field'
                                type="text" /></div>


                    </div>
                    <div className='order-details-footer'>
                        <button className='rounded-pill btn btn-info fw-bold nav-hover'>Edit Details</button>
                        <Link to='/invitation-draft-staff' className="rounded-pill btn btn-info fw-bold nav-hover">View Invitation</Link>
                        <button className='rounded-pill btn btn-info fw-bold nav-hover'>Order Changes</button>
                    </div>

                </div>
                <div className='payment-status-div'>
                    <div className='payment-details'>
                        <h1>Payment Details</h1>
                        <div className='white-inner-div1'>
                            <input className='input-field'
                                type="text"
                                placeholder='Number of Invites:' />
                            <input className='input-field'
                                type="text"
                                placeholder='Amount per Invite:' />
                            <input className='input-field'
                                type="text"
                                placeholder='VAT:' />
                            <input className='input-field'
                                type="text"
                                placeholder='Additional Changes:' />
                            <h5>TOTAL AMOUNT DUE:</h5>
                        </div>
                        <button className='button'>Edit Details</button>

                    </div>
                    <div className='order-status'>
                        <h1>Order Status</h1>
                        <div className='white-inner-div2'>
                            <h5>Invites Should Be Finished by:</h5>
                            <input className='input-field'
                                type="text" />
                            <ul className="timeline-order">
                                <li className='pending' status="Pending"></li>
                                <li status="Creating"></li>
                                <li status="Finalizing"></li>
                                <li status="Ready to Check"></li>
                                <li status="Ready to Claim!"></li>
                            </ul>
                            <div className='order-status-button-row'>
                                <button className='button'>Update Status</button>
                                <button className='button'>Cancel Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default OrderDetailsUpdate;
