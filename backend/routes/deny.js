const express = require("express");
const router = express.Router();

const creditcardController = require("../controllers/creditcard");

//credit card approval reject function
router.patch("/reject/:cardId", creditcardController.creditcard_deny);

module.exports = router;