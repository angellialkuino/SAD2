import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InvitationDraft.css';

class InvitationDraftCustomer extends Component {
    render() {
        return (
            <div className='invitation-draft-frame'>
                <h1 className='invitation-draft-h1'>Invitation Draft</h1>
                <div className='invitation-draft-inner-frame'>
                    <img className='draft-img' src={process.env.PUBLIC_URL + '/images/invitationdraft.jpg'} alt="Invitation Draft" />
                </div>

                <div className='order-being-confirmed-footer'>
                    <Link to='/order-details' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                </div>
            </div>
        );
    }
}

export default InvitationDraftCustomer;