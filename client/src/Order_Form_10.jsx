import React, { Component } from 'react';
import './Order_Form_10.css';

class Order_Form_10 extends Component {
    render() {
        return (
            <div className="Order_Form_10">
                <div className="order_form_10-container">
                    <div className="order_form_10-body">
                        <div className="order_form_10-content">

                            <div className="order_form_10-content-left">

                                <div className="order_form_10-header">
                                    <h3>Please Pay The <br/> 50% Down Payment</h3>
                                </div>

                                <p> Payment can be done via: </p>
                                <p> Over the counter at Crafter’s Heaven located at:<br/>
                                    Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, <br/>
                                    Davao City, 8000 Davao del Sur</p>
                                <p> GCash <br/> 
                                    Number: 09078216011 <br/>
                                    Recipient: Angelli Kezzed M. Alkuino</p>
                            </div>

                            <div className="order_form_10-content-right">
                                <p>Order Number: </p>
                                <p>Name: </p>
                                <p>Contact Number: </p>
                                <p>Address: </p>
                                <p>Payment Method: </p>
                                <br/>
                                <p>Quantity: </p>
                                <p>Order Number: </p>
                                <p>Amount per Set: </p>
                                <p>VAT: </p>
                                <p>Total Amount Due: </p>
                            </div>
                        </div>
                    </div>

                    <div className="order_form_10-footer">
                        <button className="order_form_10-btn-back">Back</button>
                        <button className="order_form_10-btn-proceed">Proceed</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Order_Form_10;