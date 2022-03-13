const router = require("express").Router();

const HomeController = require("../controllers/homeController")
const UserController = require("../controllers/userController")
const ProductController = require("../controllers/productsController")
const SupplierController = require("../controllers/supplierController")

router.get("/", HomeController.Home);
router.get("/user", UserController.showall);
router.get("/product", ProductController.showall);
router.get("/supplier", SupplierController.showall);

module.exports = router