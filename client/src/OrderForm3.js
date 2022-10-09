import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './OrderForm3.css';

function OrderForm3() {
    return (
        <>
            <NavBar />

            <div className="Order_Form_5">
                <div className="Order_Form_5-container">
                    <div className="Order_Form_5-body">
                        <div className="Order_Form_5-pages">
                            <div className="Order_Form_5-pages-top">
                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>
                            </div>

                            <div className="Order_Form_5-pages-bottom">
                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>
                            </div>

                            <div className="Order_Form_5-pages-top">
                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>
                            </div>

                            <div className="Order_Form_5-pages-bottom">
                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>

                                <div className="Order_Form_5-page-example">
                                    <img src={process.env.PUBLIC_URL + '/images/sample2.jpg'} alt="Debut Invitation" />
                                    <h4 className="text-bg">Wedding Invitation</h4>
                                </div>
                            </div>
                        </div>

                        <div className="Order_Form_5-dropdown">
                            <p>Paper Type and Color: </p>
                            <select name="papers" id="papers">
                                <option value="1">Paper 1</option>
                                <option value="2">Paper 2</option>
                                <option value="3">Paper 3</option>
                                <option value="4">Paper 4</option>
                                <option value="5">Paper 5</option>
                                <option value="6">Paper 6</option>
                                <option value="7">Paper 7</option>
                                <option value="8">Paper 8</option>
                                <option value="9">Paper 9</option>
                                <option value="10">Paper 10</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="Order_Form_5-footer">
                    <Link to='/order-form-2' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/order-form-4' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </div>
        </>
    );
}

export default OrderForm3;