import Axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import './InvitationDraft.css';

function InvitationDraftStaff() {

    // return function to render uploaded file?
    //how to do this?
    // const showImage = () => {
    //     Axios.get('http://localhost:5000/api/staff/invite-draft', {
    //         params: {
                    //the order id is the name of the image
    //             order_id: "####"
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    const [fileData, setFileData] = useState(null);
    const [orderID, setOrderID] = useState('do this work');

    const imageChangeHandler = (e) => {
        console.log(e.target.files[0]);
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('fileData: ',fileData);

        const blob = fileData.slice(0, fileData.size, 'image/png');;
        console.log('renamedFile fileData: ',blob);
        const renamedFile = new File([blob], `${orderID}.png`, {type: 'image/png'});
        console.log('renamedFile fileData: ',renamedFile);

        // Handle File Data from the state Before Sending
        const data = new FormData();

        data.append("invite_draft", fileData);
        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        Axios.post('http://localhost:5000/api/order/update-invite-draft',
            data
        ).then((res) => {
            console.log(res.data.path); //path of image: image\filename.jpg
            console.log("success");
            //showImage();
        }).catch(err => {
            console.log(err)
        });
    };

    return (
        <div className='invitation-draft-frame'>
            <h1 className='invitation-draft-h1'>Invitation Draft</h1>
            <div className='invitation-draft-inner-frame'>
                <img className='draft-img' src={`../../server/images/${orderID}.png`} alt="Invitation Draft" />
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