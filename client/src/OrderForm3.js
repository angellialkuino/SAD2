import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';
import './OrderForm3.css';

function OrderForm3() {
    return (
        <>
            <NavBarCustomerLoggedIn />
            <form className='main-order-frame1'>
                <h3 className='category-h3'>Paper Type and Color</h3>
                <div className='boxes3'>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='celeste-blue' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7703.jpg'} alt="celeste blue"></img>
                        </label>
                        <h5>Celeste Blue</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='silver' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7704.jpg'} alt="silver"></img>
                        </label>
                        <h5>Silver</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='green' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7705.jpg'} alt="green"></img>
                        </label>
                        <h5>Green</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='royal-blue' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7706.jpg'} alt="royal blue"></img>
                        </label>
                        <h5>Royal Blue</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='denim-blue' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7707.jpg'} alt="denim-blue"></img>
                        </label>
                        <h5>Denim Blue</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='dark-grey' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7708.jpg'} alt="dark grey"></img>
                        </label>
                        <h5>Dark Grey</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='copper' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7709.jpg'} alt="copper"></img>
                        </label>
                        <h5>Copper</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='yellow-gold' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7710.jpg'} alt="yellow gold"></img>
                        </label>
                        <h5>Yellow Gold</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='purple' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7711.jpg'} alt="purple"></img>
                        </label>
                        <h5>Purple</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input type='radio' id='cream' name='color-type' className='form1-radio' onClick={0} />
                            <img className='radio-img' src={process.env.PUBLIC_URL + '/images/papers/IMG_7713.jpg'} alt="cream"></img>
                        </label>
                        <h5>Cream</h5>
                    </div>
                </div>

                <div className='form1-footer'>
                    <Link to='/order-form-2' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/order-form-4' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </form>
        </>
    );
}

export default OrderForm3;