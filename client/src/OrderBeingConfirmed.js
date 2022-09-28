import React from 'react';
import { Link } from 'react-router-dom';
import './OrderBeingConfirmed.css';

function OrderBeingConfirmed() {
    return (
        <div className='order-being-confirmed-frame'>
            <div className='order-being-confirmed-header'>
                <h1>Order payment is being confirmed!</h1>
                <p>Thank you so much!</p>
            </div>
            <ul className="timeline">
                <li className='pending' status="Pending"></li>
                <li status="Creating"></li>
                <li status="Finalizing"></li>
                <li status="Ready to Check"></li>
                <li status="Ready to Claim!"></li>
            </ul>
            <div className='force-center-row'>
                <p>ORDER NUMBER: XXXXXXXXX</p>
                <p>Estimate Date Finished: MM d, yyyy</p>
            </div>




            <div className='order-being-confirmed-footer'>
                <Link to="/" className="rounded-pill btn btn-info fw-bold nav-hover">Close</Link>
            </div>
        </div>
    );
}

export default OrderBeingConfirmed;