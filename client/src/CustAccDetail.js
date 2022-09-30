import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import './CustAccDetail.css';

function CustAccDetail() {
    const [user, setUser] = useState({});
    const [userID, setUserID] = useState("");
    const [name, setName] = useState("N/A");
    const [email, setEmail] = useState("N/A");
    const [address, setAddress] = useState("N/A");
    const [barangay, setBarangay] = useState("N/A");
    const [postalCode, setPostalCode] = useState("N/A");
    const [fbAcc, setfbAcc] = useState("N/A");
    const [contactNum, setcontactNum] = useState("N/A");
    //const [pwd, setPwd] = useState("N/A");

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');


    useEffect(async () => {
        console.log(JSON.stringify(res));

        await Axios.get('http://localhost:5000/api/customer/my-account',
            { user_id: "24753869-a2a9-4070-bc5e-e942ab341372" },
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                setSuccess(true);
                setSuccessMsg(res.message);
                setUser(res.user); //or is it res.body.user
                setUserID(res.user.user_id);
                setName(res.user.full_name);
                setEmail(res.user.email);
                setAddress(res.user.address);
                setBarangay(res.user.barangay);
                setPostalCode(res.user.postal_code);
                setfbAcc(res.user.fb_account);
                setcontactNum(res.user.phone_number);
                //setPwd(res.user.password);
            }else if (res.status===400){
                setErrMsg(res.message); //or is it res.body.message
            }
            
        });
    
    }, [])
     

    const updateAccDetails = async () => {
        await Axios.put('http://localhost:5000/api/customer/update',
            { 
                user_id: userID,
                name: name,
                email: email,
                address: address,
                barangay: barangay,
                postal_code: postalCode,
                fb_account: fbAcc,
                phone_number: contactNum
        
            },
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                setSuccess(true);
                setSuccessMsg(res.message);
            }else if (res.status===400){
                setErrMsg(res.message); //or is it res.body.message
            }
            
        });
    }


//push update info button makes read only false; update calls func and makes read onlye true
//kulang funcs to change read only bool and the buttons uehugeuh

    return (
        <div className="accDetail">
            <div className="accDetailMain">
                <div className="accDetail-body">

                    <div className="accDetail-header">
                        <h2>Account Details</h2>
                    </div>

                    <div className="accDetail-body-left">

                        <div className="accDetail-body-field">
                            <h3>Name</h3>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Email</h3>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Barangay</h3>
                            <input type="text" value={barangay} onChange={(e) => setBarangay(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Address</h3>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Facebook Account</h3>
                            <input type="text" value={fbAcc} onChange={(e) => setfbAcc(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Contact Number</h3>
                            <input type="text" value={contactNum} onChange={(e) => setcontactNum(e.target.value)} className="form-control" />
                        </div>

                        {/* <div className="accDetail-body-field">
                            <h3>Password</h3>
                            <input type="text" value={pwd} className="form-control" />
                        </div> */}

                        <div className="accDetail-body-field">
                            <h3>Postal Code</h3>
                            <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="form-control" />
                        </div>
                    </div>

                    <div className="accDetail-body-bottom">
                        <button className="btn btn-dark btn-lg btn-block">Log Out</button>
                        <button className="btn btn-dark btn-lg btn-block">Update Account</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CustAccDetail;