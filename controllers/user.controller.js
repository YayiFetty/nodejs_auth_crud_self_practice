const User = require("../models/user.models");

//Get Users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//Get User By ID

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json(user);
};

//update user

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};

//delete user

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.json({ message: "Deleted" });
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
