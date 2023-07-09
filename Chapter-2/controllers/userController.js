const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

// @desc    Get All Users
// @route   GET '/api/Userss'
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc    Get All Users
// @route   GET '/api/Userss'
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
});


// @desc    POST a User
// @route   POST '/api/Userss'
// @access  Private
const postUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(404);
    throw new Error(req.body);
  }

  const newUser = await User.create({
    email: req.body.email,
    role: req.body.role,
  });

  res.status(201).json(newUser);
});

// @desc    Update a User
// @route   PUT '/api/Userss/:id'
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  user.email = req.body.email || user.email;
  user.role = req.body.role || user.role;

  const updatedUser = await user.save();

  res.status(201).json(updatedUser);
});

// @desc    DELETE a User
// @route   DELETE '/api/Userss/:id'
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found.');
  }

  res.status(200).json({ message: `Deleted user with id: ${req.params.id}` });
});

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
};