const router = require("express").Router();
const productController = require("../controllers/productsController")

router.get("/products", (req, res) => {
    // ProductsSchema.find().sort({ '_id': -1 })
    //     .then((products) => {
    //         return res.json(products);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Product not found!",
    //         });
    //     });
});

router.post("/products", (req, res) => {
    // const products = ProductsSchema.create(req.body, (error) => {
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

router.put("/products/:id", (req, res) => {
    // const products = ProductsSchema.updateOne(
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

router.delete("/products/:id", (req, res) => {
    // const products = ProductsSchema.deleteOne({ _id: req.params.id }, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: Product is not deleted!",
    //         });
    //     return res.json({
    //         error: false,
    //         message: "Product Deleted",
    //     });
    // });
});


router.get("/products", (req, res) => {
    // ProductsSchema.find().sort({ '_id': -1 })
    //     .then((products) => {
    //         return res.json(products);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Product not found!",
    //         });
    //     });
});

router.get("/products/:id", (req, res) => {
    // ProductsSchema.findOne({ _id: req.params.id })
    //     .then((products) => {
    //         return res.json(products);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Product not found!",
    //         });
    //     });
});



router.post("/products", (req, res) => {
    // const products = ProductsSchema.create(req.body, (error) => {
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

router.put("/products/:id", (req, res) => {
    // const products = ProductsSchema.updateOne(
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

router.delete("/products/:id", (req, res) => {
    // const products = ProductsSchema.deleteOne({ _id: req.params.id }, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: Product is not deleted!",
    //         });
    //     return res.json({
    //         error: false,
    //         message: "Product Deleted",
    //     });
    // });
});

module.exports = router