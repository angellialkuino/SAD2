import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InvitationDraft.css';

function InvitationDraftCustomer() {
    const [path, setPath] = useState('');
    const [text, setText] = useState('');
    const [orderID, setOrderID] = useState('93ebc2e9-7b45-440f-b87d-43c7c8477267');

    useEffect( () => {
        const showImage = async () => {
                await Axios.head(`http://localhost:5000/invite-draft/${orderID}.png`)
                    .then(res => {
                        console.log(res);
                        setPath(`http://localhost:5000/invite-draft/${orderID}.png`);
                        
                    })
                    .catch(err => {
                        setText('No Invite Draft Uplaoded Yet');
                        console.log(err)
                    })
            }
            showImage();
    } ,[])


    return (
        <div className='invitation-draft-frame'>
            <h1 className='invitation-draft-h1'>Invitation Draft</h1>
            <div className='invitation-draft-inner-frame'>
                {path && <img className='draft-img' src={path}/>}
                {text && <p>{text}</p>}
            </div>

            <div className='order-being-confirmed-footer'>
                <Link to='/order-details' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
            </div>
        </div>
    );
}

export default InvitationDraftCustomer;