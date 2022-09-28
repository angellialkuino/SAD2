import React from 'react';

const Table = ({ data }) => {
    return (
        <table className="table-table">
            <tbody>
                <tr className="tr-tr">
                    <th className="th-th">Name</th>
                    <th className="th-th">Email</th>
                    <th className="th-th">Contact</th>
                </tr>
                {data.map((item) => (
                    <tr className="tr-tr" key={item.id}>
                        <td className="td-td">{item.name}</td>
                        <td className="td-td">{item.email}</td>
                        <td className="td-td">{item.contact}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;