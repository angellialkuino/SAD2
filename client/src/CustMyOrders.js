import React, { useEffect, useState } from "react";
import { useOutletContext,Link } from "react-router-dom";
import Axios from 'axios';
import './CustMyOrders.css';

function CustMyOrders() {
    const [myOrders, setMyOrders] = useState([]);
    const userID = useOutletContext();

    useEffect( () => {
        const getMyOrders = async () => {
            await Axios.get('http://localhost:5000/api/order/my-orders',
            { params: {user_id: userID}},
            {withCredentials: true }
        ).then((res) => {
            //console.log(res);            
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
                                    <h3>Order {item.order_id.slice(-4)}</h3> 
                                    <Link to="/customer/order-details" state={{orderID: item.order_id}}>
                                    View Order Details
                                    </Link>
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