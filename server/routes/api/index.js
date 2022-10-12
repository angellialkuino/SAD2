const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../../middleware/auth');

//how to organize these??

router.get('/is-logged-in', isLoggedIn);

router.use('/customer', require('./customerRoutes'));

router.use('/order', require('./orderRoutes'));

router.use('/staff', require('./staffRoutes'));

router.use('/owner', require('./ownerRoutes'));




module.exports = router;