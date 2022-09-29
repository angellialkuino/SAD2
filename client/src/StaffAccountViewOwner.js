import React from "react";

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
    useEffect(async () => {
        console.log(JSON.stringify(res));

        await Axios.get('http://localhost:5000/api/owner/staff-account',
            { user_id: "24753869-a2a9-4070-bc5e-e942ab341372" }, //!!!!must be from prev page
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                setSuccess(true);
                setSuccessMsg(res.message);
                setUser(res.user); //or is it res.body.user
                setUserID(res.user.user_id);
                setName(res.user.full_name);
                setEmail(res.user.email);
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

    return (
        <div className="profile-div">
            <h2 className="site-title">CREATE STAFF PROFILE</h2>
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
                <div className='label-textfield'>
                    <h4>Position</h4>
                    <input type='text' className='profile-textfield' />
                </div>
                <div className='label-textfield'>
                    <h4>Status</h4>
                    <input type='text' className='profile-textfield' />
                </div>
            </div>
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