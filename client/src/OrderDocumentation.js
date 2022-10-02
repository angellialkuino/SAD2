import React, { useEffect, useState } from "react";
import Axios from 'axios';
import OrderDocumentationTable from "./OrderDocumentationTable";
import './OrderDocumentationTable.css'

//var Orders = require("./OrderDocumentation_PLACEHOLDER.json");

export default function OrderDocumentation() {
    const [orderID, setOrderID] = useState("");
    const [orderDocs, setOrderDocs] = useState([]);

    useEffect(  () => {
        const getOrderDocs = async () => {
            await Axios.get('http://localhost:5000/api/order/order-documentation',
                { params: {order_id: "93ebc2e9-7b45-440f-b87d-43c7c8477267"},
                withCredentials: true }
            ).then((res) => {
                if(res.data.entries.length > 0){
                    setOrderID(res.data.entries[0].order_id);//use only the last 4 characters!!!
                }
                setOrderDocs(res.data.entries);
            });
        }
        getOrderDocs();
    }, [])

    return (
        <div className="oh_div-frame order-documentation">

            <div className="oh_headers">
                <h4 className="od_title">Documentation of Changes</h4>
                {orderID && <h6 className="od_title">For Order ID {orderID}</h6>}
            </div>

            <div className="oh_table">
                {(orderDocs.length > 0 ) && <OrderDocumentationTable data={orderDocs} />}
                {(orderDocs.length < 1 ) && <p>No Order Documentation Entries</p>}
                
            </div>

            <div className="od_add_entry">
                <button className="od_button-add">Add Entry</button>
            </div>

        </div>
    );
}