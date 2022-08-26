import React, { Component } from 'react';

class StaffProfile extends Component {
    render() {
        return (
            <div className="profile-div">
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
                    <button className='button'>Upload Photo</button>
                    <p>Must not exceed 40mb</p>
                </div>
            </div>
        );
    }
}

export default StaffProfile;