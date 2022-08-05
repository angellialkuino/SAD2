const express = require('express');
const router = express.Router();

//how to organize these??

router.use('/sample', require('./routes'));

module.exports = router;