import React, { Component } from "react";

class StaffAccountViewOwner extends Component {
    render() {
        return (
            <div className="profile-div">
                <h2 className="site-title">CREATE STAFF PROFILE</h2>
                <div className="profile-info">
                    <div className='label-textfield'>
                        <h4>Name</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div className='label-textfield'>
                        <h4>Email</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div className='label-textfield'>
                        <h4>Contact Number</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div className='label-textfield'>
                        <h4>Position</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                    <div className='label-textfield'>
                        <h4>Status</h4>
                        <input type='text' className='profile-textfield' />
                    </div>
                </div>
                <div className='profile-pic'>
                    <div className='second-div-frame'></div>
                    <button className='sub-button'>Upload Photo</button>
                    <p>Must not exceed 40 mb.</p>

                </div>
                <div className="button-row">
                    <button className="sub-button">Delete</button>
                    <button className="sub-button">Update</button>
                </div>
            </div>
        );
    }
}

export default StaffAccountViewOwner;