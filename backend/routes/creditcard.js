const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");

//overview customer list
router.get("/",creditcardController.creditcard_get_all);

//overview search
router.get("/:customerId",creditcardController.creditcard_get_by_id);

//credit card approval
router.get("/details", creditcardController.creditcard_get_all);


//reset credit balance to credit limit
router.patch("/resetBalance", creditcardController.reset_customer_credit_balance);

module.exports = router;