import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm2.css';
import { RunningPrice } from './RunningPrice';
import OrderForm3 from './OrderForm3';

function OrderForm2({ sumTotal, setSumTotal, order, setOrder, items_array, setItems_array }) {
    const [checked, setChecked] = useState(true);
    const [hidden1, setHidden1] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [e2Checked, sete2Checked] = useState(false);
    const [e3Checked, sete3Checked] = useState(false);
    const [allTextChecked1, setAllTextChecked1] = useState(false);
    const [allTextChecked2, setAllTextChecked2] = useState(false);
    const [allTextChecked3, setAllTextChecked3] = useState(true);
    const [headerTextChecked, setHeaderTextChecked] = useState(false);
    let tempSum = 0;

    useEffect(() => {
        <RunningPrice items_array={items_array} />
        //sumTotal.current = 0;
        items_array.forEach(element => {
            if ('price' in element) {
                //sumTotal.current += ('quantity' in element ? element.price*element.quantity : element.price);
                tempSum += (('quantity' in element) ? element.price * element.quantity : element.price);
                ('quantity' in element) ? console.log(`1: ${element.price * element.quantity}`) : console.log(`2: ${element.price}`)
            }
        });
        setSumTotal(tempSum);
        // console.log(order);
        // console.log(items_array);
    }, [items_array]);

    useEffect(() => {
        console.log(`on useEffect: ${items_array}`);
        console.log(`total: ${sumTotal}`);
    }, [sumTotal])

    const handlePagesPaperAndColor = (e) => {
        if (e.target.value == 'Customize') {
            setHidden1(false);
        } else { setHidden1(true); }

        setItems_array(items_array.map(obj => {
            if (obj.item_id === 'm1') {
                return {
                    ...obj,
                    color: e.target.value
                };
            }
            return obj;
        }));
    }

    const handlePagesSize = (e) => {
        setItems_array(items_array.map(obj => {
            if (obj.item_id === 'm1') {
                return {
                    ...obj,
                    size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value) * parseFloat(items_array[0].quantity)

                };
            }
            return obj;
        }));
    }

    const handleEnvelopePaperAndColor = (e) => {
        if (e.target.value == 'Customize') {
            setHidden2(false);
        } else { setHidden2(true); }

        if (items_array.findIndex(object => object.item_id === 'e1') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e1',
                    item_name: 'envelope',
                    color: e.target.value
                }]);
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
    }

    const handleEnvelopeSize = (e) => {
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

    const handleEnvelope = (e) => {
        setChecked((prev) => {return !prev});
        if (!e.target.checked === false) {
            sete2Checked(false);
            sete3Checked(false);
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e1' && item.item_id !== 'e2' && item.item_id !== 'e3';
                }),
            );
        } else {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e1',
                    item_name: 'envelope',
                    size: '6 x 8 in',
                    price: 30
                }]);
        }
    }

    const handleEnvelopeLiner = (e) => {
        sete2Checked(prev => !prev);
        if (sete2Checked && items_array.findIndex(object => object.item_id === 'e2') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e2',
                    item_name: 'envelope liner',
                    price: parseFloat(e.target.value)
                }]);
        } else {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e2';
                }),
            );
        }
    }

    const handleEnvelopeLock = (e) => {
        sete3Checked(prev => !prev);
        if (sete3Checked && items_array.findIndex(object => object.item_id === 'e3') === -1) {
            setItems_array(prevState =>
                [...prevState, {
                    item_id: 'e3',
                    item_name: 'envelope lock',
                    price: parseFloat(e.target.value)
                }]);
        } else {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'e3';
                }),
            );
        }
    }

    const handleAllText = (e) => {
        switch (e.target.id) {
            case 't4':
                if (!allTextChecked1) {
                    setAllTextChecked1(true);
                    setAllTextChecked2(false);
                    setAllTextChecked3(false);
                }
                break;
            case 't3':
                if (!allTextChecked2) {
                    setAllTextChecked2(true);
                    setAllTextChecked1(false);
                    setAllTextChecked3(false);
                }
                break;
            case 't1':
                if (!allTextChecked3) {
                    setAllTextChecked3(true);
                    setAllTextChecked2(false);
                    setAllTextChecked1(false);
                }
                break;

            default:
                break;
        }
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
        //if header
        if (headerTextChecked) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 't2';
                }),
            );
            setHeaderTextChecked(false);
        }
    }


    const handleHeaderText = (e) => {
        if (!headerTextChecked) {
            setHeaderTextChecked(true);
        }

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

        if (allTextChecked1 || allTextChecked2 || allTextChecked3) {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 't1' && item.item_id !== 't3' && item.item_id !== 't4';
                }),
            );
            setAllTextChecked1(false);
            setAllTextChecked2(false);
            setAllTextChecked3(false);
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
        if (e.target.childNodes[e.target.selectedIndex].getAttribute('id') !== 'n/a') {
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
        if (e.target.childNodes[e.target.selectedIndex].getAttribute('id') === 'n/a') {
            setItems_array(prevState =>
                prevState.filter(item => {
                    return item.item_id !== 'co1' && item.item_id !== 'co2' && item.item_id !== 'co3' && item.item_id !== 'co4';
                }),
            );
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
                <h4>Running Price</h4>
                <div className='running-price-frame p-2'>
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
                        <select name="pages" id="pages-select" required onChange={handlePagesPaperAndColor}>
                            <option value="Let Crafters Haven handle it!">Let Crafters Haven handle it!</option>
                            <option value="Customize">Customize</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <div className='grid-item'>
                            <select name="pages" id="pages-select" required onChange={handlePagesSize}>
                                <option id="4.75 x 5.75 in" value="30">4.75 x 5.75 in</option>
                                <option id="5.75 x 7.75 in" value="30">5.75 x 7.75 in</option>
                                <option id="6.75 x 8.75 in" value="40">6.75 x 8.75 in</option>
                            </select>
                        </div></div>

                    <div className='grid-item'><input type="checkbox" checked={checked} value="envelope" className='checkbox-circle'
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
                            <option id="7 x 9 in" value='40'>7 x 9 in</option>
                        </select>
                    </div>
                </div>
                <div className='row-group'>
                    <input type="checkbox" value="10" checked={e2Checked} className={!checked ? 'checkbox-circle1' : 'checkbox-circle'} onClick={handleEnvelopeLiner} disabled={!checked} />Envelope Liner
                    <input type="checkbox" value="5" checked={e3Checked} className={!checked ? 'checkbox-circle1' : 'checkbox-circle'} onClick={handleEnvelopeLock} disabled={!checked} />Envelope Lock
                </div>
                {(!hidden1 || !hidden2) ? <OrderForm3
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
                        <div className='grid-item'><input type="checkbox" checked={allTextChecked1} className='checkbox-circle' id='t4' title='all text emboss' value="20" onChange={handleAllText} />Emboss</div>
                        <div className='grid-item'><input type="checkbox" checked={allTextChecked2} className='checkbox-circle' id='t3' title='all text foil print' value="60" onChange={handleAllText} />Foil Print</div>
                        <div className='grid-item'><input type="checkbox" checked={allTextChecked3} className='checkbox-circle' id='t1' title='all text plain print' value="30" onChange={handleAllText} />Plain Print</div>
                    </div>
                    <div>
                        <h5>Header Text</h5>
                        <div className='grid-item'><input type="checkbox" checked={headerTextChecked} className='checkbox-circle' id='t2' title='header foil print' value="40" onChange={handleHeaderText} />Foil Print</div>
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
                    <select name="cover" id="cover-select" required onChange={handleCover}>
                        <option id="n/a" title='none' value="0">No Cover</option>
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
                    Total is subject to change. <b>Unit Cost: {sumTotal} Php</b>
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