import React, { useEffect, useState } from "react";
import Axios from 'axios';
import OrderDocumentationTable from "./OrderDocumentationTable";
import './OrderDocumentationTable.css'

//var Orders = require("./OrderDocumentation_PLACEHOLDER.json");

export default function OrderDocumentation() {
    const [orderID, setOrderID] = useState("");
    const [orderDocs, setOrderDocs] = useState([]);

    const [date, setDate] = useState(new Date().toLocaleString());
    const [description, setDescription] = useState("");

    
    useEffect(  () => {
        const getOrderDocs = async () => {
            await Axios.get('http://localhost:5000/api/order/order-documentation',
                { params: {order_id: "93ebc2e9-7b45-440f-b87d-43c7c8477267"}},
                {withCredentials: true }
            ).then((res) => {
                if(res.data.entries.length > 0){
                    setOrderID(res.data.entries[0].order_id);//use only the last 4 characters!!!
                }
                setOrderDocs(res.data.entries);
            });
        }
        getOrderDocs();
    }, [])

    const addEntry = async () => {

        setDate(new Date().toLocaleString());

        setOrderDocs([...orderDocs,{
            order_id: orderID,
            date: date,
            description: description}]);

        await Axios.post('http://localhost:5000/api/order/new-log-entry',
            { 
                order_id: orderID,
                date: date,
                description: description
            },
            {withCredentials: true }
        ).then((res) => {
            setDate(new Date().toLocaleString());
            setDescription("");            
        });
    }

    return (
        <div className="oh_div-frame order-documentation">

            <div className="oh_headers">
                <h4 className="od_title">Order Log of Layout Changes</h4>
                {orderID && <h6 className="od_title">For Order ID {orderID}</h6>}
            </div>

            <div className="oh_table">
                {(orderDocs.length < 0 ) ? (<p>No Order Log Entries</p>) : 
                (
                    <table className="oh_table-table">
                        <tbody>
                            <tr className="oh_tr-tr">
                                <th className="oh_th-th">Date</th>
                                <th className="oh_th-th">Description</th>
                            </tr>

                            {data.map((orderDocs) => (
                                <tr className="oh_tr-tr">
                                    <td className="oh_td-td">{item.date}</td>
                                    <td className="oh_td-td">{item.description}</td>

                                </tr>
                            ))}

                                <tr className="oh_tr-tr">
                                    <td className="oh_td-td">{date}</td>
                                    <td className="oh_td-td">
                                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                )}
                
            </div>



            <div onClick = {addEntry} className="od_add_entry">
                <button className="od_button-add">Add Entry</button>
            </div>

        </div>
    );
}