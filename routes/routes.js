//import Express
const express = require('express');

 //import router
 var router = express.Router();

 var productController = require('../src/product/productController');
 var userController = require('../src/user/userController');

 //product routes
router.route('/product/getAll')
    .get(productController.getAllProductFn);

router.route('/product/create')
    .post(productController.createProductFn);

//user routes
router.route('/user/create')
    .post(userController.createUserFn);

router.route('/user/login')
    .post(userController.userLoginFn);

    module.exports = router;