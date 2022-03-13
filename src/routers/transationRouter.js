const router = require("express").Router();
const transationController = require("../controllers/transationController")

router.get("/transactions", (req, res) => {
    // TransactionsSchema.find().sort({ '_id': -1 })
    //     .then((transactions) => {
    //         return res.json(transactions);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Transaction not found!",
    //         });
    //     });
});

router.get("/transactions/:id", (req, res) => {
    // TransactionsSchema.findOne({ _id: req.params.id })
    //     .then((transactions) => {
    //         return res.json(transactions);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Transaction not found!",
    //         });
    //     });
});


router.post("/transactions", (req, res) => {
    // const transactions = TransactionsSchema.create(req.body, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: Transaction not saved, try again!",
    //         });
    //     return res.status(200).json({
    //         error: false,
    //         message: "Saved!",
    //     });
    // });
});

router.put("/transactions/:id", (req, res) => {
    // const transactions = TransactionsSchema.updateOne(
    //     { _id: req.params.id },
    //     req.body,
    //     (error) => {
    //         if (error)
    //             return res.status(400).json({
    //                 error: true,
    //                 message: "Error: Transaction not updated! Try again!",
    //             });
    //         return res.json({
    //             error: false,
    //             message: "Sucess! Transaction updated!",
    //         });
    //     }
    // );
});

router.delete("/transactions/:id", (req, res) => {
    // const products = TransactionsSchema.deleteOne({ _id: req.params.id }, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: Transaction is not deleted!",
    //         });
    //     return res.json({
    //         error: false,
    //         message: "Transactions Deleted",
    //     });
    // });
});

module.exports = router