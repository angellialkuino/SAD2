import React, { useEffect, useState } from "react";
import Axios from "axios";
import StaffListTable from "./StaffListTable";
import { Link } from "react-router-dom";
const users = require("./place-holder-json/getStaffList.json");

function StaffList() {

    const [staffList, setStaffList] = useState(users);
    // useEffect(() => {        
    //     const fetchStaff = async () => {
    //         try {
    //             const response = await Axios.get('http://localhost:5000/api/owner/staff-list');
    //             //console.log(response);
    //             setStaffList(response.data.staff_list);
    //         } catch (err) {
    //             if (err.response) {
    //                 // Not in the 200 response range 
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers);
    //             } else {
    //                 console.log(`Error: ${err.message}`);
    //             }
    //         }
    //     }

    //     fetchStaff();
    // }, [])



    return (
        <div className="div-frame staff-list">
            <header className="headers">
                <h4 className="title">Staff List</h4>
            </header>

            {staffList.length > 0 && <StaffListTable staffListData={staffList} />}
            <footer className="form1-footer w-25">
                <button className="rounded-pill btn btn-info fw-bold nav-hover">
                    <Link to="/owner/create-staff" className="no-deco">Add New Staff</Link>
                </button>
            </footer>
        </div>
    );
}

export default StaffList