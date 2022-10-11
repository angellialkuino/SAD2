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

const isRush = (date) => {
    const today = new Date();
    const deadline = new Date(date.slice(0,10));

    let time_diff = deadline.getTime() - today.getTime();
    let days = time_diff / (1000 * 3600 * 24);

    //subtract one weekend day for every week
    let weeks = Math.floor(days / 7);
    days = days - weeks;

    // Handle special cases
    let startDay = today.getDay();
    let endDay = deadline.getDay();

    // Remove weekend not previously removed.   
    if (startDay - endDay > 1){ days = days--; }

    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == 0 && endDay != 6){ days = days--; }

    // Remove end day if span ends on Saturday but starts after Sunday
    //if (endDay == 6 && startDay != 0){ days = days-- }

    if(days<15){ return true }else{ return false }

}

//create new order
exports.createOrder = async (order, itemsArray, paymentMethod) => {
    
    await db.transaction(async (trx) => {
        order.order_id = uuid.v4();
        await trx("order").insert(order);
    });

    itemsArray.forEach((item) => {
        item.order_id = order.order_id;
        delete item.price;
        delete item.item_name;
    });

    await db.transaction(async (trx) => {
        await trx("order_details").insert(itemsArray);
    })

    //compute price and/or additional fees

    //unit price
    const unitPrice = await this.computePrice(itemsArray);

    
    //is number of order less than 30
    let lessMin=0,rush = 0;
    if(order.num_of_invites<30){ lessMin =1500; }

    const partialTotal = unitPrice*order.num_of_invites+lessMin;

    //is order a rush
    if(isRush(order.order_deadline)){ rush = partialTotal*0.4; }

    await db.transaction(async (trx) => {
        await trx("billing_info").insert(
            {OP_id: uuid.v4(), user_id: order.user_id, order_id: order.order_id, less_min_fee:lessMin, rush_fee:rush, unit_cost: unitPrice, sub_total: partialTotal+rush, payment_method: paymentMethod}
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
exports.updateOrder = async (OrderId,orderData) => {
    //delete orderData.order_id;
    //console.log(`data: ${JSON.stringify(id)}`);

    await db.transaction(async (trx) => {
        await trx("order")
                    .update(orderData)
                    .where(OrderId);
        order = await trx("order")
                    .select('*')
                    .where(OrderId);
    });
};

exports.updateOrderDetails = async (orderId,itemsArray) => {
    //delete orderData.order_id;
    //console.log(`data: ${JSON.stringify(id)}`);

    itemsArray.forEach((item) => {
        item.order_id = orderId.order_id;
    });

    await db.transaction(async (trx) => {
        await trx("order_details").where(orderId).del();
        await trx("order_details").insert(itemsArray);
    })

    const unitPrice = await this.computePrice(itemsArray);

    await db.transaction(async (trx) => {
        const numOfInvites = await trx("order").select('num_of_invites').where(orderId);
        await trx("billing_info").update(
            {unit_cost: unitPrice, sub_total: unitPrice*numOfInvites[0].num_of_invites}
        ).where(orderId);
    });
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

exports.logEntry = async (entryData) => {
    await db.transaction( async(trx) => {
        entryData.log_id = uuid.v4();
        await trx("order_log")
                    .insert(entryData);
        entry = await trx("order_log")
                    .select('*')
                    .where({log_id: entryData.log_id});
        logs = await trx("order_log")
                .select('*')
                .where({ order_id: entryData.order_id});
    });

    if(logs.length>1){
        revFee = (logs.length-1)*1500;
        await db.transaction( async(trx) => {
            nums = await trx("billing_info")
                        .select("total_revision_fee","sub_total")
                        .where({ order_id: entryData.order_id});
            prevRevFee = nums[0].total_revision_fee; 
            console.log(prevRevFee);
            prevSubTotal = nums[0].sub_total;             
            await trx("billing_info")
                        .update({total_revision_fee:(prevRevFee ? prevRevFee+1500 : 1500), sub_total:prevSubTotal+1500})
                        .where({ order_id: entryData.order_id});
        });
    }


    return entry;
};

//view list of entry documentation
exports.logEntryList = async (orderId) => {

    await db.transaction(async (trx) => {
        entries = await trx("order_log")
        .select('*')
        .where({ order_id: orderId});
    });

    return entries;

}

