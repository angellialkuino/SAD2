const express = require('express');
const router = express.Router();
const controller = require('../../controllers/userController');

// not sure if we need to store sessions of these???
const passport = require('passport');
const isAuth = require('../../middleware/auth').isAuth;

router.get('/auth', controller.get);


//staff log-in
router.post('/log-in', passport.authenticate('local'), (req,res)=>{res.send('ya logeed in boi');});

//for staff!!!!!!!
router.get('/log-out', (req,res)=>{req.logout();});

router.get('/order-details', controller.get);

router.get('/invite-draft', controller.get);

router.get('/order-list', controller.get); 

router.get('/order-documentation', controller.get);

router.get('/order-history', controller.get);


module.exports = router;





