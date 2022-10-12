import React from "react"

export const RunningPrice = ({ orderItems, orderDetails }) => {
    return (
        <>
            {orderDetails.map((item) =>
                <ul key={item.item_id}>
                    <li>{item.item_name} {item.quantity} {item.price}Php</li>
                </ul>)
            }
        </>
    )
}
