import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import './CustAccDetail.css';
import { useOutletContext,useNavigate } from "react-router-dom";

function CustAccDetail() {
    const navigate = useNavigate();

    const userID = useOutletContext();
    const [isDisabled, setIsDisabled] =useState(true);
    const [user, setUser] = useState({});
    const [name, setName] = useState("N/A");
    const [email, setEmail] = useState("N/A");
    const [address, setAddress] = useState("N/A");
    const [barangay, setBarangay] = useState("N/A");
    const [postalCode, setPostalCode] = useState("N/A");
    const [fbAcc, setfbAcc] = useState("N/A");
    const [contactNum, setcontactNum] = useState("N/A");


    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    useEffect( () => {
        console.log('userID: ', userID);

        const getAccDetails = async () => {
            await Axios.get('http://localhost:5000/api/customer/my-account',
                {params:{user_id: userID}}, 
                {withCredentials: true } 
            ).then((res) => {
                //console.log(res);
                if(res.status===200){
                    setSuccessMsg(res.data.message);
                    setUser(res.data.user); 
                    // console.log(res.data.user);
                    console.log(user);            
                    
                }
            }).catch(err => {
                console.log(err.response.message);

            });
        }

        getAccDetails();
    
    }, [])

    useEffect(()=>{
        if(Object.keys(user).length !== 0){
            setName(user.full_name);
            setEmail(user.email);
            setAddress(user.address);
            setBarangay(user.barangay);
            setPostalCode(user.postal_code);
            setfbAcc(user.fb_account);
            setcontactNum(user.phone_number);     
        }           
    },[user]);

    const allowEdit = () => {
        setIsDisabled(false);
    }

    const updateAccDetails = async () => {
        await Axios.put('http://localhost:5000/api/customer/update',
            { 
                user_id: userID,
                full_name: name,
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
                setSuccessMsg(res.data.message);
                setIsDisabled(true);
            }else if (res.status===400){
                setErrMsg(res.data.message); //or is it res.body.message
            }
            
        }).catch((err) => {
            console.log(err);
        });
    }

    const logOut = async () => {
        await Axios.get('http://localhost:5000/api/customer/log-out',
            { withCredentials: true }
        ).then((res) => {
            setSuccessMsg(res.data.message);
            navigate("/");
        }).catch((err) => {
            console.log(err);
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
                    {user && <>
                    <div className="accDetail-body-left">

                        <div className="accDetail-body-field">
                            <h3>Name</h3>
                            <input disabled={isDisabled} type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Email</h3>
                            <input disabled={isDisabled} type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Facebook Account</h3>
                            <input disabled={isDisabled} type="text" value={fbAcc} onChange={(e) => setfbAcc(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Contact Number</h3>
                            <input disabled={isDisabled} type="text" value={contactNum} onChange={(e) => setcontactNum(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Barangay</h3>
                            <input disabled={isDisabled} type="text" value={barangay} onChange={(e) => setBarangay(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Address</h3>
                            <input disabled={isDisabled} type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
                        </div>

                        <div className="accDetail-body-field">
                            <h3>Postal Code</h3>
                            <input disabled={isDisabled} type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    </>}
                    <div className="accDetail-body-bottom">
                        {isDisabled && <button onClick={allowEdit} className="btn btn-dark btn-lg btn-block">Edit Account</button>}
                        {!isDisabled && <button onClick={updateAccDetails} className="btn btn-dark btn-lg btn-block">Update Account</button>}
                        <button onClick={logOut} className="btn-custaccdetail btn-dark btn-lg btn-block">Log Out</button>
                        
                    </div>

                </div>
            </div>
        </div>
        
        );
}

export default CustAccDetail;