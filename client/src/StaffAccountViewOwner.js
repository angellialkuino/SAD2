import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';

function StaffAccountViewOwner() {
    const [user, setUser] = useState({});
    const [userID, setUserID] = useState("");
    const [name, setName] = useState("N/A");
    const [email, setEmail] = useState("N/A");
    const [contactNum, setcontactNum] = useState("N/A");

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    //how to pass the id of the selected staff from previous page???
    useEffect( () => {

        const getAccDetails = async () => {
            await Axios.get('http://localhost:5000/api/owner/staff-account',
                {params:{user_id: "84000fad-c7ed-4041-8039-0826259a42b6"}, 
                withCredentials: true } 
            ).then((res) => {
                if(res.status===200){
                    setSuccess(true);
                    setSuccessMsg(res.data.message);
                    setUser(res.data.user); //or is it res.body.user                    
                }else if (res.status===400){
                    setErrMsg(res.body.message); //or is it res.body.message
                }
                
            }).catch(err => {
                console.log(err);
            });
        }

        getAccDetails();
    }, [])


    useEffect(()=>{
        if(Object.keys(user).length !== 0){
            setUserID(user.user_id);
            setName(user.full_name);
            setEmail(user.email);
            setcontactNum(user.phone_number);
        }        
    },[user])

    const updateAccDetails = async () => {
        await Axios.put('http://localhost:5000/api/customer/update',
            { 
                user_id: userID,
                name: name,
                email: email,
                phone_number: contactNum
        
            },
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                setSuccess(true);
                setSuccessMsg(res.body.message);
            }else if (res.status===400){
                setErrMsg(res.body.message); //or is it res.body.message
            }
            
        });
    }

    return (
        <div className="profile-div">
            <h2 className="site-title">CREATE STAFF PROFILE</h2>
            {user && <>
            <div className="profile-info">
                <div className='label-textfield'>
                    <h4>Name</h4>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='profile-textfield' />
                </div>
                <div className='label-textfield'>
                    <h4>Email</h4>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='profile-textfield' />
                </div>
                <div className='label-textfield'>
                    <h4>Contact Number</h4>
                    <input type='text' value={contactNum} onChange={(e) => setcontactNum(e.target.value)} className='profile-textfield' />
                </div>
                {/* <div className='label-textfield'>
                    <h4>Position</h4>
                    <input type='text' className='profile-textfield' />
                </div>
                <div className='label-textfield'>
                    <h4>Status</h4>
                    <input type='text' className='profile-textfield' />
                </div> */}
            </div>
            </>}
            <div className='profile-pic'>
                <div className='second-div-frame'></div>
                <button className='sub-button'>Upload Photo</button>
                <p>Must not exceed 40 mb.</p>

            </div>
            <div className="button-row">
                <button className="sub-button">Delete</button>
                <button className="sub-button">Update</button>
            </div>
        </div>
    );
}

export default StaffAccountViewOwner;