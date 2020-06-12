const express = require('express');
const router = express.Router();

const PaymentHistoryController = require("../controllers/payment_history_controller");

router.get("/:creditcardId", PaymentHistoryController.paymentHistory_get_all);
//router.post("/creditcardApplication", PaymentHistoryController.creditcard_application);
// router.get("/:userId", PaymentHistoryController.user_get_by_id);
// router.delete("/:userId", PaymentHistoryController.user_delete);
// router.patch("/:userId/account", PaymentHistoryController.update_user_type);

module.exports = router;