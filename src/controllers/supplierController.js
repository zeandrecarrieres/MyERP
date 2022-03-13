const supplierModel = require("../models/ModelSuppliers")
module.exports = class Supplier {

    static async showall(req, res) {
        res.status(200).json({ message: "Supplier List" })
    }

}