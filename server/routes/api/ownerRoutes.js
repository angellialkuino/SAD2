const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/controller');
const isAuth = require('../../middleware/auth').isAuth;


router.get('/staff-list', controller.get);

