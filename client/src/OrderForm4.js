import { useState } from "react";
import { Link } from 'react-router-dom';
import "./OrderForm4.css";
import React from 'react';
import NavBarCustomerLoggedIn from "./NavBarCustomerLoggedIn";

function OrderForm4() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <NavBarCustomerLoggedIn />
            <div className='order-frame-4'>
                <h2>Running Price</h2>
                <div className='running-price-frame'>
                </div>
                <h2>Decor</h2>
                <div className="tab-container">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}>
                            Wax Seal
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>
                            Dried Flowers
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}>
                            Brooch
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}>
                            <h4>Designs:</h4>
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

                            </div>

                            <h4>Color:</h4>
                            <div className='boxes-4'>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}>
                            <h4>Designs:</h4>
                            <div className='boxes'>
                                <button className='square-button-4'></button>
                                <button className='square-button-4'> </button>
                                <button className='square-button-4'></button>
                                <button className='square-button-4'></button>
                                <button className='square-button-4'></button>

                            </div>
                            <h4>Color:</h4>
                            <div className='boxes-4'>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                            </div>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}>
                            <h4>Designs:</h4>
                            <div className='boxes'>
                                <button className='square-button-4'></button>
                                <button className='square-button-4'> </button>
                                <button className='square-button-4'></button>
                                <button className='square-button-4'></button>
                                <button className='square-button-4'></button>

                            </div>
                            <h4>Color:</h4>
                            <div className='boxes-4'>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                                <button className='small-square-button-4'></button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='total-footer'>
                    Total is subject to change <b>Total: Php</b>
                </span>
            </div>
            <div className='form1-footer'>
                <Link to='order-form-3' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </>
    );
}

export default OrderForm4;