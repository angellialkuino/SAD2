import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CheckOrder.css';
import { CheckOrderList } from './CheckOrderList';

function CheckOrder({ orderItems, orderDetails, sumTotal }) {
    useEffect(() => {
        <CheckOrderList
            orderDetails={orderDetails}
            orderItems={orderItems}
            sumTotal={sumTotal}
        />

        console.log('opened component')
    }, [orderItems, orderDetails, sumTotal]);

    return (
        <div className="Check_Order">
            <div className="Check_Order-container">
                <div className="Check_Order-header">
                    <h3>Please Check Your Order</h3>
                </div>

                <div className="Check_Order_body">
                    <CheckOrderList
                        orderItems={orderItems}
                        orderDetails={orderDetails}
                        sumTotal={sumTotal}
                    />
                </div>
            </div>
            <div className="form1-footer">
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/order-pickup' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </div>
    );
}

export default CheckOrder;