const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");



//overview customer list
router.get("/",creditcardController.creditcard_get_all);



//overview customer list search by user id //not working
router.get("/search/:userId", creditcardController.creditcard_search_by_id);

//overview customer list search by card id
router.get("/:cardId", creditcardController.creditcard_search_by_cardid);

//overview customer list search by card status //not working
router.get("/:status", creditcardController.creditcard_search_by_cardStatus);

//credit card create
router.post("/create",creditcardController.creditcard_create);

//credit card pending list
router.get("/pending", creditcardController.creditcard_approval);


//reset credit balance to credit limit
router.patch("/resetBalance", creditcardController.reset_credit_balance);

module.exports = router;