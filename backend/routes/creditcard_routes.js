const express = require('express');
const router = express.Router();

const CreditCardController = require("../controllers/creditcard_controller");

router.get("/:userId", CreditCardController.creditcard_get_by_userId);
router.post("/creditcardApplication", CreditCardController.creditcard_application);
router.patch("/updateBalance", CreditCardController.update_balance);
// router.get("/:userId", CreditCardController.user_get_by_id);
// router.delete("/:userId", CreditCardController.user_delete);
// router.patch("/:userId/account", CreditCardController.update_user_type);

module.exports = router;