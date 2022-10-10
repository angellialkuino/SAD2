const service = require('../services/orderServices');

//test
exports.get = (req,res) =>{
    res.send('wassup');
};

//create new
exports.createOrder = async (req,res) => {
    try{
        const order = req.body.order; 
        const itemsArray = req.body.items_array;
        const paymentMethod = req.body.payment_method;
        await service.createOrder(order, itemsArray, paymentMethod);
        const unitPrice = await service.computePrice(itemsArray);

        res.status(201).send({ message:'Successfully created new order', unitPrice});
    } catch (err){
        console.log(err);
        return res.status(400).send({ message:'Failed to create new order' });
    }
};

//view order details
exports.viewOrder = async (req,res) => {
    try {
        //console.log(`order id: ${req.body.order_id}`);
        orderInfo = await service.findOrder(req.query.order_id);

        if(!orderInfo){
        res.status(400).send({ message:'Order does not exist'});
        }

        order_info = await service.viewOrder(orderInfo);

        res.status(200).send({ message:'Successfully retrieved order details', order_info});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to retrieve order details' });
    }
};

//update order infoS
exports.updateStatus = async (req,res) => {
    try {
        const {order_id,order_status} = req.body;
        //console.log(`id is ${JSON.stringify({order_id})} stat is ${JSON.stringify({order_status})}`);
        orderInfo = await service.updateOrder("order",{order_id},{order_status});
        res.status(200).send({ message:'Successfully updated order status', orderInfo});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to update order status' });
    }
};

exports.updateOrder = async (req,res) => {
    try {
        const {order} = req.body;
        const {order_id} = order;
        //console.log(`od is ${JSON.stringify({order})} )}`);

        await service.updateOrder({order_id},order);
        res.status(200).send({ message:'Successfully updated order', order});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to update order' });
    }
};

exports.updateOrderDetails = async (req,res) => {
    try {
        const {order_id} = req.body;
        const {order_details} = req.body;
        //console.log(`od is ${JSON.stringify({order_details})} )}`);

        await service.updateOrderDetails({order_id},order_details);
        res.status(200).send({ message:'Successfully updated order details', order_details});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to update order details' });
    }
};

//view order history
exports.viewOrderHistory = async (req,res) => {
    try {
        
        orders = await service.orderHistory();
        res.status(200).send({ message:'Successfully retrieved order history', orders});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to retrieve order history' });
    }
};

//my orders for customer
exports.viewMyOrders = async (req,res) => {
    try {
        
        orders = await service.custOrders(req.query.user_id);
        res.status(200).send({ message:'Successfully retrieved orders', orders});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to retrieve orders' });
    }
};

//list of current orders for staff
exports.viewCurrentOrders = async (req,res) => {
    try {
        
        orders = await service.currentOrders();
        res.status(200).send({ message:'Successfully retrieved list of current orders', orders});
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to retrieve list of current orders' });
    }
};

exports.logEntry = async (req, res) => {
    try {
        const entryInfo = req.body;
        entry = await service.logEntry(entryInfo);
        res.status(200).send({ message:'Successfully created new documentation entry', entry});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to create new documentation entry' });
    }
}

exports.logEntryList = async (req,res) => {
    try {
        entries = await service.logEntryList(req.query.order_id);
        res.status(200).send({ message:'Successfully retrieved list of documentation entries', entries});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ message:'Failed to retrieve list of documentation entries' });
    }
}


exports.inviteDraftPic = async (req,res) => {

};
