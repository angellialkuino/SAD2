const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/controller');
const isAuth = require('../../middleware/auth').isAuth;

//require other modules from model(middleware) const {named export} = require(file path);

router.get('/get-test', controller.get);
//this file accesses controllers

router.get('/about-us', controller.get);

router.get('/log-in', controller.get);

router.get('/sign-up', controller.get);

//////enter log in or sign up info

router.post('/log-in', (req,res,next)=>{console.log('initial post');next();}, passport.authenticate('local'), (req,res)=>{res.send('ya logeed in boi');}); // add where to redirect in the auth params

router.post('/sign-up', controller.createUser);

//////account

router.get('/my-account', controller.get);




module.exports = router;