import React, { useEffect, useRef, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './CheckOrder.css';
import { CheckOrderList } from './CheckOrderList';

function CheckOrder({ order, items_array, sumTotal }) {
    const navigate = useNavigate();

    useEffect(()=>{
        for (var key in order) {
            if(order[key] == ''|| order[key]== null){
                return navigate("/form/order-form-1");
            }
        }
    },[])

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
                <div className='check-order-frame p-4'>
                    <CheckOrderList
                        order={order}
                        items_array={items_array}
                        sumTotal={sumTotal}
                    />
                </div>
            </div>
            <div className="form1-footer">
                <Link to='/form/order-form-4' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/form/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </div>
    );
}

export default CheckOrder;