import React, { useEffect, useState } from "react";
import Axios from "axios";
import StaffListTable from "./StaffListTable";

// var Users = require("./StaffListPlaceholder.json");

function StaffList() {
    const [staffList, setStaffList] = useState([])
    
    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await Axios.get('http://localhost:5000/api/owner/staff-list');
                //console.log(response);
                setStaffList(response.data.staff_list);
            } catch (err) {
                if (err.response) {
                    // Not in the 200 response range 
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }

        fetchStaff();
    }, [])



    return (
        <div className="div-frame staff-list">
            <div className="headers">
                <h4 className="title">Staff List</h4>
                <input
                    className="search"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
                <button className="button">Add</button>
            </div>
            {staffList.length>0 && <StaffListTable staffListData={staffList} />}
        </div>
    );
}

export default StaffList