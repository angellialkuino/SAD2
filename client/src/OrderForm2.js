import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm2.css';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';
import { RunningPrice } from './RunningPrice';
import OrderForm3 from './OrderForm3';

function OrderForm2({ sumTotal, setOrder, order, items_array, setItems_array }) {
    const [checked, setChecked] = useState(false);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        <RunningPrice items_array={items_array} />
        sumTotal.current = 0;
        items_array.forEach(element => {
            if ('price' in element) {
                sumTotal.current += element.price;
            }
        });
        sumTotal.current += order.material_price;
        if (order.num_of_invites < 30) {
            sumTotal.current += 1500;
            let date1 = new Date().toJSON().slice(0, 10);
            let date2 = order.event_date;
            const date1new = new Date(date1);
            const date2new = new Date(date2);
            let Difference_In_Time = date2new.getTime() - date1new.getTime();
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (Difference_In_Days < 14) {
                sumTotal.current += sumTotal.current * 0.40;
            }
        }

        console.log(order);
        console.log(items_array);
    }, [items_array, sumTotal]);

    const handlePagesPaperAndColor = (e) => {
        setItems_array(items_array.map(obj => {
            if (obj.item_id === 'm1') {
                return {
                    ...obj,
                    color: e.target.value
                };
            }
            return obj;
        }));
        items_array.some(element => {
            if (element.color === 'Customize') {
                setHidden(s => !s)
            }
        });
    }

    const handlePagesSize = (e) => {
        if (order.material === 'acrylic') {
            setItems_array(items_array.map(obj => {
                if (obj.item_id === 'm1') {
                    return {
                        ...obj,
                        size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        quantity: 3,
                        price: 90
                    };
                }
                return obj;
            }));
        }
        else {
            setItems_array(items_array.map(obj => {
                if (obj.item_id === 'm1') {
                    return {
                        ...obj,
                        size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        quantity: 2,
                        price: 60
                    };
                }
                return obj;
            }));
        }

    }

    const handleEnvelopePaperAndColor = (e) => {
        if (items_array.findIndex(object => object.item_id === 'e1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e1',
                    item_name: 'envelope',
                    color: e.target.value
                }]);;
        }
        else {
            setItems_array(items_array.map(obj => {
                if (obj.item_id === 'e1') {
                    return {
                        ...obj,
                        color: e.target.value
                    };
                }
                return obj;
            }));
        }
        items_array.some(element => {
            if (element.color === 'Customize') {
                setHidden(s => !s)
            }
        });
    }

    const handleEnvelopeSize = (e) => {
        if (items_array.findIndex(object => object.item_id === 'e1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e1',
                    item_name: 'envelope',
                    size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setItems_array(items_array.map(obj => {
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
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e1' && item.item_id !== 'e2' && item.item_id !== 'e3';
                }),
            );
        }
    }

    const handleEnvelopeLiner = (e) => {
        if (items_array.findIndex(object => object.item_id === 'e2') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e2',
                    item_name: 'envelope liner',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e2';
                }),
            );
        }
    }

    const handleEnvelopeLock = (e) => {
        if (items_array.findIndex(object => object.item_id === 'e3') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e3',
                    item_name: 'envelope lock',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e3';
                }),
            );
        }
    }

    const handleAllText = (e) => {
        if (items_array.findIndex(object => object.type === 'all text') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: e.target.id,
                    item_name: e.target.title,
                    type: 'all text',
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setItems_array(items_array.map(obj => {
                if (obj.type === 'all text') {
                    return {
                        ...obj,
                        item_id: e.target.id,
                        item_name: e.target.title,
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            }));
        }
    }

    const handleHeaderText = (e) => {
        if (items_array.findIndex(object => object.type === 'header text') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: e.target.id,
                    item_name: e.target.title,
                    type: 'header text',
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setItems_array(items_array.map(obj => {
                if (obj.type === 'header text') {
                    return {
                        ...obj,
                        item_id: e.target.id,
                        item_name: e.target.name,
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            }));
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.type !== 'header text';
                }),
            );
        }
    }

    const handleRSVP = (e) => {
        if (items_array.findIndex(object => object.item_id === 'p1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'p1',
                    item_name: 'RSVP',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'p1';
                }),
            );
        }
    }

    const handleMonetaryGiftPackage = (e) => {
        if (items_array.findIndex(object => object.item_id === 'p2') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'p2',
                    item_name: 'monetary gift package',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'p2';
                }),
            );
        }
    }

    const handleHisHerVows = (e) => {
        if (items_array.findIndex(object => object.item_id === 'p3') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'p3',
                    item_name: 'his/her vows',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'p3';
                }),
            );
        }
    }

    const handleCover = (e) => {
        if (items_array.findIndex(object => object.item_id === 'co1') === -1
            && items_array.findIndex(object => object.item_id === 'co2') === -1
            && items_array.findIndex(object => object.item_id === 'co3') === -1
            && items_array.findIndex(object => object.item_id === 'co4') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    item_name: e.target.childNodes[e.target.selectedIndex].getAttribute('title'),
                    price: parseFloat(e.target.value)
                }]);
        }
        else {
            setItems_array(items_array.map(obj => {
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
        if (items_array.findIndex(object => object.item_id === 'ca1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'ca1',
                    item_name: 'menu cards',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'ca1';
                }),
            );
        }
    }

    const handleSeatCards = (e) => {
        if (items_array.findIndex(object => object.item_id === 'ca2') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'ca2',
                    item_name: 'seat cards',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'ca2';
                }),
            );
        }
    }

    const handleTableCards = (e) => {
        if (items_array.findIndex(object => object.item_id === 'ca3') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'ca3',
                    item_name: 'table cards',
                    price: parseFloat(e.target.value)
                }]);
        }
        if (e.target.checked === false) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'ca3';
                }),
            );
        }
    }

    return (
        <>
            <div className='order-frame-2'>
                <h2>Running Price</h2>
                <div className='running-price-frame p-4'>
                    <RunningPrice
                        order={order}
                        items_array={items_array}
                    />
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
                        <select name="pages" id="pages-select" required onClick={handlePagesPaperAndColor}>
                            <option value="Let Crafters Haven handle it!">Let Crafters Haven handle it!</option>
                            <option value="Customize">Customize</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <div className='grid-item'>
                            <select name="pages" id="pages-select" onClick={handlePagesSize}>
                                <option id="4.75 x 5.75 in" value="30">4.75 x 5.75 in</option>
                                <option id="5.75 x 7.75 in" value="30">5.75 x 7.75 in</option>
                                <option id="6.75 x 8.75 in" value="40">6.75 x 8.75 in</option>
                            </select>
                        </div></div>

                    <div className='grid-item'><input type="checkbox" value="envelope" className='checkbox-circle'
                        onChange={handleEnvelope} /> Envelope</div>
                    <div className='grid-item'>
                        <select name="envelope" id="envelope-select" onClick={handleEnvelopePaperAndColor} disabled={!checked}>
                            <option value="Let Crafters Haven handle it!">Let Crafters Haven handle it!</option>
                            <option value="Customize">Customize</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <select name="envelope" id="envelope-select" onClick={handleEnvelopeSize} disabled={!checked}>
                            <option id="6 x 8 in" value='30'>6 x 8 in</option>
                        </select>
                    </div>
                </div>
                <div className='row-group'>
                    <input type="checkbox" value="10" className={!checked ? 'checkbox-circle1' : 'checkbox-circle'} onClick={handleEnvelopeLiner} disabled={!checked} />Envelope Liner
                    <input type="checkbox" value="5" className={!checked ? 'checkbox-circle1' : 'checkbox-circle'} onClick={handleEnvelopeLock} disabled={!checked} />Envelope Lock
                </div>
                {!hidden ? <OrderForm3
                    order={order}
                    setOrder={setOrder}
                    items_array={items_array}
                    setItems_array={setItems_array}
                /> : null}

                <div className='row-group mt-5'>
                    <div className="number-circle">2</div>
                    <h3>Text Decor</h3>
                </div>
                <div className='text-decor mt-3'>
                    <div>
                        <h5>All Text</h5>
                        <div className='grid-item'><input type="radio" id='t4' title='all text emboss' value="20" name='all-text' className='checkbox-circle' onClick={handleAllText} />Emboss</div>
                        <div className='grid-item'><input type="radio" id='t3' title='all text foil print' value="60" name='all-text' className='checkbox-circle' onClick={handleAllText} />Foil Print</div>
                        <div className='grid-item'><input type="radio" id='t1' title='all text plain print' value="30" name='all-text' className='checkbox-circle' onClick={handleAllText} />Plain Print</div>
                    </div>
                    <div>
                        <h5>Header Text</h5>
                        <div className='grid-item'><input type="checkbox" id='t2' title='header foil print' value="40" name='header-text' className='checkbox-circle' onClick={handleHeaderText} />Foil Print</div>
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
                    <select name="cover" id="cover-select" onClick={handleCover}>
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
                    <Link to='/form/order-form-1' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/form/order-form-4' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>
            </div>
        </>
    );
}

export default OrderForm2;