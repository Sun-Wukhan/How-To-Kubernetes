// Dependencies
const express = require('express');
const router = express.Router();

// Controllers
const { getUsers, postUser, updateUser, deleteUser, getUser } = require('../controllers/userController');

// Routes
router.route('/').get(getUsers).post(postUser);
router.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

// Exports
module.exports = router;