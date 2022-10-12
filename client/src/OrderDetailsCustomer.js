import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetailsCustomer() {
    const location = useLocation();
    const {orderID} = location.state;

    const [orderInfo, setOrderInfo] = useState({});    
    
    //const [orderID, setOrderID] = useState("2993f16f-5ea2-4177-9d5e-1a4ac76586be");
    // const [userID, setUserID] = useState("N/A");
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
    const [revFee, setRevFee] = useState(0);
    const [rushFee, setRushFee] = useState(0);
    const [lessMinFee, setLessMinFee] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("N/A");



    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect( () => {
        console.log('orderID: ', orderID);
        const getOrderDetails = async () => {        
            await Axios.get('http://localhost:5000/api/order/order-info',
                {params:{order_id: orderID}}, 
                {withCredentials: true }
            ).then((res) => {
                //console.log(res);
                if(res.status===200){
                    setSuccessMsg(res.data.message);
                    setOrderInfo(res.data.order_info);
                    
                }else if (res.status===400){
                    setErrMsg(res.data.message); 
                }
                
            }).catch((err)=>{
                console.log(err.response.message);
            });
        }
        
    getOrderDetails();
    }, []) //does it work when empty???? should it have orderID

    useEffect(()=>{

        if (Object.keys(orderInfo).length !== 0){
        //console.log(`order info: \n${JSON.stringify(orderInfo)}`);

            //setOrderID(orderInfo.order.order_id);
            // setUserID(orderInfo.order.user_id);
            setUserIinviteType(orderInfo.order.invite_typ);
            setMaterial(orderInfo.order.material);
            setEventDate(orderInfo.order.event_date.slice(0, 10));
            setMotif(orderInfo.order.motif);
            setInviteTitle(orderInfo.order.invite_title);
            setFontStyle(orderInfo.order.font_style);
            setContentLink(orderInfo.order.content_link);
            setNumOfInv(orderInfo.order.num_of_invites);
            setPegLink(orderInfo.order.peg_link);
            setDateOrdered(orderInfo.order.date_ordered.slice(0, 10));
            setOrderDeadline(orderInfo.order.order_deadline.slice(0, 10));
            setClaimType(orderInfo.order.claim_type);
            setOrderStatus(orderInfo.order.order_status); 

            setItemsArray(orderInfo.order_details);

            setUnitCost(orderInfo.billing_info.unit_cost);
            setSubTotal(orderInfo.billing_info.sub_total);
            setRevFee(orderInfo.billing_info.total_revision_fee);
            setRushFee(orderInfo.billing_info.rush_fee);
            setLessMinFee(orderInfo.billing_info.less_min_fee);
            setPaymentMethod(orderInfo.billing_info.payment_method);
        }
    },[orderInfo])

    return ( 
        <div className='order-details-main'>
            <div className='order-div'>
                <h1>ORDER {orderID.slice(-4)}</h1>
                <div className='white-inner-div1'>
                    <h5>Date Ordered</h5>
                    <p>{dateOrdered}</p>
                    <h5>Invitation Type</h5>
                    <p>{inviteType}</p>
                    <h5>Material</h5>
                    <p>{material}</p>
                    <h5>Date of Event</h5>
                    <p>{eventDate}</p>
                    <h5>Motif</h5>
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
                    <Link to='/customer/invitation-draft' state={{orderID:orderID}} className="rounded-pill btn btn-info fw-bold nav-hover">View Invitation</Link>
                    <Link to='/customer/order-log' state={{orderID:orderID}} className="rounded-pill btn btn-info fw-bold nav-hover">View Order Log</Link>
                </div>

            </div>
            <div className='payment-status-div'>
                <div className='payment-details'>
                    <h1>Payment Details</h1>
                    <div className='white-inner-div1'>
                        <p>Number of Invites: {numOfInv}</p>
                        <p>Amount per Invite: {unitCost}</p>
                        <p>Additional Fees:</p>
                        <p>Total Revision Fee: {revFee || 0}</p>
                        <p>Total Rush Fee: {rushFee || 0}</p>
                        <p>Total Less than Min Fee: {lessMinFee || 0}</p>
                        <h5>TOTAL AMOUNT DUE: {subTotal}</h5>
                        <p>Payment Method: {paymentMethod}</p>

                    </div>
                </div>
                <div className='order-status'>
                    <h1>Order Status</h1>
                    <div className='white-inner-div2'>
                        <h5>Invites Should Be Finished by:</h5>
                        <p>{orderDeadline}</p>
                        <h3>Status: {orderStatus}</h3>
                        <button className='button'>Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailsCustomer;