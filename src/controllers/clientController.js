const clientsModel = require("../models/ModelClients")

module.exports = class Client {

    static async List(req, res) {
        const listOfUsers = await clientsModel.findAll();
        res.status(200).json({ users: listOfUsers })
    }

    static async Create(req, res) {

        // const { type, category, name, email } = req.body

        // await clientsModel.create({ type, category, name, email })
        //     .then((response) => {

        //         res.status(200).json({ message: "User created: ", users: response })
        //     })
        //     .catch((err) => {
        //         res.status(500).json({ message: "Error on create ", error: err })
        //     })

    }

}