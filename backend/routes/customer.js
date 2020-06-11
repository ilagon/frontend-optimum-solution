const express = require("express");
const router = express.Router();

const CustomerController = require("../controllers/customer");

//customer details
router.get("/",CustomerController.customers_get_all);

//approve
router.post("/approve",CustomerController.customer_create);

//reset credit balance to credit limit
router.patch("/resetBalance", CustomerController.reset_customer_credit_balance);

module.exports = router;