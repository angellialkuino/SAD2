import React, { Component, useEffect, useState } from "react";
import Axios from 'axios';
import './CustMyOrders.css';

function CustMyOrders() {
    const [myOrders, setMyOrders] = useState([]);

    useEffect( async () => {
        await Axios.get('http://localhost:5000/api/order/my-orders',
            { user_id: "24753869-a2a9-4070-bc5e-e942ab341372" },
            { withCredentials: true }
        ).then((res) => {
            setMyOrders(res.body.orders);
        });
    }, [])

    return (
        <div className="custMyOrders">
            <div className="custMyOrders-main">
                <div className="custMyOrders-body-color">

                    <div className="custMyOrders-header">
                        <h2>My Orders</h2>
                    </div>

                    <div className="custMyOrders-body">
                        <div className="custMyOrders-body-labels-and-buttons">
                            {myOrders.map((item) => {
                                <div className="custMyOrders-labels">
                                    <h3>Order ID {item.order_id}</h3> 
                                    <button type="view" className="btn btn-dark btn-lg btn-block">View Order Details</button>
                                </div>
                            })}
                            {/* can pressing the button pass the order id to the next page????? */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustMyOrders;