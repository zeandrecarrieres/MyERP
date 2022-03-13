const router = require("express").Router();

const HomeController = require("../src/controllers/HomeController")

router.get("/", HomeController.Home);

module.exports = router