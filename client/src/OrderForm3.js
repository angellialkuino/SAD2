import React, { useEffect, useState } from 'react';
import './OrderForm3.css';

function OrderForm3({ hidden1, hidden2, items_array, setItems_array }) {
    const [selected,setSelected] =useState('');
    const [isColorDisabled,setIsColorDisabled] = useState(true);

    useEffect(()=>{
        if(selected == 'pages' || selected == 'envelope'){
            setIsColorDisabled(false);
        }else{
            setIsColorDisabled(true);
        }
    },[selected])

    useEffect(()=>{
        
        if(hidden1 && selected == 'pages'){
            setSelected('');
        }else if(hidden2 && selected == 'envelope'){
            setSelected('');
        }
    },[hidden1,hidden2])

    const handleColor = (e) => {
        setItems_array(items_array.map(obj => {
            if (obj.item_id === 'm1' && selected == 'pages' ) {
                return {
                    ...obj,
                    color: e.target.id
                };
            } else if (obj.item_id === 'e1'  && selected == 'envelope'){
                return {
                    ...obj,
                    color: e.target.id
                };
            }
            return obj;
        }));
    }

    return (
        <>
            <form className='main-order-frame1'>
                <div className='row-group'>
                    <h3 className='category-h3'>Paper Type and Color for: </h3>
                    {!hidden1 && <><input type="radio" name='selected' className='checkbox-circle' onChange={() => setSelected('pages')} />Pages</>}
                    {!hidden2 && <><input type="radio" name='selected' className='checkbox-circle' onChange={() => setSelected('envelope')} />Envelope</>}
                </div>
                <div className='boxes3'>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='celeste-blue' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7703.jpg'} alt="celeste blue"></img>
                        </label>
                        <h5>Celeste Blue</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='silver' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7704.jpg'} alt="silver"></img>
                        </label>
                        <h5>Silver</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='green' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7705.jpg'} alt="green"></img>
                        </label>
                        <h5>Green</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='royal-blue' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7706.jpg'} alt="royal blue"></img>
                        </label>
                        <h5>Royal Blue</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='denim-blue' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7707.jpg'} alt="denim-blue"></img>
                        </label>
                        <h5>Denim Blue</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='dark-grey' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7708.jpg'} alt="dark grey"></img>
                        </label>
                        <h5>Dark Grey</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='copper' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7709.jpg'} alt="copper"></img>
                        </label>
                        <h5>Copper</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='yellow-gold' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7710.jpg'} alt="yellow gold"></img>
                        </label>
                        <h5>Yellow Gold</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='purple' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7711.jpg'} alt="purple"></img>
                        </label>
                        <h5>Purple</h5>
                    </div>
                    <div className='square-button-with-text'>
                        <label>
                            <input disabled={isColorDisabled} type='radio' id='cream' name='color-type' className='form1-radio' onClick={handleColor} />
                            <img className={isColorDisabled ? 'radio-img-disabled' : 'radio-img'} src={process.env.PUBLIC_URL + '/images/papers/IMG_7713.jpg'} alt="cream"></img>
                        </label>
                        <h5>Cream</h5>
                    </div>
                </div>
            </form>
        </>
    );
}

export default OrderForm3;