const mongoose = require("../database");

const ProductsSchema = new mongoose.Schema(
    {
        productcode: {
            type: String,
            required: true,
        },
        in: {
            type: Number,
            required: true,
        },
        left: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("products", ProductsSchema);
