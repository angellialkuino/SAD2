import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckOrder.css';
import { CheckOrderList } from './CheckOrderList';
import Axios from 'axios';

function CheckOrder({ orderItems, orderDetails, sumTotal }) {
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        <CheckOrderList
            orderDetails={orderDetails}
            orderItems={orderItems}
            sumTotal={sumTotal}
        />
    }, [orderItems, orderDetails, sumTotal]);

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/api/order/create-new-order',
                {
                    //how to properly pass them to backend?
                    orderItems,
                    orderDetails
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
            errRef.current.focus();
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
                        orderItems={orderItems}
                        orderDetails={orderDetails}
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