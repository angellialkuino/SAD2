const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/userController');
const {isAuthCust} = require('../../middleware/auth');

//require other modules from model(middleware) const {named export} = require(file path);

router.get('/get-test', controller.get);

router.get('/auth', isAuthCust);

//log out
router.get('/log-out', (req,res)=>{req.logout(function(err) {
    if (err) { return res.send(err); }
    res.send('ya logged out');
  });});


//////enter log in or sign up info
router.post('/log-in', passport.authenticate('local'), (req,res)=>{res.status(200).send({ message:'Successfully logged in', role:req.user.role });}); 
router.post('/sign-up', controller.createCust, passport.authenticate('local'), (req,res)=>{user=req.user; res.status(201).send({ status:'Successfully created new customer account', user});});

router.put('/update', controller.updateUser);
router.delete('/delete', controller.deleteUser);
//////account

router.get('/my-account', controller.viewUser);




module.exports = router;