import React, { Component }  from 'react';
import './Order_List_Staff_Table.css'

const Order_History_Staff_Table = ({ data }) => {
    return (
        <table className="oh_table-table">
            <tbody>
                <tr className="oh_tr-tr">
                    <th className="oh_th-th">Customer ID</th>
                    <th className="oh_th-th">Name</th>
                    <th className="oh_th-th">Order ID</th>
                    <th className="oh_th-th">Date Ordered</th>
                    <th className="oh_th-th">Order Status</th>
                </tr>

                {data.map((item) => (
                    <tr className="oh_tr-tr" key={item.cust_id}>
                        <td className="oh_td-td">{item.cust_id}</td>
                        <td className="oh_td-td">{item.name}</td>
                        <td className="oh_td-td">{item.order_id}</td>
                        <td className="oh_td-td">{item.date}</td>
                        <td className="oh_td-td">{item.status}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    );
};

export default Order_History_Staff_Table;