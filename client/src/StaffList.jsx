import React, { Component } from "react";

class StaffList extends Component {
    render() {
        return (
            <div className="div-frame">
                <div className="headers">
                    <h4 className="title">Staff List</h4>
                    <ul>
                        <li><h5 className="button">Search</h5></li>
                        <li><h5 className="button">Add</h5></li>
                    </ul>


                </div>
                <div className="headers">
                    <h4 className="title">Name</h4>
                    <ul>
                        <li><h5 className="">Email</h5></li>
                        <li><h5 className="">Contact</h5></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default StaffList;