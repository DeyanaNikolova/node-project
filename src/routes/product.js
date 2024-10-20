const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.post('/', productController.addProduct);

router.delete('/:title', productController.deleteProduct);

router.get('/', productController.getProducts);


exports.productRoutes = router;