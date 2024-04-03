var express = require("express");
var router = express.Router();
var controller =require('./Controller.js/LoginController')
var folderController=require('./Controller.js/repFolder')


router.post('/register',controller.registerApi);
router.post('/login', controller.loginApi);
router.get('/confirm/:confirmationCode', controller.confirmationApi);
router.post('/reposit-folder',folderController.createFolderApi)


module.exports= router