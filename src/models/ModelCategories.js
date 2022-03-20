const mongoose = require("../database");

const CatergoriesSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = mongoose.model("suppliers", CatergoriesSchema);
