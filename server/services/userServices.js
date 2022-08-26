const db = require('../database/db');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

//create user
exports.createUser = async (userData) => {
    userData.password = await bcrypt.hash(userData.password, 10);

    await db.transaction(async (trx) => {
        userData.user_id = uuid.v4();
        await trx("users").insert(userData);
    });
};

exports.findUser = async (email) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .select('*')
                    .where({ email: email.toLowerCase()});
    });
    
    
    return user;
};

exports.findUserbyId = async (id) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .select('*')
                    .where({ user_id: id});
    });
    
    
    return user;
};