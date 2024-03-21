var express = require("express");
var router = express.Router();
var controller =require('./Controller.js/LoginController')
router.post('/register',controller.registerApi);
router.post('/login', controller.loginApi);
module.exports= router