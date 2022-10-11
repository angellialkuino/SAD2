import React, { useState, useEffect } from "react"

export const RunningPrice = ({ orderItems }) => {

    return (

        <div>
            {/* <table>
                <tr key={"header"}>
                    {Object.keys(orderItems[0]).map((key) => (
                        <th>{key}</th>
                    ))}
                </tr>
                {orderItems.map((item) => (
                    <tr key={item.price}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                    </tr>
                ))}
            </table> */}
            {/* <ul>
                {orderItems.map((item) => (
                    <li key={item.price}>
                        {Object.values(item).map((val) => (
                            { val }
                        ))}
                    </li>
                ))}
            </ul> */}
        </div>

    )
}
