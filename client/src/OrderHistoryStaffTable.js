import React from 'react';
import { useNavigate} from 'react-router-dom';
import './OrderListStaffTable.css'

const Order_History_Staff_Table = ({ data }) => {
    const navigate = useNavigate();

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

                {data.map((item) => {
                    return(
                    <tr className="oh_tr-tr" key={item.order_id.slice(-4)} onClick={()=> navigate("/staff/order-details",{state:item.order_id})}>
                        <td className="oh_td-td">{item.user_id.slice(-4)}</td>
                        <td className="oh_td-td">{item.full_name}</td>
                        <td className="oh_td-td">{item.order_id.slice(-4)}</td>
                        <td className="oh_td-td">{item.date_ordered.slice(0, 10)}</td>
                        <td className="oh_td-td">{item.order_status}</td>
                    </tr>
                )})}

            </tbody>
        </table>
    );
};

export default Order_History_Staff_Table;