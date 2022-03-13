const router = require("express").Router();
const HomeController = require("../src/controllers/HomeController")

router.get("/clients", (req, res) => {
    ClientsSchema.find().sort({ '_id': -1 })
        .then((clients) => {
            return res.json(clients);
        })
        .catch((error) => {
            return res.status(400).json({
                error: true,
                message: "Client not found!",
            });
        });
});

router.get("/clients/:id", (req, res) => {
    ClientsSchema.findOne({ _id: req.params.id })
        .then((clients) => {
            return res.json(clients);
        })
        .catch((error) => {
            return res.status(400).json({
                error: true,
                message: "Client not found!",
            });
        });
});


router.post("/clients", (req, res) => {
    const clients = ClientsSchema.create(req.body, (error) => {
        if (error)
            return res.status(400).json({
                error: true,
                message: "Error: Not saved, try again!",
            });
        return res.status(200).json({
            error: false,
            message: "Saved!",
        });
    });
});

router.put("/clients/:id", (req, res) => {
    const clients = ClientsSchema.updateOne(
        { _id: req.params.id },
        req.body,
        (error) => {
            if (error)
                return res.status(400).json({
                    error: true,
                    message: "Error: Document not updated! Try again!",
                });
            return res.json({
                error: false,
                message: "Sucess! Document updated!",
            });
        }
    );
});

router.delete("/clients/:id", (req, res) => {
    const clients = ClientsSchema.deleteOne({ _id: req.params.id }, (error) => {
        if (error)
            return res.status(400).json({
                error: true,
                message: "Error: Client is not deleted!",
            });
        return res.json({
            error: false,
            message: "Client Deleted",
        });
    });
});

module.exports = router