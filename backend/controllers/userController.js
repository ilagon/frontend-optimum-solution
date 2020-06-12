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

    User.findOne().select("email").exec().then(info => {
        console.log(req.body.email + "  " + info.email)
        if (info.email == req.body.email) {
            res.status(401).json({
                message: "Email already registered. Try a different email"
            })
        }
    })


    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        account_status: req.body.account_status,
        email: req.body.email,
        password: req.body.password,
        is_admin: req.body.is_admin
    })

    bcrypt.hash(user.password, saltRounds, function (err, hash) {
        user.password = hash;
        user.save()
            .then((result) => {
                console.log(result)
                res.status(200).json({
                    message: "Email successfully registered! Please wait 1-2 business days for admins to activate your account.",
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    hash: hash
                })
            })
            .catch((err1) => {
                res.status(500).json({
                    error: err1,
                });
            });
    });
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
                            expiresIn: 1200
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


exports.forgot_password = (req, res) => {
    const email = req.body.email;
    //const id = uuidv4();
    User.findOne({ email: email })
        .exec()
        .then((result) => {
            if (result) {
                const token = jwt.sign({
                    email: req.body.email,
                },
                    process.env.JWT_RESET, {
                    expiresIn: '1h'
                })
                const data = {
                    from: "Mailgun Sandbox <noreply@optimum.com>",
                    to: email,
                    subject: "Reset Password",
                    text: `To reset your password, please click on this link: http://localhost:7001/users/recover/${token}`
                };
                mg.messages().send(data, function (error, body) {
                    console.log(body.message);
                });
                User.updateOne(
                    { email: email },
                    {
                        $set: {
                            resetPasswordToken: token

                        }
                    },
                )
                    .exec()
                res.status(200).json({
                    token,
                    message: "Email has been sent"
                })
            }
            else {
                res.status(401).json({
                    message: "Email not found"
                })
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

exports.resetPassword = (req, res) => {

    User.findOne({ resetPasswordToken: req.params.token })

        .select("email password")
        .exec()
        .then((result) => {
            if (result) {
                bcrypt.compare(req.body.password, result.password, function (err, match) {
                    if (match) {
                        res.status(401).json({
                            message: "New password cannot be your previous password"
                        })
                    }
                    else if (err) {
                        res.status(401).json({
                            error: err + "BIG ERROR"
                        })
                    }

                });


                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

                    console.log(hash + "  " + result.password)
                    User.updateOne(
                        { email: result.email },
                        {
                            $set: {
                                password: hash,

                            }
                        },
                    )
                        .exec()
                        .then((doc) => {
                            if (doc) {
                                const data = {
                                    from: "Mailgun Sandbox <noreply@optimum.com>",
                                    to: result.email,
                                    subject: "Password has been reset",
                                    text: `Your password has been successfully reset`
                                };
                                mg.messages().send(data, function (error, body) {
                                    console.log(body.message);
                                });

                                res.status(200).json({
                                    message: "Password resetted"
                                })

                            }
                        })
                });
            }
            else {
                res.status(404).json({
                    message: "404 not found"
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });



}
