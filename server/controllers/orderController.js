const service = require('../services/orderServices');

//test
exports.get = (req,res) =>{
    res.send('wassup');
};

//create new
exports.createOrder = async (req,res) => {
    try{
        const orderDeatils = req.body.order_details; 
        const additionalDeatils = req.body.additional_details; 
        const order = req.body.order; 
        const creation = await service.createOrder(orderDeatils,additionalDeatils,order);

        res.status(201).send({ status:'Successfully created new order', creation});
    } catch (err){
        console.log(err);
        return res.status(400).send({ status:'Failed to create new order' });
    }
};

//view order details
exports.viewOrder = async (req,res) => {
    try {
        //console.log(`order id: ${req.body.order_id}`);
        orderInfo = await service.findOrderDeets(req.body.order_id);

        if(!orderInfo){
        res.status(400).send({ status:'Order does not exist'});
        }

        orderInfo = await service.viewOrder(orderInfo);

        res.status(200).send({ status:'Successfully retrieved order details', orderInfo});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to retrieve order details' });
    }
};

//update order info
exports.updateStatus = async (req,res) => {
    try {
        const {order_id,order_status} = req.body;
        //console.log(`id is ${JSON.stringify({order_id})} stat is ${JSON.stringify({order_status})}`);
        orderInfo = await service.updateOrder("order",{order_id},{order_status});
        res.status(200).send({ status:'Successfully updated order status', orderInfo});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to update order status' });
    }
};

exports.updateOrderDetails = async (req,res) => {
    try {
        //order id and additional id is assumed to be in req body
        const {order_details,additional_details} = req.body;
        const {order_id} = order_details;
        const {additional_details_id} = additional_details;
        //console.log(`od is ${JSON.stringify({order_details})} \n dd is ${JSON.stringify({additional_details})}`);
        //console.log(`od is ${JSON.stringify({order_id})} \ndd is ${JSON.stringify({additional_details_id})}`);

        let orderInfo={};
        orderInfo.order_details = await service.updateOrder("order_details",{order_id},order_details);
        orderInfo.addtional_details = await service.updateOrder("additional_details",{additional_details_id},additional_details);
        res.status(200).send({ status:'Successfully updated order details', orderInfo});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to update order details' });
    }
};

exports.updateOrderPurchase = async (req,res) => {
    try {
        const orderPurchase = req.body;
        const {OP_id} = orderPurchase;

        orderInfo = await service.updateOrder("order_purchase",{OP_id},orderPurchase);
        res.status(200).send({ status:'Successfully updated order purchase information', orderInfo});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to update order purchase information' });
    }
};

//view order details
exports.viewOrderHistory = async (req,res) => {
    try {
        
        orders = await service.orderHistory();
        res.status(200).send({ status:'Successfully retrieved order history', orders});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to retrieve order history' });
    }
};

//my orders for customer
exports.viewMyOrders = async (req,res) => {
    try {
        
        orders = await service.custOrders(req.body.user_id);
        res.status(200).send({ status:'Successfully retrieved orders', orders});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to retrieve orders' });
    }
};

//list of current orders for staff
exports.viewCurrentOrders = async (req,res) => {
    try {
        
        orders = await service.currentOrders();
        res.status(200).send({ status:'Successfully retrieved list of current orders', orders});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ status:'Failed to retrieve list of current orders' });
    }
};

