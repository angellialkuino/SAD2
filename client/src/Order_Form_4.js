import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Order_Form_4.css";
import React from 'react';

function Order_Form_4() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
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
                            <div className='boxes'>
                                <button className='square-button-4'>NO WAX SEAL</button>
                                <button className='square-button-4'> LET CRAFTER'S HAVEN HANDLE IT</button>
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
                <span className='total-footer-4'>
                    Total is subject to change <b>Total: Php</b>
                </span>
            </div>
            <div className='form1-footer'>
                <Link to='order-form-3' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </div>
    );
}

export default Order_Form_4;