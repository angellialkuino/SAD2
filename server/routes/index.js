const express = require('express');
const router = express.Router();

router.use('/sample', require('./routes') );

module.exports = router;