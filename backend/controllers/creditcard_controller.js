const mongoose = require("mongoose");
const User = require("../models/creditcard_model");

exports.creditcard_application = (req, res) => {
    const creditcard = new creditcard({
        _id: new mongoose.Types.ObjectId(),
        creditcard_num: req.body.creditcard_num,
        creditcard_status: req.body.creditcard_status,
        creditcard_limit: req.body.creditcard_limit,
        creditcard_balance: req.body.creditcard_balance,
        creditcard_type: req.body.creditcard_type
    });
    creditcard
    .save()
    .then((result) => {
        console.log(result);
        res.status(201).json({
            message: "Credit card application successful!"
        });
    })
    .catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
};

  
  exports.creditcard_get_by_userId = (req, res) => {
    const id = req.params.userId;
    User.findById(id)
      .select("creditcard_num creditcard_balance creditcard_limit")
      .exec()
      .then((doc) => {
        console.log("From db", doc);
        if (doc) {
          res.status(200).json({
            creditcard: doc,
          });
        } else {
          res.status(404).json({ message: "No valid entry found!" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };
  