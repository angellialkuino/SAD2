const express = require('express');
const router = express.Router();

//how to organize these??


router.use('/customer', require('./customerRoutes'));

router.use('/order', require('./orderRoutes'));

router.use('/staff', require('./staffRoutes'));

router.use('/owner', require('./ownerRoutes'));




module.exports = router;