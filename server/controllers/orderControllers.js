const service = require('../services/orderServices');

//CREATE NEW ORDER
exports.createOrder = async (req,res) => {
    try{
        const newOrder = req.body; //how to split order details and additional details???
        const creation = await service.createOrder(newOrder);
    } catch (er){

    }
};