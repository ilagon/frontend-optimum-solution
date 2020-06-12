const mongoose = require("mongoose");
const CreditCard = require("../models/creditcard_model");
const User = require("../models/user_model")

exports.creditcard_application = (req, res) => {
  User.findById(req.body.userId)
  .then((user) => {
      if(!user) {
          return res.status(404).json({message: "User not found!"})
      }
    const creditcard = new CreditCard({
        _id: new mongoose.Types.ObjectId(),
        creditcard_num: req.body.creditcard_num,
        creditcard_status: req.body.creditcard_status,
        creditcard_limit: req.body.creditcard_limit,
        creditcard_balance: req.body.creditcard_balance,
        creditcard_type: req.body.creditcard_type,
        user: req.body.userId
    });
        return creditcard.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
      message: "Credit Card stored",
      createdCust: {
        _id: result._id,
        creditcard_num: result.creditcard_num,
        creditcard_status: result.creditcard_status,
        creditcard_limit: result.creditcard_limit,
        creditcard_balance: result.creditcard_balance,
        creditcard_type: result.creditcard_type,
        user: result.user,
      },
    });
  })
    .catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
};

  
  exports.creditcard_get_by_userId = (req, res) => {
    const userId = req.params.userId;
    CreditCard.find({user:userId})
      .select("creditcard_num creditcard_status creditcard_balance creditcard_limit creditcard_type user _id")
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
  