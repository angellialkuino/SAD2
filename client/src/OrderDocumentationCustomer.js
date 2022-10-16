import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import OrderDocumentationTable from "./OrderDocumentationTable";
import './OrderDocumentationTable.css'

//import './OrderDocumentationTableCustomer.css'


//var Orders = require("./OrderDocumentation_PLACEHOLDER.json");

export default function OrderDocumentationCustomer() {
    const navigate = useNavigate();

    const location = useLocation();
    const {orderID} = location.state;

    //const [orderID, setOrderID] = useState("");
    const [orderDocs, setOrderDocs] = useState([]);

    useEffect(  () => {
        const getOrderDocs = async () => {
            await Axios.get('http://localhost:5000/api/order/order-log-list',
                { params: {order_id: orderID}},
                {withCredentials: true }
            ).then((res) => {
                if(res.data.entries.length > 0){
                    setOrderDocs(res.data.entries);
                }
            }).catch((err)=>{
                console.log(err.response.data.message);
                console.log(err);
            });
        }
        getOrderDocs();
    }, [])

    return (
        <div className="oh_div-frame order-documentation">

            <div className="oh_headers">
                <h4 className="od_title">Order Log of Layout Changes</h4>
                {orderID && <h6 className="od_title">For Order {orderID.slice(-4)}</h6>}
            </div>

            <div className="oh_table">
                {(orderDocs.length > 0 ) && <OrderDocumentationTable data={orderDocs} />}
                {(orderDocs.length < 1 ) && <p>No Order Layout Changes</p>}
                
            </div>

            <div className="odc-footer">
                <button onClick={() => navigate(-1)} className="odc-back">Back</button>
            </div>

        </div>
    );
}