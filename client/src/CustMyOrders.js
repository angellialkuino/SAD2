import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './CustMyOrders.css';

function CustMyOrders() {
    const [myOrders, setMyOrders] = useState([]);

    useEffect( () => {
        const getMyOrders = async () => {
            await Axios.get('http://localhost:5000/api/order/my-orders',
            { params: {user_id: "3bd5ccaa-86d7-4180-89fe-7a64be46e503"},
            withCredentials: true }
        ).then((res) => {
            console.log(res);            
            setMyOrders(res.data.orders);
        });
        }
        getMyOrders();
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
                                                        
                            {(myOrders.length > 0) &&
                            myOrders.map((item) => {
                                return(
                                <div className="custMyOrders-labels">
                                    <h3>Order ID {item.order_id}</h3> 
                                    {/* <Link to="/order-details" state={{orderID: item.order_id}}>
                                    <button type="view" className="btn btn-dark btn-lg btn-block">View Order Details</button>
                                    </Link> */}
                                </div>
                                )
                            })
                            }
                            {(myOrders.length < 1) && <p>No Orders Made</p>}

                            {/* can pressing the button pass the order id to the next page????? */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustMyOrders;