import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Downpayment.css';
import Axios from 'axios';

function Downpayment({ order, items_array, payment_method, setPayment_method, sumTotal }) {
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const additionalFees = useRef();

    useEffect(() => {
        if (order.num_of_invites < 30) {
            additionalFees.current += 1500;
            sumTotal.current += 1500;
            let date1 = new Date().toJSON().slice(0, 10);
            let date2 = order.event_date;
            const date1new = new Date(date1);
            const date2new = new Date(date2);
            let Difference_In_Time = date2new.getTime() - date1new.getTime();
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (Difference_In_Days < 14) {
                sumTotal.current += sumTotal.current * 0.40;
                additionalFees.current += additionalFees.current * 0.40;
            }
        }
        else {
            let date1 = new Date().toJSON().slice(0, 10);
            let date2 = order.event_date;
            const date1new = new Date(date1);
            const date2new = new Date(date2);
            let Difference_In_Time = date2new.getTime() - date1new.getTime();
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (Difference_In_Days < 14) {
                sumTotal.current += sumTotal.current * 0.40;
                additionalFees.current += additionalFees.current * 0.40;
            }
        }

        console.log(order);
        console.log(items_array);
    }, []);

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

    const handlePayment = (e) => {
        setPayment_method(e.target.id);
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
                        <p>Unit Cost: </p>
                        <p>Number of Invites: {order.num_of_invites} </p>
                        <p>Additional Fees: {additionalFees.current} </p>
                        <p>Subtotal: {sumTotal.current}</p>
                        <p>Payment Method: {payment_method} </p>
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
                                <div className='grid-item'><input type="radio" name="payment" id="over the counter" className='checkbox-circle' required onClick={handlePayment} />Over the counter</div>
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