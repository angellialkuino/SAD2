import React, { useEffect, useState } from "react";
import { Axios } from "axios";
import StaffListTable from "./StaffListTable";

// var Users = require("./StaffListPlaceholder.json");

function StaffList() {
    const [staffList, setStaffList] = useState([])
    const [query, setQuery] = useState("");
    const keys = ["name", "email", "contact"];
    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await Axios.get('http://localhost:5000/api/staff/staff-list');
                setStaffList(response.data);
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

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))

        );

    };

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
            {<StaffListTable staffListData={search(staffList)} />}
        </div>
    );
}

export default StaffList