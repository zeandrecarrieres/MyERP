const mongoose = require("../database");

const UserssSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserssSchema);
