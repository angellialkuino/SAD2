const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/userController');
const isAuth = require('../../middleware/auth').isAuth;

//this has search funtionaity ehmm hooow
router.get('/staff-list', controller.get);

router.get('/staff-account', controller.get);

router.post('/staff-delete', controller.get);



