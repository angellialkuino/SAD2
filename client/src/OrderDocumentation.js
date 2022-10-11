import React, { useEffect, useState } from "react";
import Axios from 'axios';
import OrderDocumentationTable from "./OrderDocumentationTable";
import './OrderDocumentationTable.css'

//var Orders = require("./OrderDocumentation_PLACEHOLDER.json");

export default function OrderDocumentation() {
    const [orderID, setOrderID] = useState("2993f16f-5ea2-4177-9d5e-1a4ac76586be");
    const [orderDocs, setOrderDocs] = useState([]);

    const [date, setDate] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '));
    const [description, setDescription] = useState("");

    
    
    useEffect(  () => {
        const getOrderDocs = async () => {
            await Axios.get('http://localhost:5000/api/order/order-log-list',
                { params: {order_id: orderID}},
                {withCredentials: true }
            ).then((res) => {
                if(res.data.entries.length > 0){
                    setOrderID(orderID);//use only the last 4 characters!!!
                }
                setOrderDocs(res.data.entries);
            });
        }
        getOrderDocs();
    }, [])

    const addEntry = async () => {

        await Axios.post('http://localhost:5000/api/order/new-log-entry',
            { 
                order_id: orderID,
                date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                description: description
            },
            {withCredentials: true }
        ).then((res) => {
            setOrderDocs([...orderDocs,{
                order_id: orderID,
                date: date,
                description: description}]);
            setDate(new Date().toISOString().slice(0, 19).replace('T', ' '));
            setDescription("");            
        });

        console.log(date);

    }

    return (
        <div className="oh_div-frame order-documentation">

            <div className="oh_headers">
                <h4 className="od_title">Order Log of Layout Changes</h4>
                {orderID && <h6 className="od_title">For Order {orderID.slice(-4)}</h6>}
            </div>

            <div className="oh_table">
                  
                    <table className="oh_table-table">
                        <tbody>
                            <tr className="oh_tr-tr">
                                <th className="oh_th-th">Date</th>
                                <th className="oh_th-th">Description</th>
                            </tr>
                            {(orderDocs.length > 0 ) &&
                            orderDocs.map((entry) => (
                                <tr className="oh_tr-tr">
                                    <td className="oh_td-td">{entry.date}</td>
                                    <td className="oh_td-td">{entry.description}</td>

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
                
            </div>



            <div onClick = {addEntry} className="od_add_entry">
                <button onClick = {addEntry} className="od_button-add">Add Entry</button>
            </div>

        </div>
    );
}