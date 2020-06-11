const mongoose = require("mongoose");
const PaymentHistory = require("../models/payment_history_model");

exports.paymentHistory_get_all = (req,res) => {
    const creditcardID=req.params.creditcardID;
    PaymentHistory.findById(creditcardID)
    .populate("creditCard", ["creditcard_num"])
    .exec()
    .then((docs) => {
        const response = {
            count: docs.length,
            Users: docs.map((doc => {
                return {
                    payment_type:doc.payment_type,
                    payment_amount:doc.payment_amount,
                    date_time:doc.date_time,
                    transfer_number:doc.transfer_number,
                    creditCard:doc.creditCard
                }
            }))
        }
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
   
}