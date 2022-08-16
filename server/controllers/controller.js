// require other named exports from services for some reason

//main purpose is to be business logic

//exports.get = asynch/*bat may asynch??*/ (req,res) => {logic}

//how to distinguish different .get requests

exports.get = (req,res) =>{
    res.send('wassup');
}