import React from 'react';
import './OrderDocumentationTable.css'

const OrderDocumentationTable = ({ data }) => {
    return (
        <table className="oh_table-table">
            <tbody>
                <tr className="oh_tr-tr">
                    <th className="oh_th-th">Date</th>
                    <th className="oh_th-th">Description</th>
                </tr>

                {data.map((item) => (
                    <tr className="oh_tr-tr">
                        <td className="oh_td-td">{item.date}</td>
                        <td className="oh_td-td">{item.description}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default OrderDocumentationTable;