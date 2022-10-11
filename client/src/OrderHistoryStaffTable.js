import React from 'react';
import './OrderListStaffTable.css'

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
                    <tr className="oh_tr-tr" key={item.cust_id.slice(-4)}>
                        <td className="oh_td-td">{item.cust_id.slice(-4)}</td>
                        <td className="oh_td-td">{item.name}</td>
                        <td className="oh_td-td">{item.order_id.slice(-4)}</td>
                        <td className="oh_td-td">{item.date.slice(0, 10)}</td>
                        <td className="oh_td-td">{item.status}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default Order_History_Staff_Table;