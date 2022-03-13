const router = require("express").Router();
const userController = require("../controllers/userController")

router.get("/users", (req, res) => {
    // UsersSchema.find().sort({ '_id': -1 })
    //     .then((users) => {
    //         return res.json(users);
    //     })
    //     .catch((error) => {
    //         return res.status(400).json({
    //             error: true,
    //             message: "User not found!",
    //         });
    //     });
});

router.post("/users", (req, res) => {
    // const users = UsersSchema.create(req.body, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: User not saved, try again!",
    //         });
    //     return res.status(200).json({
    //         error: false,
    //         message: "User Saved!",
    //     });
    // });
});

router.put("/users/:id", (req, res) => {
    // const users = UsersSchema.updateOne(
    //     { _id: req.params.id },
    //     req.body,
    //     (error) => {
    //         if (error)
    //             return res.status(400).json({
    //                 error: true,
    //                 message: "Error: User not updated! Try again!",
    //             });
    //         return res.json({
    //             error: false,
    //             message: "Sucess! User updated!",
    //         });
    //     }
    // );
});

router.delete("/users/:id", (req, res) => {
    // const users = UsersSchema.deleteOne({ _id: req.params.id }, (error) => {
    //     if (error)
    //         return res.status(400).json({
    //             error: true,
    //             message: "Error: User is not deleted!",
    //         });
    //     return res.json({
    //         error: false,
    //         message: "User Deleted",
    //     });
    // });
});

module.exports = router