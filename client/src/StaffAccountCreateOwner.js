import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StaffAccountCreateOwner.css";

const FULLNAME_REGEX = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; //was USER_REGEX
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PHONENUMBER_REGEX = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;

function CreateStaffAccountOwner() {
    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('')
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const userRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(FULLNAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPhone(PHONENUMBER_REGEX.test(phoneNumber));
    }, [phoneNumber])

    useEffect(() => {
        setErrMsg('');
    }, [name, email, phoneNumber])

    const handleSubmitCreate = async (e) => {
        e.preventDefault();
        await Axios.post('http://localhost:5000/api/owner/new-staff',
            {
                full_name: name,
                email: email,
                phone_number: phoneNumber        
            },
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                setSuccess(true);
                setSuccessMsg(res.data.message);
                // navigate to new staff profile!!!!
            }else if (res.status===400){
                setErrMsg(res.data.message); //or is it res.body.message
        }}).catch((err) => {
            console.log(err);
        });
    }

    // const onSubmitPicture = (e) => {
    //     e.preventDefault();

    //     // Handle File Data from the state Before Sending
    //     const data = new FormData();

    //     data.append("invite_draft", fileData);

    //     Axios.post('http://localhost:5000/api/owner/upload-prof-pic',
    //         data
    //     ).then((res) => {
    //         console.log(res.data.path); //path of image: image\filename.jpg
    //         console.log("success");
    //     }).catch(err => {
    //         console.log(err)
    //     });
    // };

    return (
        <div className="profile-div">
            <form onSubmit={handleSubmitCreate}>
                <h3>CREATE STAFF ACCOUNT</h3>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <div className="profile-info">
                    <label htmlFor="full_name">Full Name
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                    </label>
                    <input type='text'
                        id="full_name"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        className='profile-textfield' />
                    <p id="namenote" className={userFocus && name && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must contain full name.<br />
                    </p>

                    <label htmlFor="email">
                        Email
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                    </label>
                    <input type="email"
                        id="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        className='profile-textfield'
                    />
                    <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must contain full email address.<br />
                    </p>

                    <label htmlFor="phone_number">Phone Number
                        <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPhone || !phoneNumber ? "hide" : "invalid"} />
                    </label>
                    <input type='text'
                        id="phone_number"
                        autoComplete="off"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        required
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        className='profile-textfield' />
                    <p id="phonenote" className={phoneFocus && phoneNumber && !validPhone ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must contain 11 digits.<br />
                    </p>

                    <div className="button-row">
                        <button className="rounded-pill btn btn-info nav-hover">Create</button>
                    </div>
                </div>
            </form>
            <div className='profile-pic'>
                <div className='second-div-frame'></div>
                <button className='button'>Upload Photo</button>
                <p>Must not exceed 40 mb.</p>

            </div>
        </div>
    );
}

export default CreateStaffAccountOwner;