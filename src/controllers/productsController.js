const productModel = require("../models/ModelProducts")

module.exports = class Product {
    static async showall(req, res) {
        res.status(200).json({ message: "Product List" })
    }
}