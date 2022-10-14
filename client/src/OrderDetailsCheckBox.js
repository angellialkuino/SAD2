import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './CheckBox.css';
const items = require("./OrderDetailsItems.json");

function OrderDetailsCheckBox({orderID,itemsArray,setItemsArray,updateBillingInfo}) {
    const [allItemsArray, setAllItemsArray] = useState(items);
    const [isLoaded, setisLoaded] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);



    useEffect(()=>{
        let tempArr = allItemsArray;
        //console.log(itemsArray);

        itemsArray.forEach(x => {
            tempArr.every(y => {
                if(x.item_id == y.item_id){
                    for (const key in x) {
                        y[key] = x[key];
                    }
                    y.selected=true;
                    return false;
                }
                return true;
            });
        });

        setAllItemsArray(tempArr);
        setisLoaded(true);
    },[])

    const onCheck = (e, obj) => {
        // let tempArr = allItemsArray.map((item) => {
        // if (item.item_id === obj.item_id) {
        //     item.selected = e.target.checked;
        // }
        // return item;
        // });
        
        let tempArr = [...allItemsArray];
        tempArr.every(item => {
            if(item.item_id === obj.item_id){
                item.selected=e.target.checked;
                //console.log(item);
                return false;
            }
            return true;
        });

        setAllItemsArray(tempArr);
    }

    const setProperty = (e, item, key) => {
        // let tempArr = allItemsArray.map((arrItem) => {
        // if (arrItem.item_id === item.item_id) {
        //     arrItem[key] = e.target.value;
        // }
        // return arrItem;
        // });

        // setAllItemsArray(tempArr);

        let tempArr = [...allItemsArray];
        tempArr.every(y => {
            if(y.item_id === item.item_id){
                y[key]=e.target.value;
                //console.log(y);
                return false;
            }
            return true;
        });

        setAllItemsArray(tempArr);
    }

    const updateOrderDetails = async () => {
        console.log('update req arr',selectedItems);
        await Axios.put('http://localhost:5000/api/order/update-order-details',
            { order_id: orderID, order_details: selectedItems },
            { withCredentials: true }
        ).then((res) => {
            if(res.status===200){
                // setSuccessMsg(res.data.message);
                setItemsArray(selectedItems);
                updateBillingInfo(selectedItems);
            }else if (res.status===400){
                // setErrMsg(res.data.message); 
            }  
        }).catch((err) => {
            console.log(err);
        });
    }

    const getSelected = async () =>{
        // const temp = allItemsArray.filter( (e) => {return e.selected});
        setSelectedItems(allItemsArray.filter( (e) => {return e.selected}));
        //console.log(selectedItems);
    }

    useEffect(()=>{
        console.log('selected',selectedItems);
        if(selectedItems.length>0){
            updateOrderDetails();
            
    }},[selectedItems])

    

    return(<>{isLoaded &&
        <table className="checkBox-table">
            <thead className="checkBox-thead">
            <tr>
                <th></th>
                <th className="th-item">Item</th>
                <th className="th-type">Type</th>
                <th className="th-color">Color</th>
                <th className="th-size">Size</th>
                <th className="th-quantity">Quantity</th>
            </tr>
            </thead>
            <tbody>
            {allItemsArray.map((item) => {
                return(
                    <tr key={item.item_id} className={item.selected ? "selected" : ""}> 
                        <td className= "checkbox-input"><input
                                type="checkbox"
                                checked={item.selected}
                                onChange={(e) => onCheck(e, item)}
                        /></td>

                        <td className="td-item">{item.item_name}</td>

                        <td className="td-type">{'type' in item ?
                            <input className="input-odcb" type="text" disabled={!item.selected} value={item.type || ""} onChange={(e) => setProperty(e,item,"type")} />
                        : ""}</td>

                        <td className="td-color">{'color' in item ?
                            <input className="input-odcb" type="text" disabled={!item.selected} value={item.color || ""} onChange={(e) => setProperty(e,item,"color")} />
                        : ""}</td>

                        <td className="td-size">{'size' in item ?
                            <input className="input-odcb" type="text" disabled={!item.selected} value={item.size || ""} onChange={(e) => setProperty(e,item,"size")} />
                        : ""}</td>

                        <td className="td-quantity">{'quantity' in item ?
                            <input className="input-odcb" type="text" disabled={!item.selected} value={item.quantity || ""} onChange={(e) => setProperty(e,item,"quantity")} />
                        : ""}</td>
                    </tr>
                );
            })}  
            </tbody>
                             
        </table>
    }                    
    <button onClick={getSelected} className="btn-update-order-ods btn-dark btn-lg btn-block">Update Order</button>
    </>)
}

export default OrderDetailsCheckBox;