const router = require("express").Router();
const supplierController = require("../controllers/supplierController")

router.get("/suppliers", (req, res) => {
    // SuppliersSchema.find().sort({ '_id': -1 })
    //     .then((suppliers) => {
    //         return res.json(suppliers);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Supplier not found!",
    //         });
    //     });
});

router.post("/suppliers", (req, res) => {
    // const suppliers = SuppliersSchema.create(req.body, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: Not saved, try again!",
    //         });
    //     return res.status(200).json({
    //         error: false,
    //         message: "Saved!",
    //     });
    // });
});

router.get("/suppliers/:id", (req, res) => {
    // SuppliersSchema.findOne({ _id: req.params.id })
    //     .then((suppliers) => {
    //         return res.json(suppliers);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Supplier not found!",
    //         });
    //     });
});

router.put("/suppliers/:id", (req, res) => {
    // const suppliers = SuppliersSchema.updateOne(
    //     { _id: req.params.id },
    //     req.body,
    //     (error) => {
    //         if (error)
    //             return res.status(400).json({
    //                 error: true,
    //                 message: "Error: Document not updated! Try again!",
    //             });
    //         return res.json({
    //             error: false,
    //             message: "Sucess! Document updated!",
    //         });
    //     }
    // );
});

router.delete("/suppliers/:id", (req, res) => {
    // const suppliers = SuppliersSchema.deleteOne({ _id: req.params.id }, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: Supplier is not deleted!",
    //         });
    //     return res.json({
    //         error: false,
    //         message: "Supplier Deleted",
    //     });
    // });
});

module.exports = router