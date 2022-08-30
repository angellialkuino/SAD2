const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/userController');
const isAuth = require('../../middleware/auth').isAuth;

//require other modules from model(middleware) const {named export} = require(file path);

router.get('/get-test', controller.get);
//this file accesses controllers

router.get('/about-us', controller.get);
router.get('/log-in', controller.get);
router.get('/sign-up', controller.get);

router.get('/log-out', (req,res)=>{req.logout();});


//////enter log in or sign up info
router.post('/log-in', passport.authenticate('local'), (req,res)=>{res.send('ya logeed in boi');}); 
router.post('/sign-up', controller.createCust, passport.authenticate('local'));

router.put('/update', controller.updateUser);
router.delete('/delete', controller.deleteUser);
//////account

router.get('/my-account', controller.get);




module.exports = router;