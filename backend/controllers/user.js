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

//view customer details
exports.user_get_all= (req, res) => {
    User.find()
    .select("name email account_status user_type")
    .exec()
    .then((docs) => {
        const response = {
            count: docs.length,
            Users: docs.map((doc => {
                return{

                     _id: doc._id,
                    name: doc.name,
                    email: doc.email,
                    user_type: doc.user_type,
                    account_status: doc.account_status,
                    
      
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


//view customer details search by ID
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


//get user by email
exports.users_get_by_email = (req, res) => {
    const email =req.params.email;
    User.find({email: email})
    .select ("name email account_status is_admin _id")
    .exec()
    .then((doc) => {
        console.log("From db", doc);
        if(doc){
            res.status(200).json({
                user:doc
            })
        }else{
            res.status(404).json({message:"No valid entry found!"});
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: err});
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

//account activate
exports.update_activate_account = (req, res) => {
    const id = req.params.userId;
    User.updateOne(
        {_id : id},
        {
            $set: {
                account_status: "Active",
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

//account deny
exports.update_deactivate_account = (req, res) => {
    const id = req.params.userId;
    User.updateOne(
        {_id : id},
        {
            $set: {
                account_status: "Inactive",
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