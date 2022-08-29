const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller');

// not sure if we need to store sessions of these???
const passport = require('passport');
const isAuth = require('../../middleware/auth').isAuth;

//staff log-in and sign-up
router.post('/log-in', passport.authenticate('local'), (req,res)=>{res.send('ya logeed in boi');});
router.post('/sign-up', controller.createStaff);

//for staff!!!!!!!
router.get('/log-out', (req,res)=>{req.logout();});

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





