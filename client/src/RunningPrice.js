import React from "react"

export const RunningPrice = ({ order, items_array }) => {
    return (
        <>
            {items_array.map((item) =>
                <ul key={item.item_id}>
                    <li>{item.item_name} {item.quantity} {'quantity'in item ? item.price*item.quantity:item.price} Php</li>
                </ul>)
            }
        </>
    )
}
