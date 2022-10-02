import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetailsCustomer() {

    //shouldn't all this infor come from the previous page??? because the order is not saved in the database yet????
    const [orderInfo, setOrderInfo] = useState({});    
    
    const [orderID, setOrderID] = useState("N/A");
    const [userID, setUserID] = useState("N/A");
    const [inviteType, setUserIinviteType] = useState("N/A");
    const [material, setMaterial] = useState("N/A");
    const [eventDate, setEventDate] = useState("N/A");
    const [motif, setMotif] = useState("N/A");
    const [inviteTitle, setInviteTitle] = useState("N/A");
    const [fontStyle, setFontStyle] = useState("N/A");
    const [contentLink, setContentLink] = useState("N/A");
    const [numOfInv, setNumOfInv] = useState("N/A");
    const [pegLink, setPegLink] = useState("N/A");
    const [dateOrdered, setDateOrdered] = useState("N/A");
    const [orderDeadline, setOrderDeadline] = useState("N/A");
    const [claimType, setClaimType] = useState("N/A");
    const [orderStatus, setOrderStatus] = useState("N/A"); //may be uneccessary info

    const [itemsArray, setItemsArray] = useState([]);

    const [unitCost, setUnitCost] = useState(0);
    //const [revFee, setRevFee] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("N/A");



    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    useEffect( () => {
        const getOrderDetails = async () => {        
            await Axios.get('http://localhost:5000/api/order/order-info',
                {params:{order_id: "93ebc2e9-7b45-440f-b87d-43c7c8477267"}, 
                    withCredentials: true }
            ).then((res) => {
                //console.log(res);
                console.log(res.data.order_info);
                if(res.status===200){
                    setSuccess(true);
                    setSuccessMsg(res.data.message);
                    setOrderInfo(res.data.order_info);
                    
                }else if (res.status===400){
                    setErrMsg(res.data.message); 
                }
                
            });
        }
        
    getOrderDetails();
    }, [])

    useEffect(()=>{

        if (Object.keys(orderInfo).length !== 0){
        console.log(`order info: \n${JSON.stringify(orderInfo)}`);

            setOrderID(orderInfo.order.order_id);
            setUserID(orderInfo.order.user_id);
            setUserIinviteType(orderInfo.order.invite_typ);
            setMaterial(orderInfo.order.material);
            setEventDate(orderInfo.order.event_date);
            setMotif(orderInfo.order.motif);
            setInviteTitle(orderInfo.order.invite_title);
            setFontStyle(orderInfo.order.font_style);
            setContentLink(orderInfo.order.content_link);
            setNumOfInv(orderInfo.order.num_of_invites);
            setPegLink(orderInfo.order.peg_link);
            setDateOrdered(orderInfo.order.date_ordered);
            setOrderDeadline(orderInfo.order.order_deadline);
            setClaimType(orderInfo.order.claim_type);
            setOrderStatus(orderInfo.order.order_status); //might be unneccessary info

            setItemsArray(orderInfo.order_details);

            setUnitCost(orderInfo.billing_info.unit_cost);
            setSubTotal(orderInfo.billing_info.sub_total);
            setPaymentMethod(orderInfo.billing_info.payment_method);
        }
    },[orderInfo])

    return ( //this infor is wrong
        <div className='order-details-main'>
            <div className='order-div'>
                <h1>ORDER {orderID}</h1>
                <div className='white-inner-div1'>
                    <h5>Date Ordered</h5>
                    <p>{dateOrdered}</p>
                    <h5>Invitation Type</h5>
                    <p>{inviteType}</p>
                    <h5>Material</h5>
                    <p>{material}</p>
                    <h5>Date of Event</h5>
                    <p>{eventDate}</p>
                    <h5>Motif/Theme</h5>
                    <p>{motif}</p>                    
                    <h5>Invitation Title</h5>
                    <p>{inviteTitle}</p>
                    <h5>Font Style</h5>
                    <p>{fontStyle}</p>
                    <h5>Content Link</h5>
                    <p>{contentLink}</p>
                    <h5>PEG Link</h5>
                    <p>{pegLink}</p>
                    <h5>Claim Type</h5>
                    <p>{claimType}</p>
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* content of table */}
                        {itemsArray.map((val,key) => {
                            return(
                                //add unique key property
                                <tr> 
                                    <td>{val.item_name}</td>
                                    <td>{val.quantity}</td>
                                    <td>{val.price}</td>
                                </tr>
                            );
                        })}  
                        </tbody>                  
                    </table>                    
                </div>
                <div className='order-details-footer'>
                    <Link to='/invitation-draft' className="rounded-pill btn btn-info fw-bold nav-hover">View Invitation</Link>
                    <Link to='/documentation-of-changes' className="rounded-pill btn btn-info fw-bold nav-hover">View Changes</Link>
                </div>

            </div>
            <div className='payment-status-div'>
                <div className='payment-details'>
                    <h1>Payment Details</h1>
                    <div className='white-inner-div1'>
                        <p>Number of Invites: {numOfInv}</p>
                        <p>Amount per Invite: {unitCost}</p>
                        {/* <p>Total Revision Fee: {revFee}</p> */}
                        <p>Subotal: {subTotal}</p>
                        <h5>TOTAL AMOUNT DUE:</h5>
                        <p>Payment Method: {paymentMethod}</p>

                    </div>
                </div>
                <div className='order-status'>
                    <h1>Order Status</h1>
                    <div className='white-inner-div2'>
                        <h5>Invites Should Be Finished by:</h5>
                        <p>{orderDeadline}</p>
                        <ul className="timeline-order">
                            <li className='pending' status="Pending"></li>
                            <li status="Creating"></li>
                            <li status="Finalizing"></li>
                            <li status="Ready to Check"></li>
                            <li status="Ready to Claim!"></li>
                        </ul>
                        <button className='button'>Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailsCustomer;