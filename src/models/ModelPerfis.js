const mongoose = require("../database");

const PerfilSchema = new mongoose.Schema(
    {
        nick: {
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

module.exports = mongoose.model("clients", PerfilSchema);
