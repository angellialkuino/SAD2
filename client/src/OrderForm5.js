import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './OrderForm5.css';

function OrderForm5({ order, setOrder, items_array, receivalLink, setReceivalLink }) {
    const navigate =useNavigate();
    const [isIncomplete, setIsIncomplete] = useState('')
    useEffect(() => {
        // console.log(order);
        // console.log(items_array);
        if (order.claim_type === '' || order.order_deadline === '') {
            setIsIncomplete(true);
        }
        else if (order.claim_type !== '' || order.order_deadline !== '') {
            setIsIncomplete(false);
        }
    }, [order, items_array, receivalLink]);

    const handleDeadline = (e) => {
        setOrder((prevState) => {
            return {
                ...prevState,
                order_deadline: e.target.value
            };
        });
    }
    const handleClaim = (e) => {
        setOrder((prevState) => {
            return {
                ...prevState,
                claim_type: e.target.id
            };
        });
    }

    const handleNext = (e) => {
        if (isIncomplete === true) {
            window.alert('Incomplete form fields')
            e.preventDefault();
        }
        else if (order.claim_type == 'pickup') {
            navigate('/form/order-pickup')
        }
        else if (order.claim_type == 'delivery') {
            navigate('/form/shipping-address')
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
                                <div className='grid-item'><input type="radio" name="receival" id="delivery" className='checkbox-circle' required onClick={handleClaim} />Delivery</div>
                                <div className='grid-item'><input type="radio" name="receival" id="pickup" className='checkbox-circle' onClick={handleClaim} />Pickup at Store</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='form1-footer'>
                    <Link to='/form/check-order' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <button onClick={handleNext} className="rounded-pill btn btn-info fw-bold nav-hover">Next</button>
                </div>
            </div>
        </>
    );
}

export default OrderForm5;