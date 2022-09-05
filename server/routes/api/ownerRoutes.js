const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/userController');
const isAuth = require('../../middleware/auth').isAuth;

//this has search funtionaity ehmm hooow
router.post('/new-staff', controller.createStaff);

router.get('/staff-list', controller.viewStaffList);

router.get('/staff-account', controller.viewUser);

router.delete('/staff-delete', controller.deleteUser);

module.exports = router;


