const service = require('../services/userServices');


exports.get = (req,res) =>{
    res.send('wassup');
};

/// create customer user
exports.createCust = async (req, res, next) => {
    try{
        //console.log(`req.body is: ${JSON.stringify(req.body)}`);
        const userData = req.body;
        const existingUser = await service.findUser(userData.email);

        if(existingUser){
            //console.log(existingUser);
            return res.send('this user already exists');
        }

        const creation = await service.createUser(userData, 'customer');
        res.send('new user created yey');
        next();

    } catch (err){
        console.log('error man :"(');
        return res.send(err);
    }
};

/// create staff user
exports.createStaff = async (req, res) => {
    try{
        //console.log(`req.body is: ${JSON.stringify(req.body)}`);
        const userData = req.body;
        const existingUser = await service.findUser(userData.email);

        if(existingUser){
            //console.log(existingUser);
            return res.send('this user already exists');
        }

        const creation = await service.createUser(userData, 'staff');
        return res.send('new user created yey');

    } catch (err){
        console.log('error man :"(');
        return res.send(err);
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