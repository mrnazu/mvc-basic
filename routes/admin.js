// admin.js (routes)

const path = require('path');

const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products');


// /admin/add-product => GET
router.get('/add-product', productsCtrl.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsCtrl.postAddProducts);

module.exports = router;
