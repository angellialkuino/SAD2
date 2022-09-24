import { Axios } from 'axios';
import React, { Component, useState, useEffect } from 'react';
import './InvitationDraft.css';

function InvitationDraftStaff() {

    // return function to render uploaded file?
    //how to do this?
    // useEffect(() => {
    //     Axios.get('http://localhost:5000/api/staff/invite-draft', {
    //         params: {
    //             //how to get the right image based on the order?
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    const [fileData, setFileData] = useState();

    const imageChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Handle File Data from the state Before Sending
        const data = new FormData();

        data.append("image", fileData);
        Axios.post('http://localhost:5000/api/order/update-invite-draft', {
            invite_draft: fileData
        }).then(() => {
            console.log("success");
        });

        //AJAX method if Axios method doesn't work
        // fetch("http://localhost:5000/single", {
        //     method: "POST",
        //     body: data,
        // })
        //     .then((result) => {
        //         console.log("File Sent Successful");
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
    };

    return (
        <div className='invitation-draft-frame'>
            <h1 className='invitation-draft-h1'>Invitation Draft</h1>
            <div className='invitation-draft-inner-frame'>
                <img className='draft-img' src={process.env.PUBLIC_URL + '/images/invitationdraft.jpg'} alt="Invitation Draft" />
            </div>

            <div className='order-being-confirmed-footer'>
                <button className='button'>Back</button>
                <form onSubmit={onSubmitHandler}>
                    {/* Choose File button */}
                    <button className='button'><input type="file" onChange={imageChangeHandler} /></button>

                    <button className='button' type="submit">Update Picture</button>
                </form>
                {/* <button className='button'>Update Picture</button> */}
            </div>
        </div>
    );
}

export default InvitationDraftStaff;