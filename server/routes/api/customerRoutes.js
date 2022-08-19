const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller');

//require other modules from model(middleware) const {named export} = require(file path);

router.get('/get-test', controller.get);
//this file accesses controllers

router.get('/about-us', controller.get);

router.get('/log-in', controller.get);

router.get('/sign-up', controller.get);

//////enter log in or sign up info

router.post('/log-in', controller.get);

router.post('/sign-up', controller.createUser);

//////account

router.get('/my-account', controller.get);




module.exports = router;