import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm2.css';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';

function OrderForm2({ orderData, setOrderData, sumTotal }) {
    const [checked, setChecked] = useState(false);
    const [allTextChecked, setAllTextChecked] = useState(false);

    useEffect(() => {
        const sumValues = function (orderData) {
            let sum = 0
            for (const key in orderData) {
                if (typeof orderData[key] === "number") {
                    // console.log(orderData[key])
                    sum = orderData[key] + sum;
                } else if (typeof orderData[key] === 'object') {
                    sum += sumValues(orderData[key]);
                }
            }
            return sum;
        }
        sumTotal.current = sumValues(orderData);
        // console.log(sumTotal.current);
        console.log(orderData);
    }, [orderData]);

    const handlePagesPaperAndColor = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                pagesPaperAndColor: e.target.value
            };
        });
    }

    const handlePagesSize = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                pagesPrice: {
                    ...previousState.pagesPrice,
                    //magik words that gets the id of the selected option
                    pagesSize: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    pagesSizePrice: parseFloat(e.target.value)
                }
            };
        });
    }

    const handleEnvelopePaperAndColor = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                envelopePaperAndColor: e.target.value
            };
        });
    }

    const handleEnvelopeSize = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                envelopePrice: {
                    ...previousState.envelopePrice,
                    envelopeSize: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    envelopeSizePrice: parseFloat(e.target.value)
                }
            };
        });
    }

    const handleBodyText = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                bodyTextPricing: {
                    bodyText: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    bodyTextPrice: parseFloat(e.target.value)
                }
            };
        });
    }

    const handleHeaderText = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                headerTextPricing: {
                    headerText: e.target.childNodes[e.target.selectedIndex].getAttribute('id'),
                    headerTextPrice: parseFloat(e.target.value)
                }
            };
        });
    }

    const handleOtherPages = (e) => {
        if (e.target.checked === false) {
            setOrderData((previousState) => {
                return {
                    ...previousState,
                    otherPagesPricing: {
                        otherPages: '',
                        otherPagesPrice: 0
                    }
                };
            });
        }
        else {
            setOrderData((previousState) => {
                return {
                    ...previousState,
                    otherPagesPricing: {
                        otherPages: e.target.id,
                        otherPagesPrice: parseFloat(e.target.value)
                    }
                };
            });
        }
    }

    const handleCover = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                coverPricing: {
                    cover: e.target.id,
                    coverPrice: parseFloat(e.target.value)
                }
            };
        });
    }

    const handleCards = (e) => {
        if (e.target.checked === false) {
            setOrderData((previousState) => {
                return {
                    ...previousState,
                    cardsPricing: {
                        cards: '',
                        cardsPrice: 0
                    }
                };
            });
        }
        else {
            setOrderData((previousState) => {
                return {
                    ...previousState,
                    cardsPricing: {
                        cardsPages: e.target.id,
                        cardsPrice: parseFloat(e.target.value)
                    }
                };
            });
        }
    }

    return (
        <>
            <NavBarCustomerLoggedIn />
            <div className='order-frame-2'>
                <h2>Running Price</h2>
                <div className='running-price-frame'>
                </div>

                <div className='row-group'>
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
                                setOrderData((previousState) => {
                                    return {
                                        ...previousState,
                                        envelopePaperAndColor: '',
                                        envelopePrice: {
                                            envelopeSize: '',
                                            envelopeSizePrice: 0
                                        },
                                        envelopeLinerPricing: {
                                            envelopeLiner: false,
                                            envelopeLinerPrice: 0
                                        },
                                        envelopeLockPricing: {
                                            envelopeLock: false,
                                            envelopeLockPrice: 0
                                        },
                                    };
                                });
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
                            setOrderData((previousState) => {
                                return {
                                    ...previousState,
                                    envelopeLinerPricing: {
                                        envelopeLiner: false,
                                        envelopeLinerPrice: 0
                                    }
                                };
                            });
                        }
                        else {
                            setOrderData((previousState) => {
                                return {
                                    ...previousState,
                                    envelopeLinerPricing: {
                                        envelopeLiner: true,
                                        envelopeLinerPrice: parseFloat(e.target.value)
                                    }
                                };
                            });
                        }
                    }} disabled={!checked} />Envelope Liner
                    <input type="checkbox" value="5" className='checkbox-circle' onChange={(e) => {
                        if (e.target.checked === false) {
                            setOrderData((previousState) => {
                                return {
                                    ...previousState,
                                    envelopeLockPricing: {
                                        envelopeLock: false,
                                        envelopeLockPrice: 0
                                    }
                                };
                            });
                        }
                        else {
                            setOrderData((previousState) => {
                                return {
                                    ...previousState,
                                    envelopeLockPricing: {
                                        envelopeLock: true,
                                        envelopeLockPrice: parseFloat(e.target.value)
                                    }
                                };
                            });
                        }
                    }} disabled={!checked} />Envelope Lock
                </div>

                <div className='row-group'>
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
                            setOrderData((previousState) => {
                                return {
                                    ...previousState,
                                    allTextembossPricing: {
                                        allTextEmboss: false,
                                        allTextEmbossPrice: 0
                                    },
                                };
                            });
                        }
                        else {
                            setOrderData((previousState) => {
                                return {
                                    ...previousState,
                                    allTextembossPricing: {
                                        allTextEmboss: true,
                                        allTextEmbossPrice: parseFloat(e.target.value)
                                    },
                                    headerTextPricing: {
                                        headerText: '',
                                        headerTextPrice: 0
                                    },
                                    bodyTextPricing: {
                                        bodyText: '',
                                        bodyTextPrice: 0
                                    }
                                };
                            });
                        }
                    }} />Dry Emboss</div>
                    <div className='grid-item'>
                        <select name="header-text" id="header-select" onClick={handleHeaderText} disabled={allTextChecked}>
                            <option id="plain-print" value="30">Plain Print</option>
                            <option id="foil-print" value="40">Foil Print</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <select name="body-text" id="body-select" onClick={handleBodyText} disabled={allTextChecked}>
                            <option id="plain-print" value="30">Plain Print</option>
                            <option id="foil-print" value="60">Foil Print</option>
                        </select>
                    </div>
                </div>

                <div className='row-group'>
                    <div className="number-circle">3</div>
                    <h3>Other Pages</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="checkbox" id="rsvp" value="20" name='other-pages' className='checkbox-circle' onChange={handleOtherPages} />RSVP</div>
                    <div className='grid-item'><input type="checkbox" id="monetary-gift-page" value="20" name='other-pages' className='checkbox-circle' onClick={handleOtherPages} />Monetary Gift Page</div>
                    <div className='grid-item'><input type="checkbox" id="vows" value="80" name='other-pages' className='checkbox-circle' onClick={handleOtherPages} />His/Her Vows</div>
                </div>

                <div className='row-group'>
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
                <div className='row-group'>
                    <div className="number-circle">5</div>
                    <h3>Cards</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="checkbox" id="menu" value="20" name='cards' className='checkbox-circle' onClick={handleCards} />Menu Cards</div>
                    <div className='grid-item'><input type="checkbox" id="table" value="20" name='cards' className='checkbox-circle' onClick={handleCards} />Table Cards</div>
                    <div className='grid-item'><input type="checkbox" id="seat" value="20" name='cards' className='checkbox-circle' onClick={handleCards} />Seat Cards</div>
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