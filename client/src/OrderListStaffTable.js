import React from 'react';
import './OrderHistoryStaffTable.css'

const OrderListStaffTable = ({ data }) => {
    return (
        <table className="oh_table-table">
            <tbody>
                <tr className="oh_tr-tr">
                    <th className="oh_th-th">Order ID</th>
                    <th className="oh_th-th">Name</th>
                    <th className="oh_th-th">Date Ordered</th>
                    <th className="oh_th-th">Order Deadline</th>
                    <th className="oh_th-th">Invitation Type</th>
                    <th className="oh_th-th">Motif</th>
                    <th className="oh_th-th">Quantity</th>
                    <th className="oh_th-th">Status</th>
                </tr>

                {data.map((item) => {
                    return(
                    <tr className="oh_tr-tr" key={item.order_id.slice(-4)}>
                        <td className="oh_td-td">{item.order_id.slice(-4)}</td>
                        <td className="oh_td-td">{item.full_name}</td>
                        <td className="oh_td-td">{item.date_ordered.slice(0, 10)}</td>
                        <td className="oh_td-td">{item.order_deadline.slice(0, 10)}</td>
                        <td className="oh_td-td">{item.invite_type}</td>
                        <td className="oh_td-td">{item.motif}</td>
                        <td className="oh_td-td">{item.num_of_invites}</td>
                        <td className="oh_td-td">{item.order_status}</td>
                    </tr>
                    )
                    
                    })}

            </tbody>
        </table>
    );
};

export default OrderListStaffTable;