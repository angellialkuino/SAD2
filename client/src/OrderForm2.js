import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm2.css';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';
import { RunningPrice } from './RunningPrice';

function OrderForm2({ sumTotal, orderItems, setOrderItems }) {
    const [checked, setChecked] = useState(false);
    const [allTextChecked, setAllTextChecked] = useState(false);

    useEffect(() => {
        // <RunningPrice orderItems={orderItems} />

        // sumTotal.current = 0;
        // orderItems.forEach(element => {
        //     if ('price' in element) {
        //         sumTotal.current += element.price;
        //     }
        // });
        console.log(orderItems);
    }, [orderItems]);

    const handlePagesPaperAndColor = (e) => {
        setOrderItems(prevState => {
            const newState = prevState.map(obj => {
                if ('paper_size' in obj) {
                    return { ...obj, color: e.target.value };
                }
                return obj;
            });
            return newState;
        })
    }

    const handlePagesSize = (e) => {
        setOrderItems(prevState => {
            const newState = prevState.map(obj => {
                if ('paper_size' in obj) {
                    return {
                        ...obj,
                        size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            });
            return newState;
        })
    }

    const handleEnvelopePaperAndColor = (e) => {
        if (orderItems.some(item => item.hasOwnProperty('e1'))) {
            setOrderItems(prevState => {
                const newState = prevState.map(obj => {
                    if ('e1' in obj) {
                        return {
                            ...obj,
                            color: e.target.value
                        };
                    }
                    return obj;
                });
                return newState;
            })
        } else {
            setOrderItems(prevState =>
                [...prevState, { e1: 'envelope', color: e.target.value }]);
        }
    }

    const handleEnvelopeSize = (e) => {
        if (orderItems.some(item => item.hasOwnProperty('e1'))) {
            setOrderItems(prevState => {
                const newState = prevState.map(obj => {
                    if ('e1' in obj) {
                        return {
                            ...obj,
                            size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                            price: parseFloat(e.target.value)
                        };
                    }
                    return obj;
                });
                return newState;
            })
        } else {
            setOrderItems(prevState =>
                [...prevState, {
                    e1: 'envelope',
                    size: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value)
                }]);
        }
    }

    const handleBodyText = (e) => {
        if (orderItems.some(item => item.hasOwnProperty('bt'))) {
            setOrderItems(prevState => {
                const newState = prevState.map(obj => {
                    if ('bt' in obj) {
                        return {
                            ...obj,
                            bt: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                            price: parseFloat(e.target.value)
                        };
                    }
                    return obj;
                });
                return newState;
            })
        } else {
            setOrderItems(prevState =>
                [...prevState, {
                    bt: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value)
                }]);
        }
    }

    const handleHeaderText = (e) => {
        if (orderItems.some(item => item.hasOwnProperty('ht'))) {
            setOrderItems(prevState => {
                const newState = prevState.map(obj => {
                    if ('ht' in obj) {
                        return {
                            ...obj,
                            ht: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                            price: parseFloat(e.target.value)
                        };
                    }
                    return obj;
                });
                return newState;
            })
        } else {
            setOrderItems(prevState =>
                [...prevState, {
                    ht: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    price: parseFloat(e.target.value)
                }]);
        }
    }

    const handleCover = (e) => {
        setOrderItems(prevState => {
            const newState = prevState.map(obj => {
                if ('cover' in obj) {
                    return {
                        ...obj,
                        cover: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                        price: parseFloat(e.target.value)
                    };
                }
                return obj;
            });
            return newState;
        })
    }

    return (
        <>
            <NavBarCustomerLoggedIn />
            <div className='order-frame-2'>
                <h2>Running Price</h2>
                <div className='running-price-frame'>
                    <ul><RunningPrice orderItems={orderItems} />
                    </ul>
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
                        onChange={(e) => {
                            setChecked(e.target.checked);
                            if (e.target.checked === false) {
                                setOrderItems(prevState =>
                                    prevState.filter(item => {
                                        return item.e2 !== 'envelope liner' && item.e3 !== 'envelope lock';
                                    }),
                                );
                            }
                        }} /> Envelope</div>
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
                    <input type="checkbox" value="10" className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.e2 !== 'envelope liner';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    e2: 'envelope liner',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} disabled={!checked} />Envelope Liner
                    <input type="checkbox" value="5" className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.e3 !== 'envelope lock';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    e3: 'envelope lock',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} disabled={!checked} />Envelope Lock
                </div>

                <div className='row-group mt-5'>
                    <div className="number-circle">2</div>
                    <h3>Text Decor</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><h5>All Text</h5></div>
                    <div className='grid-item'><h5>Header Text</h5></div>
                    <div className='grid-item'><h5>Body Text</h5></div>
                    <div className='grid-item'><input type="checkbox" value="20" name='all-text' className='checkbox-circle' onChange={(e) => {
                        setAllTextChecked(e.target.checked);
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.at !== 'dry emboss';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    at: 'dry emboss',
                                    price: parseFloat(e.target.value)
                                }]);
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return !item.ht && !item.bt;
                                }),
                            );
                        }
                    }} />Dry Emboss</div>
                    <div className='grid-item'>
                        <select name="header-text" id="header-select" onClick={handleHeaderText} disabled={allTextChecked}>
                            <option id="plain print" value="30">Plain Print</option>
                            <option id="foil print" value="40">Foil Print</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <select name="body-text" id="body-select" onClick={handleBodyText} disabled={allTextChecked}>
                            <option id="plain print" value="30">Plain Print</option>
                            <option id="foil print" value="60">Foil Print</option>
                        </select>
                    </div>
                </div>

                <div className='row-group mt-5'>
                    <div className="number-circle">3</div>
                    <h3>Other Pages</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="checkbox" id="rsvp" value="20" name='other-pages' className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.p1 !== 'RSVP';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    p1: 'RSVP',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} />RSVP</div>
                    <div className='grid-item'><input type="checkbox" id="monetary-gift-page" value="20" name='other-pages' className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.p2 !== 'monetary gift page';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    p2: 'monetary gift page',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} />Monetary Gift Page</div>
                    <div className='grid-item'><input type="checkbox" id="vows" value="80" name='other-pages' className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.p3 !== 'his/her vows';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    p3: 'his/her vows',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} />His/Her Vows</div>
                </div>

                <div className='row-group mt-5'>
                    <div className="number-circle">4</div>
                    <h3>Cover</h3>
                </div>
                <div className='grid-item'>
                    <select name="cover" id="cover-select" required onClick={handleCover}>
                        <option id="translucent" value="60">Translucent</option>
                        <option id="printed" value="120">Printed</option>
                        <option id="trifold" value="60">Trifold</option>
                        <option id="lasercut" value="60">Lasercut</option>
                    </select>
                </div>
                <div className='row-group mt-5'>
                    <div className="number-circle">5</div>
                    <h3>Cards</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="checkbox" id="menu" value="20" name='cards' className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.ca1 !== 'menu cards';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    ca1: 'menu cards',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} />Menu Cards</div>
                    <div className='grid-item'><input type="checkbox" id="seat" value="20" name='cards' className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.ca2 !== 'menu seat';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    ca2: 'seat cards',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} />Seat Cards</div>
                    <div className='grid-item'><input type="checkbox" id="table" value="20" name='cards' className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderItems(prevState =>
                                prevState.filter(item => {
                                    return item.ca3 !== 'table cards';
                                }),
                            );
                        }
                        else {
                            setOrderItems(prevState =>
                                [...prevState, {
                                    ca3: 'table cards',
                                    price: parseFloat(e.target.value)
                                }]);
                        }
                    }} />Table Cards</div>
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