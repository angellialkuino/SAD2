import React from 'react';
import { Link } from 'react-router-dom';
import './OrderPickup.css';

function OrderPickup() {
    return (
        <div className='order-pickup-frame'>
            <div className='text'>
                <h2>Order Pickup</h2>
                <h5>You can pay at our location pinned below.</h5>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/map.jpg'} alt="Map" className='map-img' />
            <div className='map'>
                <h5>Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, Davao City, 8000 Davao del Sur</h5>
            </div>
            <div className='order-pickup-footer'>
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/shipping-address' className="rounded-pill btn btn-info fw-bold nav-hover">Proceed</Link>
            </div>
        </div>
    );
}

export default OrderPickup;