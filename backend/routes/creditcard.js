const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");



//overview customer list
router.get("/",creditcardController.creditcard_get_all);

//credit card create
router.post("/create",creditcardController.creditcard_create);

//credit card pending list
router.get("/pending", creditcardController.creditcard_approval);


//reset credit balance to credit limit
router.patch("/resetBalance", creditcardController.reset_credit_balance);

module.exports = router;