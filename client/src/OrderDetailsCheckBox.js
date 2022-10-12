import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const items = require("./OrderDetailsItems.json");

function OrderDetailsCheckBox(props) {
    const [itemsArray, setItemsArray] = useState(props.array);
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
                console.log(item);
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
                console.log(y);
                return false;
            }
            return true;
        });

        setAllItemsArray(tempArr);
    }

    const getSelected = async () =>{
        const temp =allItemsArray.filter( (e) => {return e.selected});
        setSelectedItems(temp);
        //console.log(selectedItems);
    }

    useEffect(()=>{
        //console.log(selectedItems);
        props.onItemsArray(selectedItems);
    },[selectedItems])

    return(<>{isLoaded &&
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Item</th>
                <th>Type</th>
                <th>color</th>
                <th>Size</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {allItemsArray.map((item) => {
                return(
                    <tr key={item.item_id} className={item.selected ? "selected" : ""}> 
                        <td><input
                                type="checkbox"
                                checked={item.selected}
                                onChange={(e) => onCheck(e, item)}
                        /></td>

                        <td>{item.item_name}</td>

                        <td>{'type' in item ?
                            <input type="text" disabled={!item.selected} value={item.type} onChange={(e) => setProperty(e,item,"type")} />
                        : ""}</td>

                        <td>{'color' in item ?
                            <input type="text" disabled={!item.selected} value={item.color} onChange={(e) => setProperty(e,item,"color")} />
                        : ""}</td>

                        <td>{'size' in item ?
                            <input type="text" disabled={!item.selected} value={item.size} onChange={(e) => setProperty(e,item,"size")} />
                        : ""}</td>

                        <td>{'quantity' in item ?
                            <input type="text" disabled={!item.selected} value={item.quantity} onChange={(e) => setProperty(e,item,"quantity")} />
                        : ""}</td>
                    </tr>
                );
            })}  
            </tbody>
                             
        </table>
    }                    
    <button onClick={props.updateReq()} className="btn btn-dark btn-lg btn-block">Update Order</button>
    </>)
}

export default OrderDetailsCheckBox;