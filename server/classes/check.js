const bcrypt = require('bcrypt');

exports.validPassword = async (plaintxt, hashed) =>{
    //when creating user plaintxt is also hashed :")
    return await bcrypt.compare(plaintxt,hashed)||plaintxt==hashed;
};