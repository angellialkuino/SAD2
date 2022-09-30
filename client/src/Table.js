import React from 'react';

const Table = ({ staffListData }) => {
    return (
        <table className="table-table">
            <tbody>
                <tr className="tr-tr">
                    <th className="th-th">Name</th>
                    <th className="th-th">Email</th>
                    <th className="th-th">Contact</th>
                </tr>
                {staffListData.map((staff) => (
                    <tr className="tr-tr" key={staff.id}>
                        <td className="td-td">{staff.name}</td>
                        <td className="td-td">{staff.email}</td>
                        <td className="td-td">{staff.contact}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;