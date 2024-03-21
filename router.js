var express = require("express");
var router = express.Router();
var controller =require('./Controller.js/LoginController')
router.post('/register',controller.registerApi)
module.exports= router