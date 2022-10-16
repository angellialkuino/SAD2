import React, {useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './OrderPickup.css';

function OrderPickup({order}) {
    const navigate = useNavigate();

    useEffect(() => {
        for (var key in order) {
            if(order[key] == ''|| order[key]== null){
                return navigate("/form/order-form-1");
            }
    }},[])

    return (
        <div className='order-pickup-frame'>
            <div className='text'>
                <h2>Order Pickup</h2>
                <h5>You can pay at our location pinned below.</h5>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/map.jpg'} alt="Map" className='map-img' />
            <div className='map'>
                <h5>Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, Davao City, 8000 Davao del Sur</h5>
                <div className='op-btn-footer'>
                    <Link to='/form/order-form-5' className="rounded-pill btn-op-back btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/form/downpayment' className="rounded-pill btn-op-proceed btn-info fw-bold nav-hover">Proceed</Link>
                </div>
            </div>
        </div>
    );
}

export default OrderPickup;