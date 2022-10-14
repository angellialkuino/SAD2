import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./OrderForm4.css";
import React from 'react';
import { RunningPrice } from "./RunningPrice";

function OrderForm4({ order, items_array, setItems_array, sumTotal, setSumTotal }) {

    const [toggleState, setToggleState] = useState(1);
    let tempSum=0;

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        //sumTotal.current = 0;
        items_array.forEach(element => {
            if ('price' in element) {
                //sumTotal.current += element.price;
                tempSum += (('quantity' in element) ? element.price*element.quantity : element.price);

            }
        });
        //sumTotal.current += order.material_price;
        setSumTotal(tempSum);
        
        // console.log(order);
        // console.log(items_array);
    }, [items_array, order]);

    const handleWaxDesign = (e) => {
        if (items_array.findIndex(object => object.item_id === 'd1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'd1',
                    item_name: e.target.id,
                    price: 15
                }]);
        }
        else if (e.target.id === 'no wax') {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd1';
                }),
            );
        }
        else {
            setItems_array(items_array.map(obj => {
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
        if (items_array.findIndex(object => object.item_id === 'd1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'd1',
                    color: e.target.id,
                    price: 15
                }]);
        }
        else if (e.target.id === 'no wax') {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd1';
                }),
            );
        }
        else {
            setItems_array(items_array.map(obj => {
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
        if (items_array.findIndex(object => object.item_id === 'd2') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'd2',
                    item_name: e.target.id,
                    price: 40
                }]);
        }
        else if (e.target.id === 'no flower') {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd2';
                }),
            );
        }
        else {
            setItems_array(items_array.map(obj => {
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
        if (items_array.findIndex(object => object.item_id === 'd3') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'd3',
                    item_name: e.target.id,
                    price: 50
                }]);
        }
        else if (e.target.id === 'no brooch') {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'd3';
                }),
            );
        }
        else {
            setItems_array(items_array.map(obj => {
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
            <div className='order-frame-4'>
                <h2>Running Price</h2>
                <div>
                    <RunningPrice
                        order={order}
                        items_array={items_array} />

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
                                        <input type='radio' id='no wax' name='wax-design' className='form1-radio' required onClick={handleWaxDesign} />
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
                                        <input type='radio' id='no flower' name='flower' className='form1-radio' required onClick={handleDriedFlower} />
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
                                        <input type='radio' id='no brooch' name='wax-design' className='form1-radio' required onClick={handleBroochDesign} />
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
                    Total is subject to change <b>Total: {sumTotal}Php</b>
                </span>
            </div>
            <div className='form1-footer'>
                <Link to='/form/order-form-2' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                <Link to='/form/check-order' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
            </div>
        </>
    );
}

export default OrderForm4;