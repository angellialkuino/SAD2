import React, { Component } from "react";
import { useState } from "react";
var data = require("./StaffListPlaceholder.json");

export default function StaffList() {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    return (
        <div className="div-frame">
            <div className="headers">
                <h4 className="title">Staff List</h4>
                <ul>
                    <li className="headers">
                        <input type="text" className="textfield" value={value} onChange={onChange} />
                        <button className="button" onClick={() => onSearch(value)}> Search </button>


                    </li>
                    <li><h5 className="button">Add</h5></li>
                </ul>


            </div>
            <div className="staff-info">
                <ul>
                    <li><h5 className="">Name</h5></li>
                    <li><h5 className="">Email</h5></li>
                    <li><h5 className="">Contact</h5></li>
                </ul>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.full_name.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.full_name)}
                                className="dropdown-row"
                                key={item.full_name}
                            >
                                {item.full_name}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );

}

