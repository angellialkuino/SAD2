import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Downpayment.css';
import Axios from 'axios';

function Downpayment({ orderItems, setOrderItems, orderDetails, setOrderDetails }) {
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

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
            setOrderItems('');
            setOrderDetails('');

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

    const handlePayment = (e) => {
        setOrderItems((prevState) => {
            return {
                ...prevState,
                payment_method: e.target.id
            };
        });
    }

    return (
        <>
            <div className="order_form_10-container">
                <div className="order_form_10-content">
                    <div className="order_form_10-content-left">
                        <div className="order_form_10-header">
                            <h3>Please Pay The <br /> 50% Down Payment</h3>
                        </div>

                        <p> Payment can be done via: </p>
                        <p> <b>Over the counter at Crafter’s Heaven located at:</b><br />
                            Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, <br />
                            Davao City, 8000 Davao del Sur</p>
                        <p> <b>GCash</b> <br />
                            Number: 09078216011 <br />
                            Recipient: Angelli Kezzed M. Alkuino</p>
                    </div>

                    <div className="order_form_10-content-right">
                        <p>ORDER NUMBER: </p>
                        <p>Name: </p>
                        <p>Contact Number: </p>
                        <p>Address: </p>
                        <p>Payment Method: </p>
                        <p>Amount per Set: </p>
                        <b>TOTAL AMOUNT DUE</b>
                    </div>
                </div>
                <div className='row-group mt-5'>
                    <div className="number-circle">8</div>
                    <h3>Pick your payment method</h3>
                </div>
                <div className="Order_Form_7-checkboxes">
                    <div className="Order_Form_7-checkbox">
                        <form>
                            <div className='grid-container'>
                                <div className='grid-item'><input type="radio" name="payment" id="over the counter" className='checkbox-circle' onClick={handlePayment} />Over the counter</div>
                                <div className='grid-item'><input type="radio" name="payment" id="bank" className='checkbox-circle' onClick={handlePayment} />Bank</div>
                                <div className='grid-item'><input type="radio" name="payment" id="gcash" className='checkbox-circle' onClick={handlePayment} />GCash</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="form1-footer">
                    <Link to='/shipping-address' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/order-payment' className="rounded-pill btn btn-info fw-bold nav-hover" onClick={handleSubmitOrder}>Next</Link>
                </div>
            </div>
        </>
    );
}

export default Downpayment;