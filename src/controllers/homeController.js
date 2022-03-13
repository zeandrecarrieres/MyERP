module.exports = class Home {

    static async Home(req, res) {
        res.status(200).json({ message: "Welcome" })
    }

}