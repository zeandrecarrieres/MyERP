const userModel = require("../models/ModelUsers")
const tools = require("../helpers/tools")
module.exports = class User {

    static async login(req, res) {
        res.status(200).json({ message: "Login" })
    }

    static async create(req, res) {
        const { type, username, email, password } = req.body
        const newpassword = await tools.encrypPWD(password);
        console.log(newpassword.hash)

        if (!username || !email || !password) {
            res.status(400).send({ message: "Dados incorretos, favor verifacar os campos" });
            return
        }

        const model = {
            type: "user",
            username,
            email,
            hash: newpassword.hash,
            salt: newpassword.salt
        }

        //res.status(200).send({ message: "Usuario Criado com sucesso", model })
        const user = await userModel.create(model, (error) => {
            if (error)
                return res.status(400).json({
                    error: true,
                    message: "Error: User not saved, try again!",
                });
            return res.status(200).json({
                error: false,
                message: "User Saved!",
                user
            });
        });
    }

    static async update(req, res) {
        res.status(200).json({ message: "update" })
    }

    static async delete(req, res) {
        res.status(200).json({ message: "delete" })
    }

    static async exit(req, res) {
        res.status(200).json({ message: "exit" })
    }

    static async activate(req, res) {
        res.status(200).json({ message: "Activate" })
    }

    static async list(req, res) {

        const users = await userModel.find()
        res.status(200).json({ message: "List", users })
    }

}