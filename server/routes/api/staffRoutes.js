const express = require('express');
const router = express.Router();
const controller = require('../../controllers/userController');
const passport = require('passport');
const {isAuthStaff} = require('../../middleware/auth');

router.get('/auth', isAuthStaff);


//staff log-in
router.post('/log-in', passport.authenticate('local'), (req,res)=>{res.send('ya logeed in boi');});

//for staff!!!!!!!
router.get('/log-out', (req,res)=>{req.logout();});

module.exports = router;





