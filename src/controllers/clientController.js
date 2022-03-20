const clientsModel = require("../models/ModelClients")

module.exports = class Client {

    static async List(req, res) {

        res.status(200).json({ message: "Clientes" })
    }

}