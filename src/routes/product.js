const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.post('/', productController.addProduct);

router.delete('/', productController.deleteProduct);

router.get('/', productController.getProducts);


exports.productRoutes = router;