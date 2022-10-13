import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckOrder.css';
import { CheckOrderList } from './CheckOrderList';

function CheckOrder({ order, items_array, sumTotal }) {
    useEffect(() => {
        <CheckOrderList
            items_array={items_array}
            order={order}
            sumTotal={sumTotal}
        />
    }, [order, items_array, sumTotal]);

    return (
        <div className="Check_Order">
            <div className="Check_Order-container">
                <div className="Check_Order-header">
                    <h3>Please Check Your Order</h3>
                </div>

                <div className="Check_Order_body">
                    <CheckOrderList
                        order={order}
                        items_array={items_array}
                        sumTotal={sumTotal}
                    />
                </div>
            </div>
            <div className="form1-footer">
                <Link to='/order-form-4' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </div>
    );
}

export default CheckOrder;