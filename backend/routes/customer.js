const express = require("express");
const router = express.Router();

const CustomerController = require("../controllers/customer");

router.get("/",CustomerController.customers_get_all);
router.post("/register",CustomerController.customer_create);

module.exports = router;