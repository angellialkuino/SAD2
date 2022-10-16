import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import './OrderBeingConfirmed.css';

function OrderBeingConfirmed() {
    const location = useLocation();
    const orderID = location.state;
    return (
        <div className='order-being-confirmed-frame'>
            <div className='order-being-confirmed-header'>
                <h1>Order payment is being confirmed!</h1>
                <h4>Thank you so much!</h4>
            </div>
            <div className='force-center-row'>
                <h4>ORDER ID: {orderID.slice(-4)}</h4>
                <h4>View Order on My Orders Tab</h4>
            </div>




            <div className='order-being-confirmed-footer'>
                <Link to="/customer/my-orders" className="rounded-pill btn btn-info fw-bold nav-hover">View My Orders</Link>
            </div>
        </div>
    );
}

export default OrderBeingConfirmed;