const mongoose = require("../database");

const ClientSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("clients", ClientSchema);
