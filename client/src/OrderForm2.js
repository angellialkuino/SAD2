import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm2.css';
import NavBarCustomerLoggedIn from './NavBarCustomerLoggedIn';

function OrderForm2({ orderData, setOrderData }) {
    useEffect(() => console.log(orderData), [orderData]);

    const [checked, setChecked] = useState(false);

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
                pagesSize: e.target.id,
                pagesSizePrice: e.target.value
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
                envelopeSize: e.target.value
            };
        });
    }

    const handleBodyText = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                bodyText: e.target.value
            };
        });
    }

    const handleHeaderText = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                headerText: e.target.value
            };
        });
    }

    const handleOtherPages = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                otherPages: e.target.value
            };
        });
    }

    const handleCover = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                cover: e.target.value
            };
        });
    }

    const handleCards = (e) => {
        setOrderData((previousState) => {
            return {
                ...previousState,
                cards: e.target.value
            };
        });
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
                    <div className='grid-item'><h5>Size of Card</h5></div>
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
                        }} /> Envelope</div>
                    <div className='grid-item'>
                        <select name="envelope" id="envelope-select" onClick={handleEnvelopePaperAndColor} disabled={!checked}>
                            <option value="Let Crafters Haven handle it!">Let Crafters Haven handle it!</option>
                            <option value="Customize">Customize</option>
                        </select>
                    </div>
                    <div className='grid-item'>
                        <div className='grid-item'>
                            <select name="envelope" id="envelope-select" onClick={handleEnvelopeSize} disabled={!checked}>
                                <option value="6 x 8 in">6 x 8 in</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row-group'>
                    <input type="checkbox" value="liner" className='checkbox-circle' onChange={(e) => {
                        setOrderData((previousState) => {
                            return {
                                ...previousState,
                                envelopeLiner: e.target.checked
                            };
                        });
                    }} />Envelope Liner
                    <input type="checkbox" value="lock" className='checkbox-circle' onChange={(e) => {
                        setOrderData((previousState) => {
                            return {
                                ...previousState,
                                envelopeLock: e.target.checked
                            };
                        });
                    }} />Envelope Lock
                </div>

                <div className='row-group'>
                    <div className="number-circle">2</div>
                    <h3>Text Decor</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><h5>All Text</h5></div>
                    <div className='grid-item'><h5>Header Text</h5></div>
                    <div className='grid-item'><h5>Body Text</h5></div>
                    <div className='grid-item'><input type="checkbox" value="dry-emboss" name='all-text' className='checkbox-circle' onClick={(e) => {
                        setOrderData((previousState) => {
                            return {
                                ...previousState,
                                allTextEmboss: e.target.checked
                            };
                        });
                    }} />Dry Emboss</div>
                    <div className='grid-item'><input type="radio" value="header-plain-print" name='header-text' className='checkbox-circle' onClick={handleHeaderText} />Plain Print</div>
                    <div className='grid-item'><input type="radio" value="body-plain-print" name='body-text' className='checkbox-circle' onClick={handleBodyText} />Plain Print</div>
                    <div className='grid-item'></div>
                    <div className='grid-item'><input type="radio" value="header-foil-print" name='header-text' className='checkbox-circle' onClick={handleHeaderText} />Foil Print</div>
                    <div className='grid-item'><input type="radio" value="body-foil-print" name='body-text' className='checkbox-circle' onClick={handleBodyText} />Foil Print</div>
                </div>

                <div className='row-group'>
                    <div className="number-circle">3</div>
                    <h3>Other Pages</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="radio" value="rsvp" name='other-pages' className='checkbox-circle' onClick={handleOtherPages} />RSVP</div>
                    <div className='grid-item'><input type="radio" value="monetary-gift-page" name='other-pages' className='checkbox-circle' onClick={handleOtherPages} />Monetary Gift Page</div>
                    <div className='grid-item'><input type="radio" value="vows" name='other-pages' className='checkbox-circle' onClick={handleOtherPages} />His/Her Vows</div>
                </div>

                <div className='row-group'>
                    <div className="number-circle">4</div>
                    <h3>Cover</h3>
                </div>
                <div className='grid-container-2x2'>
                    <div className='grid-item'><input type="radio" value="translucent" name='cover' className='checkbox-circle' onClick={handleCover} />Translucent Cover</div>
                    <div className='grid-item'><input type="radio" value="printed" name='cover' className='checkbox-circle' onClick={handleCover} />Printed Cover</div>
                    <div className='grid-item'><input type="radio" value="trifold" name='cover' className='checkbox-circle' onClick={handleCover} />Trifold Cover</div>
                    <div className='grid-item'><input type="radio" value="lasercut" name='cover' className='checkbox-circle' onClick={handleCover} />Lasercut Cover</div>
                </div>
                <div className='row-group'>
                    <div className="number-circle">5</div>
                    <h3>Cards</h3>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'><input type="radio" value="menu" className='checkbox-circle' onClick={handleCards} />Menu Cards</div>
                    <div className='grid-item'><input type="radio" value="table" className='checkbox-circle' onClick={handleCards} />Table Cards</div>
                    <div className='grid-item'><input type="radio" value="seat" className='checkbox-circle' onClick={handleCards} />Seat Cards</div>
                </div>
                <span className='total-footer'>
                    Total is subject to change <b>Total: Php</b>
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