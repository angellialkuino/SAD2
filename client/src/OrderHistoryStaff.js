import React, { Component, useEffect, useState } from "react";
import Axios from 'axios';
import Order_History_Staff_Table from "./OrderHistoryStaffTable";
import './OrderHistoryStaffTable.css'

//var Orders = require("./OrderHistoryStaff_PLACEHOLDER.json");

export default function OrderHistory() {
    const [orderDocs, setOrderDocs] = useState([]);

    useEffect( async () => {
        await Axios.get('http://localhost:5000/api/order/order-history',
            { withCredentials: true }
        ).then((res) => {
            setOrderDocs(res.body.orders);
        });
    }, [])


    return (
        <div className="oh_div-frame order-history">

            <div className="oh_headers">
                <h4 className="oh_title">Order History</h4>
            </div>

            <div className="oh_table">
                <Order_History_Staff_Table data={orderDocs} />
            </div>

            <div className="oh_buttons">
                <button className="oh_button-back">Back</button>
                <button className="oh_button-next">Next</button>
            </div>
        </div>
    );
}