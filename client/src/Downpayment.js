import React from 'react';
import { Link } from 'react-router-dom';
import './Downpayment.css';

function Downpayment() {
    return (
        <div className="Order_Form_10">
            <div className="order_form_10-container">
                <div className="order_form_10-body">
                    <div className="order_form_10-content">

                        <div className="order_form_10-content-left">

                            <div className="order_form_10-header">
                                <h3>Please Pay The <br /> 50% Down Payment</h3>
                            </div>

                            <p> Payment can be done via: </p>
                            <p> <b>Over the counter at Crafter’s Heaven located at:</b><br />
                                Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, <br />
                                Davao City, 8000 Davao del Sur</p>
                            <p> <b>GCash</b> <br />
                                Number: 09078216011 <br />
                                Recipient: Angelli Kezzed M. Alkuino</p>
                        </div>

                        <div className="order_form_10-content-right">
                            <p>ORDER NUMBER: </p>
                            <p>Name: </p>
                            <p>Contact Number: </p>
                            <p>Address: </p>
                            <p>Payment Method: </p>
                            <br />
                            <p>Quantity: </p>
                            <p>Order Number: </p>
                            <p>Amount per Set: </p>
                            <p>VAT: </p>
                            <b>TOTAL AMOUNT DUE</b>
                        </div>
                    </div>
                </div>

                <div className="downpayment-footer">
                    <Link to='/shipping-address' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <Link to='/order-payment' className="rounded-pill btn btn-info fw-bold nav-hover">Next</Link>
                </div>

            </div>
        </div>
    );
}

export default Downpayment;