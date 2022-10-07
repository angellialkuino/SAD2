import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './InvitationDraft.css';

function InvitationDraftStaff() {

    const [fileData, setFileData] = useState(null);
    const [path, setPath] = useState('');
    const [text, setText] = useState('');
    const [orderID, setOrderID] = useState('93ebc2e9-7b45-440f-b87d-43c7c8477267');

    useEffect( () => {
        const showImage = async () => {
                await Axios.head(`http://localhost:5000/${orderID}.png`)
                    .then(res => {
                        console.log(res);
                        setPath(`http://localhost:5000/${orderID}.png`);
                        
                    })
                    .catch(err => {
                        setText('No Invite Draft Uplaoded Yet');
                        console.log(err)
                    })
            }
            showImage();
    } ,[])

    const imageChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const blob = fileData.slice(0, fileData.size, 'image/png');;
        const renamedFile = new File([blob], `${orderID}.png`, {type: 'image/png'});

        // Handle File Data from the state Before Sending
        const data = new FormData();

        data.append("invite_draft", renamedFile);

        Axios.post('http://localhost:5000/api/order/update-invite-draft',
            data
        ).then((res) => {
            console.log("success");
            console.log(res.data.path); //path of image: image\filename.jpg
            setPath(`http://localhost:5000/${orderID}.png?${Date.now()}`);
            setText('');
            //showImage();
        }).catch(err => {
            console.log(err)
        });
    };

    return (
        <div className='invitation-draft-frame'>
            <h1 className='invitation-draft-h1'>Invitation Draft</h1>
            <div className='invitation-draft-inner-frame'>
                 {path && <img className='draft-img' src={path}/>}{/* alt="Invitation Draft" />} */}
                 {text && <p>{text}</p>}{/* alt="Invitation Draft" />} */}

            </div>

            <div className='order-being-confirmed-footer'>
                <button className='button'>Back</button>
                <form onSubmit={onSubmitHandler}>
                    {/* Choose File button */}
                    <button className='button'><input type="file" onChange={imageChangeHandler} /></button>

                    <button className='button' type="submit">Update Picture</button>
                </form>
                {/* <button className='button'>Update Picture</button> */}
            </div>
        </div>
    );
}

export default InvitationDraftStaff;