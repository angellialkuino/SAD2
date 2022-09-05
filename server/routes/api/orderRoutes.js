const express = require('express');
const router = express.Router();
const controller = require('../../controllers/orderController');

//order forms
router.get('/log-in', controller.get);
router.get('/terms-conditions', controller.get);
router.get('/order-form', controller.get);
router.get('/order-pick-up', controller.get);
router.get('/order-shipping', controller.get);
router.get('/confimation', controller.get);
router.get('/confimed-status', controller.get);

//create new order
router.post('/order-form', controller.createOrder);


//order pages
router.get('/order-info', controller.viewOrder);
router.get('/invite-draft', controller.get);
router.get('/my-orders', controller.viewMyOrders); //customer order list
router.get('/current-orders', controller.viewCurrentOrders); //staff current order list
router.get('/order-documentation', controller.get);
router.get('/order-history', controller.viewOrderHistory);

//update order infos
router.put('/update-status', controller.updateStatus);
router.put('/update-order-details', controller.updateOrderDetails);
router.put('/update-order-purchase', controller.updateOrderPurchase);
router.put('/cancel-order', controller.updateStatus); 


module.exports = router;




