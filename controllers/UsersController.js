const { User } = require("../models");

//all users data
exports.index = async (req, res) => {
  const users = await User.find();
  return users
    ? res.json({ success: true, message: users })
    : res.json({ success: false, message: null });
};

// store user

exports.store = async (req, res) => {
  const user = await User.create(req.body);
  return user
    ? res.json({ success: true, message: `user added successfully` })
    : res.json({ success: false, message: null });
};

//get item by id

exports.show = async (req, res) => {
  const user = await User.findById(req.params.user);
  return user
    ? res.json({ success: true, message: user })
    : res.json({ success: false, message: null });
};

//update user

exports.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.user, req.body);
  return user
    ? res.json({ success: true, message: `user updated successfully` })
    : res.json({ success: false, message: null });
};

//delete user
exports.destroy = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.user);
  return user
    ? res.json({ success: true, message: `user deleted successfully` })
    : res.json({ success: false, message: null });
};
