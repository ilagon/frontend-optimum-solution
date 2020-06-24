const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");



//overview customer list
router.get("/",creditcardController.creditcard_get_all);


//credit card approval pending list
router.get("/pending", creditcardController.creditcard_pending);

//credit card approval pending list search
router.get("/pending/:cardId", creditcardController.creditcard_pending_searh_id);

//overview customer list search by card status approve
router.get("/search/approve", creditcardController.creditcard_search_by_cardStatus_approve);

//overview customer list search by card status reject
router.get("/search/reject", creditcardController.creditcard_search_by_cardStatus_reject);


//credit card approval approve function
//router.patch("/approve/:cardId", creditcardController.creditcard_search_by_cardStatus_approve);

//credit card create
router.post("/create",creditcardController.creditcard_create);

//credit card approval reject function
//router.patch("/reject/:cardId", creditcardController.creditcard_search_by_cardStatus_reject);

//reset credit balance to credit limit
router.patch("/resetBalance", creditcardController.reset_credit_balance);

//overview customer list search by card id
router.get("/:cardId", creditcardController.creditcard_search_by_cardid);


module.exports = router;