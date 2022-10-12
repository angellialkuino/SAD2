import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckOrder.css';
import { CheckOrderList } from './CheckOrderList';
import Axios from 'axios';

function CheckOrder({ order, items_array, sumTotal, payment_method }) {
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        <CheckOrderList
            items_array={items_array}
            order={order}
            sumTotal={sumTotal}
        />
    }, [order, items_array, sumTotal]);

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/api/order/create-new-order',
                {
                    payment_method,
                    order,
                    items_array
                },
                {
                    withCredentials: true
                }
            );
            console.log(response)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Submitted Already');
            } else {
                setErrMsg('Submission Failed')
            }
            // errRef.current.focus();
        }
    }

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
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/order-pickup' onClick={handleSubmitOrder} className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </div>
    );
}

export default CheckOrder;