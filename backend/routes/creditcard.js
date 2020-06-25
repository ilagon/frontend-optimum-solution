const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");

//overview customer list
router.get("/", creditcardController.creditcard_get_all); // A checked

//credit card approval pending list
router.get("/pending", creditcardController.creditcard_pending); //A checked

//credit card approval pending list search
router.get(
  "/pending/:cardId",
  creditcardController.creditcard_pending_search_id
); // A for review, doesn't make sense

//overview customer list search by card status approve
router.get(
  "/search/active",
  creditcardController.creditcard_search_by_cardStatus_active
); // A checked

//overview customer list search by card status reject
router.get(
  "/search/rejected",
  creditcardController.creditcard_search_by_cardStatus_reject
); // A checked

//credit card approval approve function
//router.patch("/approve/:cardId", creditcardController.creditcard_search_by_cardStatus_approve);

//credit card create
router.post("/create", creditcardController.creditcard_create); //A checked

//credit card approval reject function
//router.patch("/reject/:cardId", creditcardController.creditcard_search_by_cardStatus_reject);

//reset credit balance to credit limit
router.patch("/resetBalance", creditcardController.reset_credit_balance);

//overview customer list search by card id
router.get("/:cardId", creditcardController.creditcard_search_by_cardid);

//credit card approval approve function
router.patch("/approve/:cardId", creditcardController.creditcard_approve); // A you need to pass the creditcard_type in the body

//credit card approval reject function
router.patch("/reject/:cardId", creditcardController.creditcard_deny);

module.exports = router;
