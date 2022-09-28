import React from 'react';
import './Order_History_Staff_Table.css'

const Order_List_Staff_Table = ({ data }) => {
    return (
        <table className="oh_table-table">
            <tbody>
                <tr className="oh_tr-tr">
                    <th className="oh_th-th">Order ID</th>
                    <th className="oh_th-th">Name</th>
                    <th className="oh_th-th">Date Ordered</th>
                    <th className="oh_th-th">Date of Event</th>
                    <th className="oh_th-th">Invitation Type</th>
                    <th className="oh_th-th">Motif/Theme</th>
                    <th className="oh_th-th">Quantity</th>
                    <th className="oh_th-th">Status</th>
                </tr>

                {data.map((item) => (
                    <tr className="oh_tr-tr" key={item.order_id}>
                        <td className="oh_td-td">{item.order_id}</td>
                        <td className="oh_td-td">{item.name}</td>
                        <td className="oh_td-td">{item.date_order}</td>
                        <td className="oh_td-td">{item.date_event}</td>
                        <td className="oh_td-td">{item.type}</td>
                        <td className="oh_td-td">{item.theme}</td>
                        <td className="oh_td-td">{item.quantity}</td>
                        <td className="oh_td-td">{item.status}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default Order_List_Staff_Table;