import React, { Component, useEffect, useState } from "react";
import Order_History_Staff_Table from "./Order_History_Staff_Table";
import './Order_History_Staff_Table.css'

var Orders = require("./OrderHistoryStaff_PLACEHOLDER.json");

export default function Order_History() {
    const [query, setQuery] = useState("");
    const keys = ["cust_id", "name", "order_id", "date", "status"];

    return (
        <div className="oh_div-frame order-history">

            <div className="oh_headers">
                <h4 className="oh_title">Order History</h4>
            </div>

            <div className="oh_table">
                <Order_History_Staff_Table data={Orders} />
            </div>

            <div className = "oh_buttons">
                <button className="oh_button-back">Back</button>
                <button className="oh_button-next">Next</button>
            </div>
        </div>
    );
}