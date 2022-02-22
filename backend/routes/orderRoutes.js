const express = require('express');
const { addOrderItems } = require('../controllers/orderController.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.route('/').post(protect, addOrderItems);

module.exports = router;
