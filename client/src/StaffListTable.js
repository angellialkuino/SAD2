import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderHistoryStaffTable.css'

const StaffListTable = ({ staffListData }) => {
    const navigate = useNavigate();

    return (
        <table className="oh_table-table">
            <tbody>
                <tr className="oh_tr-tr">
                    <th className="oh_th-th">Name</th>
                    <th className="oh_th-th">Email</th>
                    <th className="oh_th-th">Contact</th>
                </tr>
                {staffListData.map((staff) => {
                    return(
                    <tr className="oh_tr-tr" key={staff.user_id.slice(-4)} onClick={()=>navigate("/owner/view-staff",{state:staff.user_id})}>
                        <td className="oh_td-td">{staff.full_name}</td>
                        <td className="oh_td-td">{staff.email}</td>
                        <td className="oh_td-td">{staff.phone_number}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    );
};

export default StaffListTable;