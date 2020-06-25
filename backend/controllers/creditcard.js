const mongoose = require("mongoose");

const CreditCard = require("../models/creditcard");
const User = require("../models/user");

//create credit card
exports.creditcard_create = (req, res) => {
  User.findById(req.body.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      const creditcard = new CreditCard({
        _id: mongoose.Types.ObjectId(),
//Accept current change
        creditcard_status: req.body.creditcard_status,
        creditcard_limit: req.body.creditcard_limit,
        creditcard_type: req.body.creditcard_type,
        creditcard_balance: req.body.creditcard_balance,
        creditcard_num: req.body.creditcard_num,
        user: req.body.userId,
      });
      return creditcard.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Credit Card applied",
        createdCust: {
          cardId: result._id,

//accept current change
          creditcard_status: result.creditcard_status,
          creditcard_limit: result.creditcard_limit,
          creditcard_type: result.creditcard_type,
          creditcard_num: result.creditcard_num,
          creditcard_balance: result.creditcard_balance,
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

//overview page list
exports.creditcard_get_all = (req, res) => {
  CreditCard.find()
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        creditcard: docs.map((doc) => {
          return {
            _id: doc._id,
            user: doc.user,
            creditcard_balance: doc.creditcard_balance,
            creditcard_type: doc.creditcard_type,
            creditcard_status: doc.creditcard_status,
            creditcard_limit: doc.creditcard_limit,
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

//overview page user search by card id
exports.creditcard_search_by_cardid = (req, res) => {
  const cardId = req.params.cardId;
  CreditCard.findById(cardId)
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      console.log("From db", docs);
      if (docs) {
        res.status(200).json({
          creditcard: docs,
        });
      } else {
        res.status(404).json({
          message: "No valid entry found",
//accept current change
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.creditcard_search_by_userid = (req, res) => {
  const id = req.params._id;
  CreditCard.findOne({ "User.$_id": id })
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      console.log("From db", docs);
      if (docs) {
        res.status(200).json({
          creditcard: docs,
        });
      } else {
        res.status(404).json({
          message: "No valid entry found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//overview page user search by card status "Approved""
//accept current change
exports.creditcard_search_by_cardStatus_active = (req, res) => {
  CreditCard.find({ creditcard_status: "Active" })
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      console.log("From Database", docs);
      if (docs) {
        res.status(200).json({
          count: docs.length,
          creditcard: docs.map((doc) => {
            return {
              _id: doc._id,
              user: doc.user,
              creditcard_balance: doc.creditcard_balance,
              creditcard_type: doc.creditcard_type,
              creditcard_status: doc.creditcard_status,
              creditcard_limit: doc.creditcard_limit,
            };
          }),
        });
      } else {
        res.status(404).json({
          message: "No valid entry found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//overview page user search by card status "Rejected"
exports.creditcard_search_by_cardStatus_reject = (req, res) => {
  //accept current change
  CreditCard.find({ creditcard_status: "Rejected" })
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      console.log("From Database", docs);
      if (docs) {
        res.status(200).json({
          count: docs.length,
          creditcard: docs.map((doc) => {
            return {
              _id: doc._id,
              user: doc.user,
              creditcard_balance: doc.creditcard_balance,
              creditcard_type: doc.creditcard_type,
              creditcard_status: doc.creditcard_status,
              creditcard_limit: doc.creditcard_limit,
            };
          }),
        });
      } else {
        res.status(404).json({
          message: "No valid entry found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.creditcard_pending = (req, res) => {
  CreditCard.find({ creditcard_status: "Pending" })
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      console.log("From Database", docs);
      if (docs) {
        res.status(200).json({
          count: docs.length,
          creditcard: docs.map((doc) => {
            return {
              _id: doc._id,
              user: doc.user,
              creditcard_balance: doc.creditcard_balance,
              creditcard_type: doc.creditcard_type,
              creditcard_status: doc.creditcard_status,
              creditcard_limit: doc.creditcard_limit,
            };
          }),
        });
      } else {
        res.status(404).json({
          message: "No valid entry found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//credit card pending search
//accept current change
exports.creditcard_pending_search_id = (req, res) => {
  const id = req.params.cardId;

  CreditCard.find({ creditcard_status: "Pending", _id: id })
    .populate("user", ["email", "account_status"])
    .exec()
    .then((docs) => {
      console.log("From Database", docs);
      if (docs) {
        res.status(200).json({
          count: docs.length,
          creditcard: docs.map((doc) => {
            return {
              _id: doc._id,
              user: doc.user,
              creditcard_balance: doc.creditcard_balance,
              creditcard_type: doc.creditcard_type,
              creditcard_status: doc.creditcard_status,
              creditcard_limit: doc.creditcard_limit,
            };
          }),
        });
      } else {
        res.status(404).json({
          message: "No valid entry found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
//accept current change

//credit card approval approve
exports.creditcard_approve = (req, res) => {
  const id = req.params.cardId;
  const creditcard_type = req.body.creditcard_type;
  CreditCard.updateOne(
    { _id: id },
    { $set: { creditcard_status: "Active" } },
    () => {
      if (creditcard_type == "Platinum") {
        CreditCard.updateOne(
          { _id: id },
          { $set: { creditcard_limit: 10000, creditcard_balance: 10000 } }
        ).exec();
      }
      if (creditcard_type == "Gold") {
        CreditCard.updateOne(
          { _id: id },
          { $set: { creditcard_limit: 20000, creditcard_balance: 20000 } }
        ).exec();
      }
      if (creditcard_type == "Silver") {
        CreditCard.updateOne(
          { _id: id },
          { $set: { creditcard_limit: 30000, creditcard_balance: 30000 } }
        ).exec();
      }
      if (creditcard_type == "Women") {
        CreditCard.updateOne(
          { _id: id },
          { $set: { creditcard_limit: 40000, creditcard_balance: 40000 } }
        ).exec();
      }
      if (creditcard_type == "Student") {
        CreditCard.updateOne(
          { _id: id },
          { $set: { creditcard_limit: 50000, creditcard_balance: 50000 } }
        ).exec();
      }
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//credit card approval deny
exports.creditcard_deny = (req, res) => {
  const id = req.params.cardId;

  CreditCard.updateOne(
    { creditcard_status: "Pending", _id: id },
    { $set: { creditcard_status: "Rejected" } }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//reset credit balance to credit limit
exports.reset_credit_balance = (req, res) => {
  CreditCard.updateMany(
//accept current change
    { creditcard_status: "Active" },
    { $set: { creditcard_balance: creditcard_limit } }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
