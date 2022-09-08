import React, { Component, useEffect, useState } from "react";
import Order_Documentation_Table from "./Order_Documentation_Table";
import './Order_Documentation_Table.css'

var Orders = require("./OrderDocumentation_PLACEHOLDER.json");

export default function Order_Documentation() {
    const [query, setQuery] = useState("");
    const keys = ["date", "description"];

    return (
        <div className="oh_div-frame order-documentation">

            <div className="oh_headers">
                <h4 className="od_title">Documentation of Changes</h4>
                <h6 className="od_title">For Order ID ########</h6>
            </div>

            <div className="oh_table">
                <Order_Documentation_Table data={Orders} />
            </div>

            <div className = "od_add_entry">
                <button className="od_button-add">Add Entry</button>
            </div>

        </div>
    );
}