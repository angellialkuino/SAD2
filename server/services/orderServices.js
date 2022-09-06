const db = require('../database/db');
const uuid = require('uuid');

//my orders for customers
exports.custOrders = async (custId) => {
    await db.transaction( async (trx) => {
        orders = await trx("order")
                        .select("order_id")
                        .where({user_id: custId});
    });

    return orders;
}

//orders list for staff
exports.currentOrders = async () => {
    await db.transaction( async (trx) => {
        orders = await trx("order AS o")
                    .join("users AS u","o.user_id","=","u.user_id")
                    .join("order_details AS od","o.order_id","=","od.order_id")
                    .select("o.order_id","u.full_name","o.date_ordered","o.order_deadline","od.invite_type","od.motif","od.num_of_invites","o.order_status")
                    .whereNotIn("o.order_status",["completed","canceled"]);

    });

    return orders;
}

//create new order
exports.createOrder = async (orderDetails,additionalDetails,order) => {
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

    await db.transaction(async (trx) => {
        order.order_id = orderDetails.order_id;
        await trx("order").insert(order);
    })

};

//find if order exists
exports.findOrderDeets = async (orderId) => {
    await db.transaction(async (trx) => {
        orderDetails = await trx("order_details")
                    .select('*')
                    .where({ order_id: orderId});

    });

    return orderDetails[0];
};

//view order details
exports.viewOrder = async (orderDetails) => {

    await db.transaction(async (trx) => {
        order = await trx("order")
        .select('*')
        .where({ order_id: orderDetails.order_id});
    });

    if(orderDetails.additional_details_id){
        await db.transaction(async (trx) => {
            additional = await trx("additional_details")
                        .select('*')
                        .where({ additional_details_id: orderDetails.additional_details_id});
        });
    }
    
    
    return {order_details:orderDetails, addional_order_details:additional[0], order:order[0]};

}

//update order details, general func for order details, additional details, order, and purchase
exports.updateOrder = async (tblName,id,orderData) => {
    //delete orderData.order_id;
    //console.log(`data: ${JSON.stringify(id)}`);

    await db.transaction(async (trx) => {
        await trx(tblName)
                    .update(orderData)
                    .where(id);
        order = await trx(tblName)
                    .select('*')
                    .where(id);
    });
    return order;
};


exports.orderHistory = async () => {
    await db.transaction( async (trx) => {
        order = await trx("order AS o")
                    .join("users AS u","o.user_id","=","u.user_id")
                    .select("u.user_id","u.full_name","o.order_id","o.date_ordered", "o.order_status")
                    .whereIn("o.order_status",["completed","canceled"]);

    });
    return order;
};

exports.docEntry = async (entryData) => {
    await db.transaction( async(trx) => {
        entryData.doc_id = uuid.v4();
        await trx("order_documentation")
                    .insert(entryData);
        entry = await trx("order_documentation")
                    .select('*')
                    .where({doc_id: entryData.doc_id});
    });

    return entry;
};
