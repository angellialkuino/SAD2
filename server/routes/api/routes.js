const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller');

//require other modules from model(middleware) const {named export} = require(file path);

router.get('/get-test', controller.get);
//this file accesses controllers
module.exports = router;