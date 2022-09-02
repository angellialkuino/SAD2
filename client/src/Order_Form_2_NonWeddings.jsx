import React, { Component } from 'react';
import './Order_Form_2_NonWeddings.css';
import Dropdown from 'react-bootstrap/Dropdown';

class Order_Form_2_NonWeddings extends Component {
    render() {
        return (
            <div>
                <div className='main-order-frame'>
                    <div className='row-group'>
                        <div class="number-circle">1</div>
                        <h2>Details of the Invite</h2>
                    </div>

                    <div className="invite-details">
                        <div className='label-textfield'>
                            <h4>Date of Event</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                        <div className='label-textfield'>
                            <h4>Motif/Theme</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                        <div className='label-textfield'>
                            <h4>Invitation Title</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                        <div className='label-textfield'>
                            <h4>Font Style</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                        <div className='label-textfield'>
                            <h4>Content Link</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                        <div className='label-textfield'>
                            <h4>Quantity</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                    </div>

                    <div>
                        <div className='grid-container'>
                            <div className='grid-item'></div>
                            <div className='grid-item'><h4>Type of Paper</h4></div>
                            <div className='grid-item'><h4>Color</h4></div>
                            <div className='grid-item'><h4>Size of Card (inches)</h4></div>
                            <div className='grid-item'><input type="checkbox" value="inner" className='checkbox-circle' />Inner</div>
                            <div className='grid-item'>
                                <select name="inner" id="inner">
                                    <option value="a">a</option>
                                    <option value="b">b</option>
                                    <option value="c">c</option>
                                    <option value="d">d</option>
                                </select>
                            </div>
                            <div className='grid-item'></div>
                            <div className='grid-item'><div className='grid-item'>
                                <select name="inner" id="inner">
                                    <option value="a">4.75 x 5.75</option>
                                    <option value="b">5.75 x 7.75</option>
                                    <option value="c">6.75 x 8.75</option>
                                    <option value="d">7.75 x 9.75</option>
                                </select>
                            </div></div>
                            <div className='grid-item'><input type="checkbox" value="envelope" className='checkbox-circle' />Envelope</div>
                            <div className='grid-item'><select name="envelope" id="envelope">
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                                <option value="d">d</option>
                            </select></div>
                            <div className='grid-item'></div>
                            <div className='grid-item'>
                                <div className='grid-item'>
                                    <select name="inner" id="inner">
                                        <option value="a">a</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                        <option value="d">d</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row-group'>
                            <input type="checkbox" value="liner" className='checkbox-circle' />Envelope Liner
                            <input type="checkbox" value="lock" className='checkbox-circle' />Envelope Lock
                        </div>

                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <button className='text-button'>Back</button>
                    <button className='button'>Next</button>
                </div>
            </div>

        );
    }
}

export default Order_Form_2_NonWeddings;