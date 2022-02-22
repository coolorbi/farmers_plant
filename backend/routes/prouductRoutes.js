const express = require('express');
const {
  getProducts,
  getProductsById,
} = require('../controllers/productController.js');

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route('/').get(getProducts); // another way

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get('/:id', getProductsById);

module.exports = router;
