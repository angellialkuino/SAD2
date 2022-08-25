const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller');

//log in page for staff is same as customer????
router.post('/log-in', controller.get);
//so nasa customer/log-in na path??? hayst???

//for staff!!!!!!!

router.get('/order-details', controller.get);

router.get('/invite-draft', controller.get);

router.get('/order-list', controller.get); 

router.get('/order-documentation', controller.get);

router.get('/order-history', controller.get);


/////for owner!!!!!!!

router.get('/staff-list', controller.get);

router.get('/view-staff', controller.get);

router.get('/create-staff', controller.get);

module.exports = router;





