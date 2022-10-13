import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CheckBoxTable from "./OrderDetailsCheckBox";
import './OrderDetails.css';
const orderInfoJSON = require("./place-holder-json/getOrderDetails.json");


function OrderDetailsStaff() {

//placeholder coode******
const {order_info}=orderInfoJSON;
console.log(order_info);
const orderID = "29dafda5-7848-4e1f-913b-a98652a7e0cd";
//placeholder coode******

const navigate = useNavigate();

// const location = useLocation();
// const orderID = location.state;
const [orderInfo, setOrderInfo] = useState(order_info);


const [inviteType, setUserIinviteType] = useState("N/A");
const [material, setMaterial] = useState("N/A");
const [eventDate, setEventDate] = useState("N/A");
const [motif, setMotif] = useState("N/A");
const [inviteTitle, setInviteTitle] = useState("N/A");
const [fontStyle, setFontStyle] = useState("N/A");
const [contentLink, setContentLink] = useState("N/A");
const [numOfInv, setNumOfInv] = useState(0);
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

const [isDisabled, setIsDisabled] = useState(true);
const [isDisabledArr, setIsDisabledArr] = useState(true);


const [errMsg, setErrMsg] = useState('');
const [successMsg, setSuccessMsg] = useState('');

// useEffect( () => {
//     const getOrderDetails = async () => {        
//         await Axios.get('http://localhost:5000/api/order/order-info',
//             {params:{order_id: orderID}, 
//                 withCredentials: true }
//         ).then((res) => {
//             //console.log(res);
//             //console.log(res.data.order_info);
//             if(res.status===200){
//                 setSuccessMsg(res.data.message);
//                 setOrderInfo(res.data.order_info);
                
//             }else if (res.status===400){
//                 setErrMsg(res.data.message); 
//             }
            
//         });
//     }
    
// getOrderDetails();
// }, [])

useEffect(()=>{

    if (Object.keys(orderInfo).length !== 0){
        //setOrderID(orderInfo.order.order_id);
        //setUserID(orderInfo.order.user_id);
        setUserIinviteType(orderInfo.order.invite_type);
        setMaterial(orderInfo.order.material);
        setEventDate(orderInfo.order.event_date.slice(0, 19).replace('T', ' '));
        setMotif(orderInfo.order.motif);
        setInviteTitle(orderInfo.order.invite_title);
        setFontStyle(orderInfo.order.font_style);
        setContentLink(orderInfo.order.content_link);
        setNumOfInv(orderInfo.order.num_of_invites);
        setPegLink(orderInfo.order.peg_link);
        setDateOrdered(orderInfo.order.date_ordered.slice(0, 19).replace('T', ' '));
        setOrderDeadline(orderInfo.order.order_deadline.slice(0, 19).replace('T', ' '));
        setClaimType(orderInfo.order.claim_type);
        setOrderStatus(orderInfo.order.order_status); //might be unneccessary info

        setItemsArray(orderInfo.order_details);

        setUnitCost(orderInfo.billing_info.unit_cost);
        setSubTotal(orderInfo.billing_info.sub_total);
        setRevFee(orderInfo.billing_info.total_revision_fee);
        setRushFee(orderInfo.billing_info.rush_fee);
        setLessMinFee(orderInfo.billing_info.less_min_fee);
        setPaymentMethod(orderInfo.billing_info.payment_method);
    }
},[orderInfo])

const updateOrderStatus = async (e) => {
    const newOrderStatus = e.target.value;
    await Axios.put('http://localhost:5000/api/order/update-status',
        { order_id: orderID, order_status: newOrderStatus },
        { withCredentials: true }
    ).then((res) => {
        if(res.status===200){
            setOrderStatus(newOrderStatus);
            if(newOrderStatus=="Completed"){
                navigate("/staff/order-list");
            }
            setSuccessMsg(res.data.message);
        }else if (res.status===400){
            setErrMsg(res.data.message); 
        }  
    }).catch((err) => {
        console.log(err);
    });
}

//////////////////////////////
const cancelOrder = async () => {
    await Axios.put('http://localhost:5000/api/order/cancel-order',
        { order_id: orderID, order_status: "Canceled" },
        { withCredentials: true }
    ).then((res) => {
        if(res.status===200){
            setSuccessMsg(res.data.message);
            navigate("/staff/order-list");
            // Show pop up? then Navigate to order list!!!
        }else if (res.status===400){
            setErrMsg(res.data.message); 
        }
    }).catch((err) => {
        console.log(err);
    });
}

const updateOrder = async () => {
    await Axios.put('http://localhost:5000/api/order/update-order',
        { 
            order: {
                order_id: orderID,
                invite_type: inviteType,
                material: material,
                event_date: eventDate,
                motif: motif,
                invite_title: inviteTitle,
                font_style: fontStyle,
                content_link: contentLink,
                num_of_invites: numOfInv,
                peg_link: pegLink,
                order_deadline: orderDeadline,
                claim_type: claimType
            }
    
        },
        { withCredentials: true }
    ).then((res) => {
        if(res.status===200){
            setSuccessMsg(res.data.message);
            setIsDisabled(true);
        }else if (res.status===400){
            setErrMsg(res.data.message);
        }  
    }).catch((err) => {
        console.log(err);
    });
}

//////////////////////////////

const updateBillingInfo = ()=> {
    let newUnitCost =0;
    for( let x in itemsArray){
        
        if('quantity' in itemsArray[x]){
            newUnitCost += itemsArray[x].price*itemsArray[x].quantity;
        }else{
            newUnitCost += itemsArray[x].price;}
    }
    
    let partialTotal = subTotal-rushFee-unitCost + newUnitCost;
    if(rushFee){
        setRushFee(partialTotal*0.4);
        setSubTotal(partialTotal*1.4)
    }else{
        setSubTotal(partialTotal)
    }
    setUnitCost(newUnitCost);
}

const updateOrderDetails = async () => {
    await Axios.put('http://localhost:5000/api/order/update-order-details',
        { order_id: orderID, order_details: itemsArray },
        { withCredentials: true }
    ).then((res) => {
        if(res.status===200){
            setSuccessMsg(res.data.message);
            setIsDisabledArr(true);
            updateBillingInfo();
        }else if (res.status===400){
            setErrMsg(res.data.message); 
        }  
    }).catch((err) => {
        console.log(err);
    });
}



    return ( //change the <p> to input tags :")"
        <div className='order-details-main'>
        <div className=".order-first-col">
            <div className='order-div'>
                <h1>ORDER {orderID.slice(-4)}</h1>

                <div className='order-details-footer'>
                    <Link to='/staff/invitation-draft' state={{orderID:orderID}} className="rounded-pill btn btn-info fw-bold nav-hover">View Invitation</Link>
                    <Link to='/staff/order-log' state={{orderID:orderID}} className="rounded-pill btn btn-info fw-bold nav-hover">View Order Log</Link>
                </div>

                <div className='white-inner-div1'>
                    {/* Note: Copy pated from CustAccDetails so css styling classnames dont match!!!!!!! */}
                    <div className="accDetail-body-field">
                        <h3>Date Ordered</h3>
                        <input value={dateOrdered.slice(0, 10)} type="text" disabled={true} onChange={(e) => setDateOrdered(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Invitation Type</h3>
                        <input value={inviteType} type="text" disabled={isDisabled} onChange={(e) => setUserIinviteType(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Material</h3>
                        <input value={material} type="text" disabled={isDisabled} onChange={(e) => setMaterial(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Date of Event</h3>
                        <input value={eventDate.slice(0, 10)} type="text" disabled={isDisabled} onChange={(e) => setEventDate(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Motif</h3>
                        <input value={motif} type="text" disabled={isDisabled} onChange={(e) => setMotif(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Invitation Title</h3>
                        <input value={inviteTitle} type="text" disabled={isDisabled} onChange={(e) => setInviteTitle(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Font Style</h3>
                        <input value={fontStyle} type="text" disabled={isDisabled} onChange={(e) => setFontStyle(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Content Link</h3>
                        <input value={contentLink} type="text" disabled={isDisabled} onChange={(e) => setContentLink(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>PEG Link</h3>
                        <input value={pegLink} type="text" disabled={isDisabled} onChange={(e) => setPegLink(e.target.value)} className="form-control" />
                    </div>

                    <div className="accDetail-body-field">
                        <h3>Claim Type</h3>
                        <input value={claimType} type="text" disabled={isDisabled} onChange={(e) => setClaimType(e.target.value)} className="form-control" />
                    </div>

                    {isDisabled && <button onClick={()=>setIsDisabled(false)} className="btn btn-dark btn-lg btn-block">Edit Order Information</button>}
                    {!isDisabled && <button onClick={updateOrder} className="btn btn-dark btn-lg btn-block">Update Order</button>}
                        
                </div>
            </div>

            <div className='order-div'>
            <div>
                {!isDisabledArr && <>
                    <CheckBoxTable array={itemsArray} onItemsArray={setItemsArray} updateReq={updateOrderDetails}/>
                    {/* <button onClick={updateOrderDetails} className="btn btn-dark btn-lg btn-block">!!Update Order</button> */}
                </>}

                {isDisabledArr && <>
                    <table>
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Type</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemsArray.map((val) => {
                            return(
                                <tr key={val.item_name}> 
                                    <td>{val.item_name}</td>
                                    <td>{val.type}</td>
                                    <td>{val.color}</td>
                                    <td>{val.size}</td>
                                    <td>{val.quantity}</td>
                                    <td>{val.price}</td>
                                </tr>
                            );
                        })}  
                        </tbody>                  
                    </table> 
                    <button onClick={()=>setIsDisabledArr(false)} className="btn btn-dark btn-lg btn-block">Edit Order Items</button>
                </>}

            </div>
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
                        <p>{orderDeadline.slice(0, 10)}</p>

                        <select name="orderStatus" value={orderStatus} onChange={updateOrderStatus}>
                            {/* <option value={orderStatus} disabled hidden>{orderStatus}</option> */}
                            <option value="Pending">Pending</option>
                            <option value="Creating">Creating</option>
                            <option value="Finalizing">Finalizing</option>
                            <option value="Ready to Claim!">Ready to Claim!</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <div className='order-status-button-row'>
                            <button onClick={cancelOrder} className='button'>Cancel Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailsStaff;