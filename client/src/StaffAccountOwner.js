import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
import "./StaffAccountOwner.css";

function StaffAccountViewOwner() {
    const navigate = useNavigate();

    const location = useLocation();
    const userID = location.state;

    const [isDisabled, setIsDisabled] = useState(true);
    const [user, setUser] = useState({});
    // const [userID, setUserID] = useState("");
    const [name, setName] = useState("N/A");
    const [email, setEmail] = useState("N/A");
    const [contactNum, setcontactNum] = useState("N/A");

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {

        const getAccDetails = async () => {
            await Axios.get('http://localhost:5000/api/owner/staff-account',
                {params: { user_id: userID }},
                { withCredentials: true }
            ).then((res) => {
                if (res.status === 200) {
                    setSuccessMsg(res.data.message);
                    setUser(res.data.user); //or is it res.body.user                    
                } else if (res.status === 400) {
                    setErrMsg(res.body.message); //or is it res.body.message
                }

            }).catch(err => {
                console.log(err);
            });
        }

        getAccDetails();
    }, [])


    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            setName(user.full_name);
            setEmail(user.email);
            setcontactNum(user.phone_number);
        }
    }, [user])

    const allowEdit = () => {
        setIsDisabled(false);
    }

    const updateAccDetails = async () => {
        await Axios.put('http://localhost:5000/api/owner/update-staff',
            {
                user_id: userID,
                full_name: name,
                email: email,
                phone_number: contactNum

            },
            { withCredentials: true }
        ).then((res) => {
            if (res.status === 200) {
                setSuccessMsg(res.data.message);
                setIsDisabled(true);
            } else if (res.status === 400) {
                setErrMsg(res.data.message); //or is it res.body.message
            }

        }).catch((err) => {
            console.log(err);
        });
    }

    const deleteAcc = async () => {
        await Axios.delete('http://localhost:5000/api/owner/staff-delete',
            { user_id: userID },
            { withCredentials: true }
        ).then((res) => {
            if (res.status === 200) {
                setSuccessMsg(res.data.message);
                navigate("/owner/staff-list");
                //Navigate to staff list
            } else if (res.status === 400) {
                setErrMsg(res.data.message); //or is it res.body.message
            }

        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="profile-div-sao">
            {user && <>
                <div className="profile-info-sao">
                    <h2 className="site-title-staff-profile">STAFF PROFILE</h2>
                    <div className='label-textfield'>
                        <h4>Name</h4>
                        <input disabled={isDisabled} type='text' value={name} onChange={(e) => setName(e.target.value)} className='profile-textfield' />
                    </div>
                    <div className='label-textfield'>
                        <h4>Email</h4>
                        <input disabled={isDisabled} type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='profile-textfield' />
                    </div>
                    <div className='label-textfield'>
                        <h4>Contact Number</h4>
                        <input disabled={isDisabled} type='text' value={contactNum} onChange={(e) => setcontactNum(e.target.value)} className='profile-textfield' />
                    </div>

                </div>
            </>}

            <div className='profile-pic-sao'>
                <div className='second-div-frame-sao'></div>
                <button className='sub-button'>Upload Photo</button>
                <p>Must not exceed 40 mb.</p>

            </div>

            <div className="button-row-sao">

                {isDisabled && <>
                    <button onClick={allowEdit} className="sub-button-edit">Edit Account</button>
                    <button onClick={deleteAcc} className="sub-button-delete">Delete</button>
                </>}

                {!isDisabled && <button onClick={updateAccDetails} className="sub-button-update">Update Account</button>}
                <button onClick={()=>navigate(-1)} className="SAO-back">Back</button>
            </div>
        </div>
    );
}

export default StaffAccountViewOwner;