const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const userController = new UserController();

// Route to get user details
router.get('/:id', userController.getUser);

// Route to update user information
router.put('/:id', userController.updateUser);

module.exports = router;