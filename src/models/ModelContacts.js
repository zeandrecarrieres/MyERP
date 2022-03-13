const mongoose = require("../database");

const ContactSchema = new mongoose.Schema(
    {
        phoneOne: {
            type: String,
            required: false,
        },
        phoneTwo: {
            type: String,
            required: false,
        },
        another: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = mongoose.model("clients", ContactSchema);
