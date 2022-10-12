import React from 'react'

export const CheckOrderList = ({ orderItems, orderDetails, sumTotal }) => {
    return (
        <>
            <div className='check-order-list'>
                <div>
                    <h5>Main Order</h5>
                    {
                        <ul>
                            <li>Invitation Type: {orderItems.order.invite_type}</li>
                            <li>Material: {orderItems.order.material}</li>
                            <li>Event Date: {orderItems.order.event_date}</li>
                            <li>Motif: {orderItems.order.motif}</li>
                            <li>Invitation Title: {orderItems.order.invite_title}</li>
                            <li>Font Style: {orderItems.order.font_style}</li>
                            <li>Content Link: {orderItems.order.content_link}</li>
                            <li>Number of Invites: {orderItems.order.num_of_invites}</li>
                            <li>Peg Link: {orderItems.order.peg_link}</li>
                            <li>Order Deadline: {orderItems.order.order_deadline}</li>
                            <li>Claim Type: {orderItems.order.claim_type}</li>
                        </ul>
                    }
                </div>
                <div>
                    <h5>Order Details</h5>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Color</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.map((val, key) => {
                                return (
                                    <tr>
                                        <td className='td'>{val.item_name}</td>
                                        <td className='td'>{val.color}</td>
                                        <td className='td'>{val.quantity}</td>
                                        <td className='td'>{val.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <h3 className='check-total'>Total: {sumTotal.current}</h3>
        </>
    )
}
