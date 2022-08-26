const service = require('../services/userServices');


exports.get = (req,res) =>{
    res.send('wassup');
};

/// create user
exports.createUser = async (req, res) => {
    try{
        const newUser = req.body;
        //console.log(`req.body ${JSON.stringify(newUser)}`);
        
        const creation = await service.createUser(newUser);
        return res.send('new user created yey');

    } catch (er){
        console.log('error man :"(');
        return res.send(er);
    }
};


// create order
exports.createOrder = async (req,res) => {
    try{
        const newOrder = req.body; //how to split order details and additional details???
        const creation = await service.createOrder
    } catch (er){

    }
};