import React, { Component } from 'react';
import './InvitationDraft.css';

class InvitationDraftStaff extends Component {
    render() {
        return (
            <div className='invitation-draft-frame'>
                <h1 className='invitation-draft-h1'>Invitation Draft</h1>
                <div className='invitation-draft-inner-frame'>
                    <img className='draft-img' src={process.env.PUBLIC_URL + '/images/invitationdraft.jpg'} alt="Invitation Draft" />
                </div>

                <div className='order-being-confirmed-footer'>
                    <button className='button'>Back</button>
                    <button className='button'>Update Pickup</button>
                </div>
            </div>
        );
    }
}

export default InvitationDraftStaff;