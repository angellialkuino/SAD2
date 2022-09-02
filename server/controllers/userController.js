const service = require('../services/userServices');

//test
exports.get = (req,res) =>{
    res.send('wassup');
};

//CREATE NEW CUSTOMER
exports.createCust = async (req, res, next) => {
    try{
        //console.log(`req.body is: ${JSON.stringify(req.body)}`);
        const userData = req.body;
        const existingUser = await service.findUser(userData.email);

        if(existingUser){
            //console.log(existingUser);
            return res.status(400).send({ status:'This email already has an existing account' });
        }

        const creation = await service.createUser(userData, 'customer');
        res.status(201).send({ status:'Successfully created new customer account' });
        next();

    } catch (err){
        console.log('error at controller create cust');
        return res.status(400).send({ status:'Failed to create new customer account' });
    }
};

//CREATE NEW STAFF
exports.createStaff = async (req, res) => {
    try{
        //console.log(`req.body is: ${JSON.stringify(req.body)}`);
        const userData = req.body;
        const existingUser = await service.findUser(userData.email);

        if(existingUser){
            //console.log(existingUser);
            res.status(400).send({ status:'This email already has an existing account' });
        }

        //var user is not used hnrm should it be returned??? meron na sa req.body ang info tho
        const user = await service.createUser(userData, 'staff');
        res.status(201).send({ status:'Successfully created new staff account' });

    } catch (err){
        console.log('error at controller create staff');
        return res.status(400).send({ status:'Failed to create new staff account' });
    }
};

//VIEW USER ACC INFO
exports.viewUser = async (req, res) => {
    try {
        let id;
        if(req.user){ id=req.user.user_id;}
        else{id=req.body.user_id}

        const user = await service.findUserbyId(id); //coordinate with fat on this
        return res.status(200).send({ status:'Successfully retrieved user account info' , user});

    } catch (err) {
        console.log('error at controller view user');
        return res.status(400).send({ status:'Failed to retrieve user account info' });
    }
}

//UPDATE USER ACC INFO
exports.updateUser = async (req, res) => {
    try {
        const userData = req.body; //how will customer send id??? also user var not used
        const user = await service.updateUser(userData); //coordinate with fat on this
        return res.status(200).send({ status:'Successfully updated user account info' , user});
        
    } catch (err) {
        console.log('error at controller update user');
        return res.status(400).send({ status:'Failed to update user account info' });
    }
}

//DELETE USER ACC INFO
exports.deleteUser = async (req, res) => {
    try {
        const user = await service.deleteUser(req.body.user_id);
        return res.status(200).send({ status:'Successfully deleted user account' , user});

    } catch (err) {
        console.log('error at controller delete user');
        return res.status(400).send({ status:'Failed to delete user account' });

    }
}

//VIEW STAFF LIST
exports.viewStaffList = async (req, res) => {
    try {
        const staffList = await service.viewStaffList();
        return res.status(200).send({ status:'Successfully retrieved staff list' , user});
        
    } catch (err) {
        console.log('error at controller view staff list');
        return res.status(400).send({ status:'Failed to retrieve staff list' });
    }
}

