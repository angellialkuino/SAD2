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
                    .select("o.order_id","u.full_name","o.date_ordered","o.order_deadline","o.invite_type","o.motif","o.num_of_invites","o.order_status")
                    .whereNotIn("o.order_status",["completed","canceled"]);

    });

    return orders;
}

//create new order
exports.createOrder = async (order, itemsArray) => {
    
    await db.transaction(async (trx) => {
        order.order_id = uuid.v4();
        await trx("order").insert(order);
    });

    itemsArray.forEach((item) => {
        item.order_id = order.order_id;
    });

    await db.transaction(async (trx) => {
        await trx("order_details").insert(itemsArray);
    })

    const unitPrice = await this.computePrice(itemsArray);

    await db.transaction(async (trx) => {
        await trx("billing_info").insert(
            {OP_id: uuid.v4(), user_id: order.user_id, order_id: order.order_id, unit_cost: unitPrice, sub_total: unitPrice*order.num_of_invites, payment_method: "work on this"}
        );
    });

};

//find if order exists
exports.findOrder = async (orderId) => {
    await db.transaction(async (trx) => {
        order = await trx("order")
                    .select('*')
                    .where({ order_id: orderId});

    });

    return order[0];
};

//view order details
exports.viewOrder = async (order) => {

    await db.transaction(async (trx) => {
        orderDetails = await trx("order_details AS od")
        .join("items AS i", "od.item_id","=","i.item_id")
        .select('*')
        .where({ order_id: order.order_id});

        billingInfo = await trx("billing_info")
                        .select('*')
                        .where({ order_id: order.order_id});
    
    });

    //add query for order purchase details

    return {order:order, order_details: orderDetails, billing_info: billingInfo[0]};

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

//view list of entry documentation
exports.docEntryList = async (orderId) => {

    await db.transaction(async (trx) => {
        entries = await trx("order_documentation")
        .select('*')
        .where({ order_id: orderId});
    });

    return entries;

}

//compute price of order
exports.computePrice = async (itemsArray) => {

    let unitPrice=0;

    await db.transaction( async (trx) => {
        for( let x in itemsArray){

            price = await trx("items")
            .select('price')
            .where({ item_id: itemsArray[x].item_id});

            unitPrice += price[0].price;
            // console.log(itemsArray[x].item_id);
            // console.log(price[0].price);
            // console.log(unitPrice);

        }}); 
    
    return unitPrice;

};