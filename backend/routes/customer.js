const express = require("express");
const router = express.Router();

const CustomerController = require("../controllers/customer");

//customer details
router.get("/",CustomerController.customers_get_all);

//approve
router.post("/register",CustomerController.customer_create);

module.exports = router;