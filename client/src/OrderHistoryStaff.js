import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Order_History_Staff_Table from "./OrderHistoryStaffTable";
import './OrderHistoryStaffTable.css'

//var Orders = require("./OrderHistoryStaff_PLACEHOLDER.json");

export default function OrderHistory() {
    const navigate = useNavigate();

    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(  () => {
        const getOrderHistory = async () => {
            await Axios.get('http://localhost:5000/api/order/order-history',
                { withCredentials: true }
            ).then((res) => {
                setOrderHistory(res.data.orders);
            });
        }
        
        getOrderHistory();
    }, [])


    return (
        <div className="oh_div-frame order-history">

            <div className="oh_headers">
                <h4 className="oh_title">Order History</h4>
            </div>

            <div className="oh_table">
                {(orderHistory.length > 0) && <Order_History_Staff_Table data={orderHistory} />}
                {(orderHistory.length < 1) && <p>No Order History</p>}

            </div>
        </div>
    );
}