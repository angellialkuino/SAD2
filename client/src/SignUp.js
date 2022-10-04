import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SignUpAndLogin.css';

const FULLNAME_REGEX = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; //was USER_REGEX
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const FACEBOOK_REGEX = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/([\w\-\.]*)/ig;

const Sign_up = () => {
    const userRef = useRef();
    const errRef = useRef();
    //full name
    const [user, setUser] = useState(''); //full name
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    //email
    const [email, setemail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    //password
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    //confirm password
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    //FB URL
    const [fb_account, setfb_account] = useState('');
    const [validfb_account, setValidfb_account] = useState(false);
    const [fb_accountFocus, setfb_accountFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(FULLNAME_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setValidfb_account(FACEBOOK_REGEX.test(fb_account));
    }, [fb_account])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd, fb_account])

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        // // if button enabled with JS hack
        // const v1 = FULLNAME_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        try {
            const response = await Axios.post('http://localhost:5000/api/customer/sign-up',
                {
                    full_name: user,
                    email: email,
                    password: pwd,
                    fb_account: fb_account,
                },
                {
                    withCredentials: true
                }
            );
            // console.log(response?.data);
            // console.log(response?.accessToken);
            console.log(response)
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setemail('');
            setPwd('');
            setMatchPwd('');
            setfb_account('');

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Registered Already');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <><div className='center-div'>
            <div className='signup-left-div'>
                <h1 className='centered-text-on-img white-text'>Invitations for every occassion</h1>
                <img className='signup-img' src={process.env.PUBLIC_URL + '/images/sample6.jpg'} alt="Debut Invitation" />
            </div>

            <div className='mt-5'>{success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to='/login'>Login</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                    <h1>Create Account</h1>
                    <form onSubmit={handleSubmitSignUp}>
                        <label htmlFor="full_name">
                            Full Name:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must contain full name.<br />
                        </p>

                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            required
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must contain full email address.<br />
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>


                        <label htmlFor="fb_account">
                            Facebook Account Link:
                            <FontAwesomeIcon icon={faCheck} className={validfb_account ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validfb_account || !fb_account ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="url"
                            id="fb_account"
                            autoComplete="off"
                            onChange={(e) => setfb_account(e.target.value)}
                            value={fb_account}
                            required
                            onFocus={() => setfb_accountFocus(true)}
                            onBlur={() => setfb_accountFocus(false)}
                        />
                        <p id="uidnote" className={fb_accountFocus && fb_account && !validfb_account ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Enter correct Facebook profile link.<br />
                        </p>

                        <button disabled={!validName || !validEmail || !validPwd || !validMatch || !validfb_account ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            <Link to='/login'>Login</Link>
                        </span>
                    </p>
                </section>
            )}</div>

        </div> </>
    )
}

export default Sign_up