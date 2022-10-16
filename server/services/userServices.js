const db = require('../database/db');
const uuid = require('uuid');
const bcrypt = require('bcrypt');


exports.createUser = async (userData,role) => {
    userData.password = await bcrypt.hash(userData.password, 10);

    await db.transaction(async (trx) => {
        userData.user_id = uuid.v4();
        userData.role = role;
        await trx("users").insert(userData);
    });
    return userData.user_id;
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
    console.log(`service id: ${id}`);
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .select('*')
                    .where({user_id:id});
    });
    console.log(user);
    return user[0];
};

exports.updateUser = async (userData) => {
    await db.transaction(async (trx) => {
        num = await trx("users")
                    .update(userData)
                    .where({ user_id: userData.user_id});
        user = await trx("users")
                    .select('*')
                    .where({user_id: userData.user_id});
    });

    //returns array of all updated rows
    //console.log(user);
    return user[0];
};

exports.deleteUser = async (id) => {
    await db.transaction(async (trx) => {
        user = await trx("users")
                    .where({ user_id: id})
                    .del();
    });
    //returns array of all updated rows
    //console.log(user);
    return user;
};

exports.viewStaffList = async () => {
    await db.transaction(async (trx) => {
        staff_list = await trx("users")
                    .select('*')
                    .where('role','staff');
    });
    //returns array
    return staff_list;
};