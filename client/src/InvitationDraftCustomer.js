import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './InvitationDraft.css';

function InvitationDraftCustomer() {
    const navigate = useNavigate();

    const location = useLocation();
    const {orderID} = location.state;

    const [path, setPath] = useState('');
    const [text, setText] = useState('');
    // const [orderID, setOrderID] = useState('a7a40b63-dbe8-4bcc-bec0-5111b86588af');

    useEffect( () => {
        const showImage = async () => {
                await Axios.head(`http://localhost:5000/invite-draft/${orderID}.png`)
                    .then(res => {
                        console.log(res);
                        setPath(`http://localhost:5000/invite-draft/${orderID}.png`);
                        
                    })
                    .catch(err => {
                        setText('No Invite Draft Uploaded Yet');
                        console.log(err)
                    })
            }
            showImage();
    } ,[])


    return (
        <div className='invitation-draft-frame'>
            <h1 className='invitation-draft-h1'>Invitation Draft for Order {orderID.slice(-4)}</h1>
            
            <div className='invitation-draft-inner-frame'>
                {path && <img className='draft-img' src={path}/>}
                {text && <p>{text}</p>}
            </div>

            <div className='order-being-confirmed-footer'>
                <button onClick={() => navigate(-1)} className="btn-invitationdraftcust rounded-pill btn btn-info fw-bold nav-hover">Back</button>
            </div>
        </div>
    );
}

export default InvitationDraftCustomer;