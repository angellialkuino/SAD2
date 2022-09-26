import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShippingAddress.css';

class ShippingAddress extends Component {
    render() {
        return (
            <div className='shipping-address-frame'>
                <div className='header'>
                    <h2>Shipping Address</h2>
                    <h5>Please fill-up the shipping address</h5>
                    <h5>*Note that shipping is COD and is limited to Davao City only</h5>
                </div>


                <div className="address-details">
                    <div>
                        <h4>Full Name</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div>
                        <h4>Barangay</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div>
                        <h4>Postal Code</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div>
                        <h4>Street Name, Building, House No.</h4>
                        <input type='text' className='profile-textfield long-textfield' />
                    </div>
                </div>
                <div className='footer'>
                    <Link to='/order-pickup' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/downpayment' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>

                </div>
            </div>
        );
    }
}

export default ShippingAddress;