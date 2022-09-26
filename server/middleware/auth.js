module.exports.isAuth = (req,res,next) => {
    if (req.isAuthenticated()){
        next();
} else {
    res.status(401).json({msg: 'You are not authorized to view this page'});
}
}

module.exports.isStaff = (req,res,next) => {
    if (req.user.role == "staff"){
        next();
} else {
    res.status(401).json({msg: 'You are not authorized to view this page'});
}
}

module.exports.isOwner = (req,res,next) => {
    if (req.user.role == "owner"){
        next();
} else {
    res.status(401).json({msg: 'You are not authorized to view this page'});
}
}