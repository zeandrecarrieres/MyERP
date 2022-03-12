const mongoose = require("mongoose");

const ClientsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    nick: {
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
    telephone: {
      type: String,
      required: false,
    },

    address: {
      type: String,
      required: false,
    },
    complement: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    postal: {
      type: String,
      required: false,
    },
    cnp: {
      type: String,
      required: false,
    },
    inscription: {
      type: String,
      required: false,
    },
    site: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("clients", ClientsSchema);
