const db = require('../database/db');
const uuid = require('uuid');

//create user
exports.createUser = async (userData) => {
    await db.transaction(async (trx) => {
        userData.user_id = uuid.v4();
        await trx("users").insert(userData);
    });
};
