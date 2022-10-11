import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm2.css';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';
import { RunningPrice } from './RunningPrice';
import OrderForm3 from './OrderForm3';

function OrderForm2({ sumTotal, setOrderItems, orderItems, orderDetails, setOrderDetails }) {
    const [checked, setChecked] = useState(false);
    const [allTextChecked, setAllTextChecked] = useState(false);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        <RunningPrice orderDetails={orderDetails} />

        sumTotal.current = 0;
        orderDetails.forEach(element => {
            if ('price' in element) {
                sumTotal.current += element.price;
            }
        });
        sumTotal.current += orderItems.material_price;
        // console.log(orderDetails);
    }, [orderDetails]);

    const handlePagesPaperAndColor = (e) => {
        setOrderDetails(orderDetails.map(obj => {
            if (obj.item_id === 'm1') {
                return {
                    ...obj,
                    color: e.target.value
                };
            }
            return obj;

        }));
        orderDetails.some(element => {
            if (element.color === 'Customize') {
                setHidden(s => !s)
            }
        });
    }

    const handlePagesSize = (e) => {
        setOrderDetails(orderDetails.map(obj => {
            if (obj.item_id === 'm1') {
                return {
                    ...obj,
                    size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value)
                };
            }
            return obj;
        }));
    }

    const handleEnvelopePaperAndColor = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'e1') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'e1',
                    item_name: 'envelope',
                    color: e.target.value
                }]);;
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'e1') {
                    return {
                        ...obj,
                        color: e.target.value
                    };
                }
                return obj;
            }));
        }
        orderDetails.some(element => {
            if (element.color === 'Customize') {
                setHidden(s => !s)
            }
        });
    }

    const handleEnvelopeSize = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'e1') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'e1',
                    item_name: 'envelope',
                    size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'e1') {
                    return {
                        ...obj,
                        size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            }));
        }
    }

    const handleEnvelope = (e) => {
        setChecked(e.target.checked);
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e1' && item.item_id !== 'e2' && item.item_id !== 'e3';
                }),
            );
        }
    }

    const handleEnvelopeLiner = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'e2') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'e2',
                    item_name: 'envelope liner',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e2';
                }),
            );
        }
    }

    const handleEnvelopeLock = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'e3') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'e3',
                    item_name: 'envelope lock',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e3';
                }),
            );
        }
    }

    const handleAllText = (e) => {
        setAllTextChecked(e.target.checked);
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 't4';
                }),
            );
        }
        else {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 't4',
                    item_name: 'dry emboss',
                    type: 'all text',
                    price: parseFloat(e.target.value)
                }]);
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.type !== 'header' && item.type !== 'body';
                }),
            );
        }
    }

    const handleHeaderText = (e) => {
        if (orderDetails.findIndex(object => object.type === 'header') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                    type: 'header',
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.type === 'header') {
                    return {
                        ...obj,
                        item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            }));
        }
    }

    const handleBodyText = (e) => {
        if (orderDetails.findIndex(object => object.type === 'body') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                    type: 'body',
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.type === 'body') {
                    return {
                        ...obj,
                        item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            }));
        }
    }

    const handleRSVP = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'p1') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'p1',
                    item_name: 'RSVP',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'p1';
                }),
            );
        }
    }

    const handleMonetaryGiftPackage = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'p2') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'p2',
                    item_name: 'monetary gift package',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'p2';
                }),
            );
        }
    }

    const handleHisHerVows = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'p3') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'p3',
                    item_name: 'his/her vows',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'p3';
                }),
            );
        }
    }

    const handleCover = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'co1') === -1
            && orderDetails.findIndex(object => object.item_id === 'co2') === -1
            && orderDetails.findIndex(object => object.item_id === 'co3') === -1
            && orderDetails.findIndex(object => object.item_id === 'co4') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setOrderDetails(orderDetails.map(obj => {
                if (obj.item_id === 'co1'
                    || obj.item_id === 'co2'
                    || obj.item_id === 'co3'
                    || obj.item_id === 'co4') {
                    return {
                        ...obj,
                        item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            }));
        }
    }

    const handleMenuCards = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'ca1') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'ca1',
                    item_name: 'menu cards',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'ca1';
                }),
            );
        }
    }

    const handleSeatCards = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'ca2') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'ca2',
                    item_name: 'seat cards',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'ca2';
                }),
            );
        }
    }

    const handleTableCards = (e) => {
        if (orderDetails.findIndex(object => object.item_id === 'ca3') === -1) {
            setOrderDetails(prevState =>
                [...prevState, {
                    item_id: 'ca3',
                    item_name: 'table cards',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setOrderDetails(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'ca3';
                }),
            );
        }
    }

    return (
        <>
            <NavBarCustomerLoggedIn />
            <div className='order-frame-2'>
                <h2>Running Price</h2>
                <div className='running-price-frame p-4'>
                    <RunningPrice
                        orderItems={orderItems}
                        orderDetails={orderDetails} />

                </div>

                <div className='row-group mt-5'>
                    <div className="number-circle">1</div>
                    <h3>Details of the Invite</h3>
                </div>

                <div className='grid-container'>
                    <div className='grid-item'></div>
                    <div className='grid-item'><h5>Paper Type and Color</h5></div>
                    <div className='grid-item'><h5>Sizes</h5></div>
                    <div className='grid-item'><input type="checkbox" value="pages" className='checkbox-circle0' />Pages</div>
                    <div className='grid-item'>
                        <select name="pages" id="pages-select" required onChange={handlePagesPaperAndColor}>
                            <option value="Let Crafters Haven handle it!">Let Crafters Haven handle it!</option>
                            <option value="Customize">Customize</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <div className='grid-item'>
                            <select name="pages" id="pages-select" onChange={handlePagesSize}>
                                <option id="4.75 x 5.75 in" value="30">4.75 x 5.75 in</option>
                                <option id="5.75 x 7.75 in" value="30">5.75 x 7.75 in</option>
                                <option id="6.75 x 8.75 in" value="40">6.75 x 8.75 in</option>
                            </select>
                        </div></div>

                    <div className='grid-item'><input type="checkbox" value="envelope" className='checkbox-circle'
                        onChange={handleEnvelope} /> Envelope</div>
                    <div className='grid-item'>
                        <select name="envelope" id="envelope-select" onChange={handleEnvelopePaperAndColor} disabled={!checked}>
                            <option value="Let Crafters Haven handle it!">Let Crafters Haven handle it!</option>
                            <option value="Customize">Customize</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <select name="envelope" id="envelope-select" onChange={handleEnvelopeSize} disabled={!checked}>
                            <option id="6 x 8 in" value='30'>6 x 8 in</option>
                        </select>
                    </div>
                </div>
                <div className='row-group'>
                    <input type="checkbox" value="10" className='checkbox-circle' onClick={handleEnvelopeLiner} disabled={!checked} />Envelope Liner
                    <input type="checkbox" value="5" className='checkbox-circle' onClick={handleEnvelopeLock} disabled={!checked} />Envelope Lock
                </div>
                {!hidden ? <OrderForm3
                    orderItems={orderItems}
                    setOrderItems={setOrderItems}
                    orderDetails={orderDetails}
                    setOrderDetails={setOrderDetails}
                /> : null}

                <div className='row-group mt-5'>
                    <div className="number-circle">2</div>
                    <h3>Text Decor</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><h5>All Text</h5></div>
                    <div className='grid-item'><h5>Header Text</h5></div>
                    <div className='grid-item'><h5>Body Text</h5></div>
                    <div className='grid-item'><input type="checkbox" value="20" name='all-text' className='checkbox-circle' onClick={handleAllText} />Dry Emboss</div>
                    <div className='grid-item'>
                        <select name="header-text" id="header-select" onChange={handleHeaderText} disabled={allTextChecked}>
                            <option id="t1" title="header plain print" value="30">Plain Print</option>
                            <option id="t2" title="header foil print" value="40">Foil Print</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <select name="body-text" id="body-select" onChange={handleBodyText} disabled={allTextChecked}>
                            <option id="t1" title="body plain print" value="30">Plain Print</option>
                            <option id="t3" title="body foil print" value="60">Foil Print</option>
                        </select>
                    </div>
                </div>

                <div className='row-group mt-5'>
                    <div className="number-circle">3</div>
                    <h3>Other Pages</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="checkbox" id="rsvp" value="20" name='other-pages' className='checkbox-circle' onClick={handleRSVP} />RSVP</div>
                    <div className='grid-item'><input type="checkbox" id="monetary-gift-page" value="20" name='other-pages' className='checkbox-circle' onClick={handleMonetaryGiftPackage} />Monetary Gift Page</div>
                    <div className='grid-item'><input type="checkbox" id="vows" value="80" name='other-pages' className='checkbox-circle' onClick={handleHisHerVows} />His/Her Vows</div>
                </div>

                <div className='row-group mt-5'>
                    <div className="number-circle">4</div>
                    <h3>Cover</h3>
                </div>
                <div className='grid-item'>
                    <select name="cover" id="cover-select" onChange={handleCover}>
                        <option id="co1" title='translucent cover' value="60">Translucent</option>
                        <option id="co2" title='trifold cover' value="60">Trifold</option>
                        <option id="co3" title='cover with print' value="120">Printed</option>
                        <option id="co4" title='lasercut cover' value="60">Lasercut</option>
                    </select>
                </div>
                <div className='row-group mt-5'>
                    <div className="number-circle">5</div>
                    <h3>Cards</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="checkbox" id="menu" value="20" name='cards' className='checkbox-circle' onClick={handleMenuCards} />Menu Cards</div>
                    <div className='grid-item'><input type="checkbox" id="seat" value="20" name='cards' className='checkbox-circle' onClick={handleSeatCards} />Seat Cards</div>
                    <div className='grid-item'><input type="checkbox" id="table" value="20" name='cards' className='checkbox-circle' onClick={handleTableCards} />Table Cards</div>
                </div>
                <span className='total-footer'>
                    Total is subject to change <b>Total: {sumTotal.current} Php</b>
                </span>
                <div className='form1-footer'>
                    <Link to='/order-form-1' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/order-form-3' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </div>
        </>
    );
}

export default OrderForm2;