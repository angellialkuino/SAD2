import React from 'react';
import { useNavigate } from 'react-router-dom';


const StaffListTable = ({ staffListData }) => {
    const navigate = useNavigate();

    const staffDetails = (userID)=>{
        navigate("/owner/view-staff",{state:{userID:userID}});
    }
    return (
        <table className="table-table">
            <tbody>
                <tr className="tr-tr">
                    <th className="th-th">Name</th>
                    <th className="th-th">Email</th>
                    <th className="th-th">Contact</th>
                </tr>
                {staffListData.map((staff) => (
                    <tr className="tr-tr" key={staff.user_id.slice(-4)} onClick={staffDetails(staff.user_id)}>
                        <td className="td-td">{staff.full_name}</td>
                        <td className="td-td">{staff.email}</td>
                        <td className="td-td">{staff.phone_number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StaffListTable;