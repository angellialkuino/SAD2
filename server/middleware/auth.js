module.exports.isLoggedIn = (req,res) => {
    if(req.user){
        return res.send({role: req.user.role});
    }else {
        return res.send({role: null});
    }
}

module.exports.isAuthCust = (req,res) => {
    if(!req.user){
        return res.status(401).send({msg: 'Please Log In'});
    }else if (req.user.role == "customer"){
        return res.send({user_id: req.user.user_id});
    } else {
        return res.status(401).send({msg: 'You are not authorized to view this page'});
    }
}

module.exports.isAuthStaff = (req,res) => {
    if(!req.user){
        return res.status(401).send({msg: 'Please Log In'});
    }else if (req.user.role == "staff"){
        res.send({user_id: req.user.user_id});
    } else {
        res.status(401).send({msg: 'You are not authorized to view this page'});
    }
}

module.exports.isAuthOwner = (req,res) => {
    if(!req.user){
        return res.status(401).send({msg: 'Please Log In'});
    }else if (req.user.role == "owner"){
        res.send({user_id: req.user.user_id});
    } else {
    res.status(401).send({msg: 'You are not authorized to view this page'});
    }
}