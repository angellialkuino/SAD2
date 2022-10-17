import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import Axios from 'axios';
import './CustMyOrders.css';

function CustMyOrders() {
    const [myOrders, setMyOrders] = useState([]);
    const userID = useOutletContext();

    useEffect(() => {
        const getMyOrders = async () => {
            await Axios.get('http://localhost:5000/api/order/my-orders',
                { params: { user_id: userID } },
                { withCredentials: true }
            ).then((res) => {
                //console.log(res);            
                setMyOrders(res.data.orders);
            });
        }
        getMyOrders();
    }, [])

    return (
        <>
            <div className="custMyOrders-body-color">

                <header className="custMyOrders-header">
                    <h2>My Orders</h2>
                </header>

                <div className="custMyOrders-body-labels-and-buttons">

                    {(myOrders.length > 0) &&
                        myOrders.map((item) => {
                            return (
                                <div className="custMyOrders-labels">
                                    <h3>Order {item.order_id.slice(-4)}</h3>
                                    <h5>Status: {item.order_status}</h5>
                                    <div className="orders-button-footer">
                                        {/* <button className="rounded-pill btn btn-info fw-bold nav-hover"> */}
                                            <Link to="/customer/order-details" className="rounded-pill btn btn-info fw-bold nav-hover" state={{ orderID: item.order_id }}>
                                                View Order Details
                                            </Link>
                                        {/* </button> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                    {(myOrders.length < 1) && <p>No Orders Made</p>}

                </div>
            </div>
        </>
    );
}

export default CustMyOrders;