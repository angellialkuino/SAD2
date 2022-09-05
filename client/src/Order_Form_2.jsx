import React, { Component } from 'react';
import './Order_Form_2.css';

class Order_Form_2 extends Component {
    render() {
        return (
            <div>
                <div className='order-frame-2'>
                    <h2>Running Price</h2>
                    <div className='running-price-frame'>
                    </div>

                    <div className='row-group'>
                        <div class="number-circle">1</div>
                        <h2>Details of the Invite</h2>
                    </div>

                    <div className='grid-container'>
                        <div className='grid-item'></div>
                        <div className='grid-item'><h4>Paper Type and Color</h4></div>
                        <div className='grid-item'><h4>Size of Card</h4></div>
                        <div className='grid-item'><input type="checkbox" value="inner" className='checkbox-circle' />Inner</div>
                        <div className='grid-item'>
                            <select name="inner" id="inner">
                                <option value="a">Let Crafters Haven handle it!</option>
                            </select>
                        </div>
                        <div className='grid-item'>
                            <div className='grid-item'>
                                <select name="inner" id="inner">
                                    <option value="a">4.75 x 5.75 in</option>
                                    <option value="b">5.75 x 7.75 in</option>
                                    <option value="c">6.75 x 8.75 in</option>
                                    <option value="d">7.75 x 9.75 in</option>
                                </select>
                            </div></div>
                        <div className='grid-item'><input type="checkbox" value="envelope" className='checkbox-circle' />Envelope</div>
                        <div className='grid-item'><select name="envelope" id="envelope">
                            <option value="a">Let Crafters Haven handle it!</option>
                        </select></div>
                        <div className='grid-item'>
                            <div className='grid-item'>
                                <select name="envelope" id="envelope">
                                    <option value="a">Standard envelope size</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row-group'>
                        <input type="checkbox" value="liner" className='checkbox-circle' />Envelope Liner
                        <input type="checkbox" value="lock" className='checkbox-circle' />Envelope Lock
                    </div>

                    <div className='row-group'>
                        <div class="number-circle">2</div>
                        <h2>Text Decor</h2>
                    </div>
                    <div className='grid-container'>
                        <div className='grid-item'><h4>All Text</h4></div>
                        <div className='grid-item'><h4>Header Text</h4></div>
                        <div className='grid-item'><h4>Body Text</h4></div>
                        <div className='grid-item'><input type="checkbox" value="dry-emboss" className='checkbox-circle' />Dry Emboss</div>
                        <div className='grid-item'><input type="checkbox" value="header-plain-print" className='checkbox-circle' />Plain Print</div>
                        <div className='grid-item'><input type="checkbox" value="body-plain-print" className='checkbox-circle' />Plain Print</div>
                        <div className='grid-item'></div>
                        <div className='grid-item'><input type="checkbox" value="header-foil-print" className='checkbox-circle' />Foil Print</div>
                        <div className='grid-item'><input type="checkbox" value="body-foil-print" className='checkbox-circle' />Foil Print</div>
                    </div>

                    <div className='row-group'>
                        <div class="number-circle">3</div>
                        <h2>Other Pages</h2>
                    </div>
                    <div className='grid-container'>
                        <div className='grid-item'><input type="checkbox" value="rsvp" className='checkbox-circle' />RSVP</div>
                        <div className='grid-item'><input type="checkbox" value="monetary-gift-page" className='checkbox-circle' />Monetary Gift Page</div>
                        <div className='grid-item'><input type="checkbox" value="vows" className='checkbox-circle' />His/Her Vows</div>
                    </div>

                    <div className='row-group'>
                        <div class="number-circle">4</div>
                        <h2>Cover</h2>
                    </div>
                    <div className='grid-container-2x2'>
                        <div className='grid-item'><input type="checkbox" value="translucent" className='checkbox-circle' />Translucent Cover</div>
                        <div className='grid-item'><input type="checkbox" value="printed" className='checkbox-circle' />Printed Cover</div>
                        <div className='grid-item'><input type="checkbox" value="trifold" className='checkbox-circle' />Trifold Cover</div>
                        <div className='grid-item'><input type="checkbox" value="lasercut" className='checkbox-circle' />Lasercut Cover</div>
                    </div>
                    <div className='row-group'>
                        <div class="number-circle">5</div>
                        <h2>Cards</h2>
                    </div>
                    <div className='grid-container'>
                        <div className='grid-item'><input type="checkbox" value="menu" className='checkbox-circle' />Menu Cards</div>
                        <div className='grid-item'><input type="checkbox" value="table" className='checkbox-circle' />Table Cards</div>
                        <div className='grid-item'><input type="checkbox" value="seat" className='checkbox-circle' />Seat Cards</div>
                    </div>
                    <span className='total-footer'>
                        Total is subject to change <b>Total: Php</b>
                    </span>
                </div>





                <div className='footer'>
                    <button className='text-button'>Back</button>
                    <button className='button'>Next</button>
                </div>
            </div>
        );
    }
}

export default Order_Form_2;