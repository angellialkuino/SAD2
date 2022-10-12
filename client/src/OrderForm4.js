import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./OrderForm4.css";
import React from 'react';
import NavBarCustomerLoggedIn from "./NavBarCustomerLoggedIn";
import { RunningPrice } from "./RunningPrice";

function OrderForm4({ orderItems, orderDetails, setOrderDetails, sumTotal }) {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        sumTotal.current = 0;
        orderDetails.forEach(element => {
            if ('price' in element) {
                sumTotal.current += element.price;
            }
        });
        sumTotal.current += orderItems.order.material_price;
        if (orderItems.order.num_of_invites < 30) {
            sumTotal.current += 1500;
            let date1 = new Date().toJSON().slice(0, 10);
            let date2 = orderItems.order.event_date;
            const date1new = new Date(date1);
            const date2new = new Date(date2);
            let Difference_In_Time = date2new.getTime() - date1new.getTime();
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (Difference_In_Days < 14) {
                sumTotal.current += sumTotal.current * 0.40;
            }
        }
        console.log(orderItems);
        console.log(orderDetails);
    }, [orderDetails]);

    const handleWaxDesign = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'd1') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'd1',
                    item_name: e.target.id,
                    price: 15
                }]);
        }
        else if (e.target.id === 'no wax') {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd1';
                }),
            );
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'd1') {
                    return {
                        ...obj,
                        item_name: e.target.id
                    };
                }
                return obj;

            }));
        }
    }

    const handleWaxColor = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'd1') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'd1',
                    color: e.target.id,
                    price: 15
                }]);
        }
        else if (e.target.id === 'no wax') {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd1';
                }),
            );
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'd1') {
                    return {
                        ...obj,
                        color: e.target.id
                    };
                }
                return obj;

            }));
        }
    }

    const handleDriedFlower = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'd2') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'd2',
                    item_name: e.target.id,
                    price: 40
                }]);
        }
        else if (e.target.id === 'no flower') {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd2';
                }),
            );
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'd2') {
                    return {
                        ...obj,
                        item_name: e.target.id
                    };
                }
                return obj;

            }));
        }
    }

    const handleBroochDesign = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'd3') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'd3',
                    item_name: e.target.id,
                    price: 50
                }]);
        }
        else if (e.target.id === 'no brooch') {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd3';
                }),
            );
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'd3') {
                    return {
                        ...obj,
                        item_name: e.target.id
                    };
                }
                return obj;

            }));
        }
    }

    return (
        <>
            <NavBarCustomerLoggedIn />
            <div className='order-frame-4'>
                <h2>Running Price</h2>
                <div className='running-price-frame p-4'>
                    <RunningPrice
                        orderItems={orderItems}
                        orderDetails={orderDetails} />

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
                                        <input type='radio' id='no wax' name='wax-design' className='form1-radio' onClick={handleWaxDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/xmark.jpg'} alt='wax'></img>
                                    </label>
                                    <h5>No Wax</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='wax no.1' name='wax-design' className='form1-radio' onClick={handleWaxDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/waxes/IMG_7812.jpg'} alt='wax'></img>
                                    </label>
                                    <h5>1</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='wax no.2' name='wax-design' className='form1-radio' onClick={handleWaxDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/waxes/IMG_7813.jpg'} alt='wax'></img>
                                    </label>
                                    <h5>2</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='wax no.3' name='wax-design' className='form1-radio' onClick={handleWaxDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/waxes/IMG_7814.jpg'} alt='wax'></img>
                                    </label>
                                    <h5>3</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='wax no.4' name='wax-design' className='form1-radio' onClick={handleWaxDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/waxes/IMG_7815.jpg'} alt='wax'></img>
                                    </label>
                                    <h5>4</h5>
                                </div>
                            </div>

                            <h4>Color:</h4>
                            <div className='boxes-4'>
                                <label>
                                    <input type='radio' id='copper' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/2.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='royal blue' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/b.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='green' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/e.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='pink' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/g2.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='silver' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/h.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='olive green' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/l.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='sky blue' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/m2.jpg'} alt='wax color'></img>
                                </label>
                                <label>
                                    <input type='radio' id='violet' name='wax-color' className='form1-radio' onClick={handleWaxColor} />
                                    <img className='radio-img4' src={process.env.PUBLIC_URL + '/images/waxes/colors/z.jpg'} alt='wax color'></img>
                                </label>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}>
                            <h4>Designs:</h4>
                            <div className='boxes3'>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='no flower' name='flower' className='form1-radio' onClick={handleDriedFlower} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/xmark.jpg'} alt='flower'></img>
                                    </label>
                                    <h5>No Flower</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='small flower' name='flower' className='form1-radio' onClick={handleDriedFlower} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/flowers/small.jpg'} alt='flower'></img>
                                    </label>
                                    <h5>Small Flower</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='regular flower' name='flower' className='form1-radio' onClick={handleDriedFlower} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/flowers/regular.jpg'} alt='flower'></img>
                                    </label>
                                    <h5>Regular Flower</h5>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}>
                            <h4>Designs:</h4>
                            <div className='boxes3'>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='no brooch' name='wax-design' className='form1-radio' onClick={handleBroochDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/xmark.jpg'} alt='brooch'></img>
                                    </label>
                                    <h5>No Brooch</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='brooch no.1' name='wax-design' className='form1-radio' onClick={handleBroochDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/brooches/3000.jpg'} alt='brooch'></img>
                                    </label>
                                    <h5>1</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='brooch no.2' name='wax-design' className='form1-radio' onClick={handleBroochDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/brooches/3001.jpg'} alt='brooch'></img>
                                    </label>
                                    <h5>2</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='brooch no.3' name='wax-design' className='form1-radio' onClick={handleBroochDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/brooches/3002.jpg'} alt='brooch'></img>
                                    </label>
                                    <h5>3</h5>
                                </div>
                                <div className='square-button-with-text'>
                                    <label>
                                        <input type='radio' id='brooch no.4' name='wax-design' className='form1-radio' onClick={handleBroochDesign} />
                                        <img className='radio-img' src={process.env.PUBLIC_URL + '/images/brooches/3003.jpg'} alt='brooch'></img>
                                    </label>
                                    <h5>4</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='total-footer'>
                    Total is subject to change <b>Total: {sumTotal.current}Php</b>
                </span>
            </div>
            <div className='form1-footer'>
                <Link to='order-form-2' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </>
    );
}

export default OrderForm4;