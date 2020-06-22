const express = require("express")
const router = express.Router();

const CustomerController = require("../controllers/customerController");

router.post("/register", CustomerController.customer_create)
router.get("/", CustomerController.customer_get_all)

module.exports = router;