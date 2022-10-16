import React from 'react';
import { Link } from 'react-router-dom';
import "./TermsAndConditions.css";

function TermsAndConditions() {
    return (
        <div>
            <div className="termsAndConditions-main">
                <h1>Terms and Conditions</h1>

                <div className="termsAndConditions-body">
                    <ul>
                    <li>50% of total amount is required as downpayment before layout. </li>
                    <li>The balance shall be paid upon completion of the invites. COD, Cash or Online payment will be accepted upon full payment. </li>
                    <li>Invites will not be released without full payment. </li>
                    <li>In case of cancellation, downpayment will be forfeited. Client will also be charged P1,500.00 for layout fee. </li>
                    <li>If the order has been completed, client will be charged full cost. </li>
                    <li>Minimum order is 30pcs. Layout fee is free for the first layout. If the client decides to change the layout.
                        <br /> P1,500.00 will be charged for every changed layout. </li>
                    <li>If order is less than the minimum (30pcs). Additional P1,500.00 will be charged for layout. </li>
                    <li>40% rush fee will be charged if production will be done less than 14 working days. </li>
                    <li>RE-ORDERS ARE DISCOURAGED. WE SUGGEST THAT YOU ORDER EXTRA INVITES, </li>
                    <li>IF CLIENT INSISTS ON REORDER. THERE WILL BE MINIMUM ORDER OF 20 PCS. </li>
                    </ul>
                   
                </div>

                <div className='termsAndConditions-btn'>
                    <Link to='/customer' className="rounded-pill tAC-btn btn-info fw-bold nav-hover">Cancel</Link>
                    <Link to='/form/order-form-1' className="rounded-pill tAC-btn btn-info fw-bold nav-hover">I Agree</Link>
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;