import { useEffect, useState } from "react";
import Table from "./Table";
var Users = require("./StaffListPlaceholder.json");

export default function StaffList() {
    const [query, setQuery] = useState("");
    const keys = ["name", "email", "contact"];
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
            {<Table data={search(Users)} />}
        </div>
    );
}