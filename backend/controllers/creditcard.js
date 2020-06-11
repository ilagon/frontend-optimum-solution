const mongoose = require("mongoose");

const CreditCard = require("../models/creditcard")
const User = require("../models/user")

//create credit card
exports.creditcard_create = (req, res) => {
    User.findById(req.body.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found!" });
        }
        const creditcard = new CreditCard({
          _id: mongoose.Types.ObjectId(),
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
          message: "Credit Card created",
          createdCust: {
            cardId: result._id,
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
              balance: doc.balance,
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
  
 
  exports.creditcard_get_by_id = (req, res) => {
    const id = req.params.customerId;
    const email = req.params.email
    CreditCard.findById(id)
    .populate("user",["email", "account_status"])
    .exec()
    .then(doc => {
        console.log("From Database", doc);
        if(doc){
            res.status(200).json({
              
                 
                  user: doc.user,
                  balance: doc.balance,
                  creditcard_type: doc.creditcard_type,
                  creditcard_status: doc.creditcard_status,
                  creditcard_limit: doc.creditcard_limit,
             
                
            })
        } else{
            res.status(404).json({
                message: "No valid entry found"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
        
    })
}


  //reset credit balance to credit limit
exports.reset_credit_balance = (req,res) => {

  const creditLimit = req.body.creditcard_limit;

    CreditCard.updateMany(
        {creditcard_status: "Approved"},
        {$set:{creditcard_balance: creditLimit}},
       
    )
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}