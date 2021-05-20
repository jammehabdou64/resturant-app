const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  verify: {
    type: Boolean,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["chef", "waiter", "waitress", "cashier", "admin"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
