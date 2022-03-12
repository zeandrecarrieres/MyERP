const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    code: {
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
    description: {
        type: String,
        required: false,
      },
    purchase_price: {
      type: Number,
      required: false,
    },
    reference_price: {
      type: Number,
      required: false,
    },
    qtde: {
      type: Number,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", ProductsSchema);
