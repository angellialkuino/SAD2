const bcrypt = require('bcrypt');

exports.validPassword = async (plaintxt, hashed) =>{
    return await bcrypt.compare(plaintxt,hashed);
};