const router = require("express").Router();
const userController = require("../controllers/userController")

router.post("/", userController.login);
router.post("/create", userController.create);
router.post("/update", userController.update);
router.get("/exit", userController.exit);
router.get("/list", userController.list);

module.exports = router