import React, { Component } from 'react';
import './Order_Form_1.css';

class Order_Form_1 extends Component {
    render() {
        return (
            <div>
                <div className='main-order-frame1'>
                    <h2>TYPE OF INVITE</h2>
                    <div className='boxes'>
                        <div className='square-button-with-text'>
                            <button className='square-button'></button>
                            <h4>Wedding</h4>
                        </div>
                        <div className='square-button-with-text'>
                            <button className='square-button'></button>
                            <h4>Birthday</h4>
                        </div>
                        <div className='square-button-with-text'>
                            <button className='square-button'></button>
                            <h4>Debut</h4>
                        </div>
                        <div className='square-button-with-text'>
                            <button className='square-button'></button>
                            <h4>Other</h4>
                        </div>
                    </div>
                    <h2>MATERIAL</h2>
                    <div className='boxes'>
                        <div className='square-button-with-text'>
                            <button className='square-button'></button>
                            <h4>Paper</h4>
                        </div>
                        <div className='square-button-with-text'>
                            <button className='square-button'></button>
                            <h4>Acrylic</h4>
                        </div>
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
                            <h4>Number of Invites</h4>
                            <input type='text' className='profile-textfield' />
                        </div>
                        <div className='label-textfield'>
                            <h4>Peg Link</h4>
                            <input type='text' className='profile-textfield' />
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

export default Order_Form_1;