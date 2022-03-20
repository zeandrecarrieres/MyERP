const userModel = require("../models/ModelUsers")
module.exports = class Transation {
    static async showall(req, res) {
        res.status(200).json({ message: "Transition List" })
    }

}