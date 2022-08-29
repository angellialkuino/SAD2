const db = require('../database/db');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

//create user
exports.createUser = async (userData,role) => {
    userData.password = await bcrypt.hash(userData.password, 10);

    await db.transaction(async (trx) => {
        userData.user_id = uuid.v4();
        userData.role = role;
        await trx("users").insert(userData);
    });
};

exports.findUser = async (email) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .select('*')
                    .where({ email: email.toLowerCase()});
    });
    
    return user[0];
};

exports.findUserbyId = async (id) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .select('*')
                    .where({ user_id: id});
    });
    
    return user;
};

exports.updateUser = async (userData,email) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .update(userData)
                    .where({ email: email});
    });
    //returns array of all updated rows
    //console.log(user);
    return user;
};

exports.deleteUser = async (email) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .where({ email: email})
                    .del();
    });
    //returns array of all updated rows
    //console.log(user);
    return user;
};