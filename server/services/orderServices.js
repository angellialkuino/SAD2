const db = require('../database/db');
const uuid = require('uuid');


exports.custOrders = async (custId) => {
    await db.transaction( async (trx) => {
        orders = await trx("order")
                        .select("order_id")
                        .where({customer_id: custId});
    });

    return orders;
}

exports.currentOrders = async () => {
    await db.transaction( async (trx) => {
        orders = await trx("orders AS o")
                    .join("users AS u","o.customer_id","=","u.user_id")
                    .join("order_details AS od","o.order_id","=","od.order_id")
                    .select("o.order_id","u.full_name","o.order_date","od.event_date","od.invite_type","od.motif","od.quantity","o.order_status");

    });

    return orders;
}

exports.createOrder = async (orderDetails,additionalDetails) => {
    if(additionalDetails){ //if not empty
        await db.transaction(async (trx) => {
            additionalDetails.additional_details_id = uuid.v4();
            await trx("additional_details").insert(additionalDetails);
        });
    }else{ //if empty
        additionalDetails.additional_details_id = null;
    }

    await db.transaction(async (trx) => {
        orderDetails.order_id = uuid.v4();
        orderDetails.additional_details_id = additionalDetails.additional_details_id;
        await trx("order_details").insert(orderDetails);
    });

};


exports.viewOrder = async (orderId) => {
    await db.transaction(async (trx) => {
        order = await trx("order_deatails")
                    .select('*')
                    .where({ order_id: orderId});
    });
    
    if(order.additional_details_id){
        await db.transaction(async (trx) => {
            additional = await trx("order_additional_details")
                        .select('*')
                        .where({ additional_details_id: order.additional_details_id});
        });
    }

    return {order_details:order[0],addional_order_details:additional[0]};

}

exports.updateOrder = async (orderData) => {
    //but additional details could also be updated. and order status
    await db.transaction(async (trx) => {
        order = await trx("order_deatails")
                    .update(orderData)
                    .where({ order_id: orderData.order_id});
    });
    //returns array of all updated rows
    //console.log(user);
    return order;
};

exports.cancelOrder = async (orderId) => {
    await db.transaction(async (trx) => {
        order = await trx("order")
                    .update({ order_status: 'canceled' })
                    .where({ order_id: orderId});
    });
    return order;
}

exports.updateOrderStat = async (orderId, orderStatus) => {
    await db.transaction(async (trx) => {
        order = await trx("order")
            .update({ order_status: orderStatus })
            .where({ order_id: orderId});
    });
    return order;
}

exports.orderHistory = async () => {
    await db.transction( async (trx) => {
        order = await trx("order AS o")
                    .join("users AS u","o.customer_id","=","u.user_id")
                    .select("u.user_id","u.full_name","o.order_id","o.order_date", "o.order_status");

    });
    return order;
}