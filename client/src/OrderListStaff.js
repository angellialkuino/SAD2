import React, { Component, useEffect, useState } from "react";
import NavBarStaff from "./NavBarStaff";
import OrderListStaffTable from "./OrderListStaffTable";
import './OrderListStaffTable.css'

var Orders = require("./OrderListStaff_PLACEHOLDER.json");

export default function Order_List() {
    const [query, setQuery] = useState("");
    const keys = ["order_id", "name", "date_order", "date_event", "type", "theme", "quantity", "status"];

    return (
        <div className="ol_div-frame order-history">
            <NavBarStaff />
            <div className="ol_headers">
                <h4 className="ol_title">Order List</h4>
            </div>

            <div className="ol_table">
                <OrderListStaffTable data={Orders} />
            </div>

            <div className="ol_buttons">
                <button className="ol_button-back">Back</button>
                <button className="ol_button-next">Next</button>
            </div>
        </div>
    );
}