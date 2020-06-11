const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const mailgun = require("mailgun-js");
const saltRounds = 10;
const jwt = require("jsonwebtoken")
const { v4: uuidv4 } = require('uuid');

const mg = mailgun({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
});


exports.user_register = (req, res) => {
    const temp = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        account_status: req.body.account_status,
        email: req.body.email,
        password: req.body.password,
        is_admin: req.body.is_admin
    });

    temp.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "User created"
        })
    })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.users_get_all = (req, res) => {
    //retrieves all users that are admins
    //User.find({is_admin:true})

    User.find().select("name email account_status _id").exec()
        .then(docs => {
            const response = {
                count: docs.length,
                Users: docs.map(doc => {
                    return {
                        account_status: doc.account_status,
                        name: doc.name,
                        email: doc.email,
                        _id: doc._id
                    }
                })
            }

            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({ error: err })
        })
}


exports.user_login = (req, res) => {
    User.findOne({ email: req.body.email })
        .select("password account_status")
        .exec()
        .then((doc) => {
            if (doc) {
                bcrypt.compare(req.body.password, doc.password, function (err, result) {
                    if (result) {

                        const token = jwt.sign({
                            email: req.body.email,
                        },
                            process.env.JWT_KEY, {
                            expiresIn: 120
                        })
                        if (doc.account_status == "Active") {
                            res.status(200).json({
                                token,
                                message: "success"
                            })
                        }
                        else if (doc.account_status == "Pending") {
                            res.status(401).json({
                                message: "Your Account has not been approved by the Administrator"
                            })
                        }
                        else if (doc.account_status == "inactive") {
                            res.status(401).json({
                                message: "Your account has been inactive"
                            })
                        }
                    }
                    else {
                        res.status(401).json({
                            message: "invalid credentials"
                        })
                    }
                    if (err) {
                        res.status(401).json({
                            message: "Authentication failed"
                        })
                    }

                });
            }
            else {
                res.status(401).json({
                    message: "email not found "
                })
            }

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}





