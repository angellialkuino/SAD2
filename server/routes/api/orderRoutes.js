const express = require('express');
const router = express.Router();
const controller = require('../../controllers/orderController');
const multer = require('multer');
//const path = require('path');


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
router.get('/my-orders', controller.viewMyOrders); //customer order list
router.get('/current-orders', controller.viewCurrentOrders); //staff current order list
router.get('/order-documentation', controller.docEntryList);
router.get('/order-history', controller.viewOrderHistory);
router.get('/invite-draft', controller.get);

//update order infos
router.put('/update-status', controller.updateStatus);
router.put('/update-order', controller.updateOrderDetails);
router.put('/update-order-purchase', controller.updateOrderPurchase);
router.put('/cancel-order', controller.updateStatus); 

//new doc entry
router.post('/new-doc-entry', controller.docEntry);

//upload invite draft pic

const storageEngine = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../../images');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now()+ 'draft' + path.extname(file.originalname));
    }
});

const upload = multer({storage: storageEngine});

router.post('/update-invite-draft',upload.single('invite_draft'), (req,res)=>{res.send("wahtthe hell")});



module.exports = router;




