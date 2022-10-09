import React from 'react';
import { Link } from 'react-router-dom';
import "./TermsAndConditions.css";

function TermsAndConditions() {
    return (
        <div>
            <div className="termsAndConditions-main">
                <h1>Terms and Conditions</h1>

                <div className="termsAndConditions-body">
                    <p>• 50% of total amount is required as downpayment before layout. </p>
                    <p>• The balance shall be paid upon completion of the invites. Only cash payment will be accepted upon full payment. </p>
                    <p>• Invites will not be released without full payment. </p>
                    <p>• In case of cancellation, downpayment will be forfeited. Client will also be charged P1,500.00 for layout fee. </p>
                    <p>• If the order has been completed, client will be charged full cost. </p>
                    <p>• Minimum order is 30pcs. Layout fee is free for the first layout. If the client decides to change the layout.
                        <br /> P1,500.00 will be charged for every changed layout. </p>
                    <p>• If order is less than the minimum (30pcs). Additional P1,500.00 will be charged for layout. </p>
                    <p>• 40% rush fee will be charged if production will be done less than 14 working days. </p>
                    <p>• COD or Over the Counter Accepted as of now. </p>
                    <p>RE ORDERS ARE DISCOURAGED. WE SUGGEST THAT YOU ORDER EXTRA INVITES, </p>
                    <p>IF CLIENT INSISTS ON REORDER. THERE WILL BE MINIMUM ORDER OF 20 PCS. </p>
                </div>
            </div>

            <div className='termsAndConditions-btn'>
                <Link to='/' className="rounded-pill btn btn-info fw-bold nav-hover">Cancel</Link>
                <Link to='/order-form-1' className="rounded-pill btn btn-info fw-bold nav-hover">I Agree</Link>
            </div>
        </div>
    );
}

export default TermsAndConditions;