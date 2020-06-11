const mongoose = require("mongoose");

const Customer = require("../models/customer")
const User = require("../models/user")

//
exports.customer_create = (req, res) => {
    User.findById(req.body.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found!" });
        }
        const customer = new Customer({
          _id: mongoose.Types.ObjectId(),
          creditcard_status: req.body.creditcard_status,
          creditcard_limit: req.body.creditcard_limit,
          balance: req.body.balance,
          user: req.body.userId,
        });
        return customer.save();
      })
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Customer stored",
          createdCust: {
            _id: result._id,
            creditcard_status: result.creditcard_status,
            creditcard_limit: result.creditcard_limit,
            balance: result.balance,
            user: result.user,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };
  
  exports.customers_get_all = (req, res) => {
    Customer.find()
      .populate("user", ["name", "email", "account_status"])
      .exec()
      .then((docs) => {
        res.status(200).json({
          count: docs.length,
          customer: docs.map((doc) => {
            return {
              _id: doc._id,
              creditcard_status: doc.creditcard_status,
              creditcard_limit: doc.creditcard_limit,
              balance: doc.balance,
              user: doc.user,
            };
          }),
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  };
  
