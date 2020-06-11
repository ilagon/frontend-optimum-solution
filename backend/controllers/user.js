const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcrypt');
const mailgun = require("mailgun-js");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")

const mg = mailgun({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN, //
});

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



//to test authentication token
exports.users_get_all = (req, res) => {
    User.find()
        .select("name email account_status is_admin _id")
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                Users: docs.map((doc => {
                    return {
                        name: doc.name,
                        email: doc.email,
                        account_status: doc.account_status,
                        is_admin: doc.is_admin,
                        _id: doc._id,
                    }
                }))
            }
            res.status(200).json(response);
        }) 
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}
