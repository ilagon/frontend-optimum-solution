const mongoose = require("mongoose");
const User = require("../models/user");

//addes contact number and address
exports.user_register = (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        account_status: req.body.account_status,
        email: req.body.email,
        password: req.body.password,
        user_type: req.body.user_type,
        
    });
    user
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "User created"
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err,
        })
    })
}   

exports.user_get_all= (req, res) => {
    User.find()
    .select("name email account_status user_type")
    .exec()
    .then((docs) => {
        const response = {
            count: docs.length,
            Users: docs.map((doc => {
                return{
                    name: doc.name,
                    email: doc.email,
                    user_type: doc.user_type,
                    account_status: doc.account_status,
                    
                    _id: doc._id,
                  
                }
            }))
        }
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

exports.user_get_by_id = (req, res) => {
    const id = req.params.userId;
    User.findById(id)
    .select("name email account_status user_type")
    .exec()
    .then(docs => {
        console.log("From db", docs);
        if(docs){
            res.status(200).json({
                user: docs
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

exports.user_delete = (req, res) => {
    const id = req.params.userId;
    User.deleteOne({_id: id})
    .exec()
    .then(() => {
        res.status(200).json({message: "User delete"})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

exports.update_account_status = (req, res) => {
    const id = req.params.userId;
    User.updateOne(
        {_id : id},
        {
            $set: {
                account_status: req.body.account_status
            }
        }
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