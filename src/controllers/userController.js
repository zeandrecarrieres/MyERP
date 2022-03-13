//const userModel = require("../models/ModelUsers")

module.exports = class User {

    static async showall(req, res) {
        res.status(200).json({ message: "User List" })
    }

}