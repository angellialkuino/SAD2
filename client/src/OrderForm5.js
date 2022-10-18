import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OrderForm5.css';

function OrderForm5({ order, setOrder, items_array }) {
    const [receivalLink, setReceivalLink] = useState('')
    const navigate = useNavigate();
    const [isIncomplete, setIsIncomplete] = useState(true)

    useEffect(() => {
        setOrder((prevState) => {
            return {
                ...prevState,
                order_deadline: localStorage.getItem("deadlineInput"),
                claim_type: localStorage.getItem("claimInput")
            };
        });
    }, []);

    useEffect(() => {
        for (var key in order) {
            if (order[key] == '' || order[key] == null) {
                return navigate("/form/order-form-1");
            }
        }
    }, [])

    useEffect(() => {
        console.log(order);
        // console.log(items_array);
        if (order.hasOwnProperty('claim_type') && order.hasOwnProperty('order_deadline')) {
            setIsIncomplete(false);
        }
        else {
            setIsIncomplete(true);
        }
        console.log(isIncomplete);
    }, [order, items_array, receivalLink]);

    const handleDeadline = (e) => {
        setOrder((prevState) => {
            return {
                ...prevState,
                order_deadline: e.target.value
            };
        });
        localStorage.setItem("deadlineInput", e.target.value);
    }
    const handleClaim = (e) => {
        setOrder((prevState) => {
            return {
                ...prevState,
                claim_type: e.target.id
            };
        });
        if (e.target.id === 'pickup') {
            setReceivalLink('/form/order-pickup');
        }
        else if (e.target.id === 'delivery') {
            setReceivalLink('/form/shipping-address');
        }
        console.log(receivalLink);
        localStorage.setItem("claimInput", e.target.id);
    }

    const handleNext = (e) => {
        if (isIncomplete === true) {
            window.alert('Incomplete form fields')
            e.preventDefault();
        }
    }

    return (
        <>
            <div className="order-frame-2">
                <div className='row-group mt-5'>
                    <div className="number-circle">6</div>
                    <h3>Tell us when the order should be finished.</h3>
                </div>

                <div className='label-textfield'>
                    <input
                        value={order.order_deadline}
                        type='date'
                        id="order-finish"
                        autoComplete="off"
                        onChange={handleDeadline}
                        required
                        className='profile-textfield' />
                </div>

                <div className="Order_Form_7-tac">
                    <p> *Do note we ask an additional 40% of your total order on rush orders (if your order is needed in less than 14 working days).</p>
                </div>
                <div className='row-group mt-5'>
                    <div className="number-circle">7</div>
                    <h3>How would you like to receive your order?</h3>
                </div>

                <div className="Order_Form_7-checkboxes">
                    <div className="Order_Form_7-checkbox">
                        <form>
                            <div className='grid-container'>
                                <div className='grid-item'>
                                    <input type="radio" checked={order.claim_type === 'delivery' ? true : false} name="receival" id="delivery" className='checkbox-circle' required onClick={handleClaim}
                                    />Delivery
                                </div>
                                <div className='grid-item'>
                                    <input type="radio" checked={order.claim_type === 'pickup' ? true : false} name="receival" id="pickup" className='checkbox-circle' onClick={handleClaim}
                                    />Pickup at Store
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='form1-footer'>
                    <Link to='/form/check-order' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to={receivalLink} onClick={handleNext} className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </div>
        </>
    );
}

export default OrderForm5;