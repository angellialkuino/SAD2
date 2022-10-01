import React, { useEffect, useState } from "react";
import Axios from 'axios';
import OrderDocumentationTable from "./OrderDocumentationTable";
import './OrderDocumentationTableCustomer.css'

//var Orders = require("./OrderDocumentation_PLACEHOLDER.json");

export default function OrderDocumentationCustomer() {
    const [orderID, setOrderID] = useState([]);
    const [orderDocs, setOrderDocs] = useState([]);

    useEffect( async () => {
        await Axios.get('http://localhost:5000/api/order/order-documentation',
            { order_id: "93ebc2e9-7b45-440f-b87d-43c7c8477267" },
            { withCredentials: true }
        ).then((res) => {
            setOrderID(res.body.entries[0].order_id);//use only the last 4 characters!!!
            setOrderDocs(res.body.entries);
        });
    }, [])

    return (
        <div className="oh_div-frame order-documentation">

            <div className="oh_headers">
                <h4 className="od_title">Documentation of Changes</h4>
                <h6 className="od_title">For Order ID {orderID}</h6>
            </div>

            <div className="oh_table">
                <OrderDocumentationTable data={orderDocs} />
            </div>

        </div>
    );
}