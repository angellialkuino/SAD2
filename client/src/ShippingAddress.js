import React, { useRef, useState, useEffect } from 'react';
import { Link,useOutletContext,useNavigate } from 'react-router-dom';
import Axios from "axios";
import './ShippingAddress.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FULLNAME_REGEX = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; //was USER_REGEX
const PHONENUMBER_REGEX = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;

function ShippingAddress() {
    const navigate = useNavigate();
    const userID = useOutletContext();

    const errRef = useRef();

    const [phoneNumber, setPhoneNumber] = useState('')
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [address, setAddress] = useState('');
    const [addressFocus, setAddressFocus] = useState(false);

    const [barangay, setBarangay] = useState('');
    const [barangayFocus, setBarangayFocus] = useState(false);

    const [postalCode, setPostalCode] = useState('');
    const [postalCodeFocus, setPostalCodeFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidPhone(PHONENUMBER_REGEX.test(phoneNumber));
    }, [phoneNumber])

    useEffect(() => {
        setErrMsg('');
    }, [phoneNumber, address, barangay, postalCode])

    const handleShippingAddress = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.put('http://localhost:5000/api/customer/update',
                {
                    user_id: userID,
                    phone_number: phoneNumber,
                    address: address,
                    barangay: barangay,
                    postal_code: postalCode
                },
                {
                    withCredentials: true
                }
            );
            console.log(response);
            navigate("/form/downpayment");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Submitted Already');
            } else {
                setErrMsg('Submission Failed')
            }
            errRef.current.focus();
        }
    }
    return (
        <>
            <div className='shipping-address-frame'>
                <div className='header'>
                    <h2>Shipping Address</h2>
                    <h5>Please fill-up the shipping address</h5>
                    <h5>*Note that shipping is COD and is limited to Davao City only</h5>
                </div>

                <form className='address-details'>
                    <label htmlFor="phone_number">Phone Number:
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

                    <label htmlFor="address">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                        onFocus={() => setAddressFocus(true)}
                        onBlur={() => setAddressFocus(false)}
                        className='profile-textfield'
                    />

                    <label htmlFor="barangay">
                        Barangay:
                    </label>
                    <input
                        type="text"
                        id="barangay"
                        onChange={(e) => setBarangay(e.target.value)}
                        value={barangay}
                        required
                        onFocus={() => setBarangayFocus(true)}
                        onBlur={() => setBarangayFocus(false)}
                        className='profile-textfield'
                    />
                    <label htmlFor="post-code">
                        Postal Code:
                    </label>
                    <input
                        type="text"
                        id="postal-code"
                        onChange={(e) => setPostalCode(e.target.value)}
                        value={postalCode}
                        required
                        onFocus={() => setPostalCodeFocus(true)}
                        onBlur={() => setPostalCodeFocus(false)}
                        className='profile-textfield'
                    />
                </form>
                <div className='form1-footer'>
                    <Link to='/form/order-form-5' className="rounded-pill btn btn-info fw-bold nav-hover">Back</Link>
                    <button className="rounded-pill btn btn-info fw-bold nav-hover" onClick={handleShippingAddress}>Next</button>
                </div>
            </div>
        </>
    );
}

export default ShippingAddress;