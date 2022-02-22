const express = require('express');
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.post('/', registerUser);

module.exports = router;
