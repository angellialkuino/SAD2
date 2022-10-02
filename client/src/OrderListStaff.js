import React, { Component, useEffect, useState } from "react";
import Axios from 'axios';
import NavBarStaff from "./NavBarStaff";
import OrderListStaffTable from "./OrderListStaffTable";
import './OrderListStaffTable.css'

//var Orders = require("./OrderListStaff_PLACEHOLDER.json");

export default function Order_List() {
    const [orderList, setOrderList] = useState([]);

    useEffect(  () => {
        const getOrderList = async () => {
            await Axios.get('http://localhost:5000/api/order/current-orders',
                { withCredentials: true }
            ).then((res) => {
                console.log(res);
                setOrderList(res.data.orders);
            });
        }
        
        getOrderList();
    }, [])

    return (
        <div className="ol_div-frame order-history">
            <NavBarStaff />
            <div className="ol_headers">
                <h4 className="ol_title">Order List</h4>
            </div>

            <div className="ol_table">
                {(orderList.length > 0) && <OrderListStaffTable data={orderList} />}
            </div>

            <div className="ol_buttons">
                <button className="ol_button-back">Back</button>
                <button className="ol_button-next">Next</button>
            </div>
        </div>
    );
}