const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");

//credit card approval approve function
router.patch("/approve/:cardId", creditcardController.creditcard_search_by_cardStatus_approve);




module.exports = router;