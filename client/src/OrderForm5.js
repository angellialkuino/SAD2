import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';
import './OrderForm5.css';

function OrderForm5() {
    return (
        <>
            <NavBarCustomerLoggedIn />
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
                        onChange={0}
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
                                <div className='grid-item'><input type="radio" name="receival" id="delivery" className='checkbox-circle' onClick={0} />Delivery</div>
                                <div className='grid-item'><input type="radio" name="receival" id="pickup" className='checkbox-circle' onClick={0} />Pickup at Store</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='form1-footer'>
                    <Link to='/order-form-4' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/check-order' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </div>
        </>
    );
}

export default OrderForm5;