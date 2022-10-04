import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function StaffAccountUpdateOwner() {
    const [fileData, setFileData] = useState(null);

    const imageChangeHandler = (e) => {
        console.log(e.target.files[0]);
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Handle File Data from the state Before Sending
        const data = new FormData();

        data.append("invite_draft", fileData);

        Axios.post('http://localhost:5000/api/owner/upload-prof-pic',
            data
        ).then((res) => {
            console.log(res.data.path); //path of image: image\filename.jpg
            console.log("success");
        }).catch(err => {
            console.log(err)
        });
    };


    return (
        <div className="profile-div">
            <h2 className="site-title">UPDATE STAFF ACCOUNT</h2>
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
                {/* <button className='sub-button'>Upload Photo</button> */}
                <form onSubmit={onSubmitHandler}>
                    {/* Choose File button */}
                    <button className='button'><input type="file" onChange={imageChangeHandler} /></button>

                    <button className='button' type="submit">Update Picture</button>
                </form>
                <p>Must not exceed 40 mb.</p>

            </div>
            <div className="button-row">
                <button className="sub-button">Cancel</button>
                <button className="sub-button">Save</button>
            </div>
        </div>
    );
}

export default StaffAccountUpdateOwner;