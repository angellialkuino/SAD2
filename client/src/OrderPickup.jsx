import React, { Component } from 'react';
import './OrderPickup.css';

class OrderPickup extends Component {
    render() {
        return (
            <div className='order-pickup-frame'>
                <div className='text'>
                    <h2>Order Pickup</h2>
                    <h5>You can pay at our location pinned below.</h5>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/map.jpg'} alt="Map" className='map img' />
                <div className='map'>
                    <h5>Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, Davao City, 8000 Davao del Sur</h5>
                </div>
                <div className='footer'>
                    <button className='text-button'>Back</button>
                    <button className='button'>Proceed</button>
                </div>
            </div>
        );
    }
}

export default OrderPickup;