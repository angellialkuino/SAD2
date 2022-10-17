import React from "react"

export const RunningPrice = ({ items_array }) => {
    return (
        <>
            {items_array.map((item) =>
                <ul key={item.item_id}>
                    <li>{'quantity'in item ? item.price*item.quantity:item.price} Php &nbsp;&nbsp;&nbsp;{item.item_name} {item.quantity} {item.color}</li>
                </ul>)
            }
        </>
    )
}
