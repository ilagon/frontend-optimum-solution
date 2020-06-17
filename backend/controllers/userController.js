const mongoose = require("mongoose");
const User = require("../models/userModel");
const mailgun = require("mailgun-js");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const mg = mailgun({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
});

exports.user_register = (req, res) => {
    if (!req.body.email || !req.body.name || !req.body.password) {
        return res.status(500).json({
            message: "Inputs are empty"
        })
    }
    User.findOne({ email: req.body.email }).exec().then(info => {
        if (info) {
            return res.status(200).json({
                message: "Email already exist!"
            })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                account_status: req.body.account_status,
                email: req.body.email,
                password: req.body.password,
                is_admin: req.body.is_admin
            })
            bcrypt.hash(user.password, 10, function (err, hash) {
                user.password = hash;
                user.save()
                    .then(() => {
                        res.status(200).json({
                            message: "register success",
                        })
                    })
                    .catch((err) => {
                        res.status(500).json({
                            error: err
                        })
                    })
            })
        }
    })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
}


exports.users_get_all = (req, res) => {
    User.find().select("name email account_status _id is_admin").exec()
        .then(docs => {
            const response = {
                count: docs.length,
                Users: docs.map(doc => {
                    return {
                        account_status: doc.account_status,
                        name: doc.name,
                        email: doc.email,
                        is_admin: doc.is_admin,
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
    if (!req.body.email || !req.body.password) {
        return res.status(500).json({
            message: "Inputs are empty"
        })
    }
    User.findOne({ email: req.body.email })
        .select("password account_status is_admin")
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
                                is_admin: doc.is_admin,
                                message: "success"
                            })
                        }
                        else if (doc.account_status == "Pending") {
                            res.status(200).json({
                                message: "Your Account has not been approved by the Administrator"
                            })
                        }
                        else if (doc.account_status == "inactive") {
                            res.status(200).json({
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
    if (!req.body.email) {
        return res.status(401).json({
            message: "inputs are empty"
        })
    }
    User.findOne({ email: req.body.email })
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
                    to: req.body.email,
                    subject: "Reset Password",
                    html: `There was recently a request to change the password on your account.
                    <p>
                    Hello there,
                    <p>
                         If you requested this password change, please click the link below to set a new password within 15min
                         <br>
                         <a href=" http://localhost:3000/ResetPass/recover/${token}">Click here to change your password</a>
                         <p>
                            If the link above does not work, paste this into your browser:
                            <br>
                            http://localhost:3000/ResetPass/recover/${token}
                         </p>
                         <p>
                            If you don't want to change your password, just ignore this message.
                         <p>
                         <p>
                         Thank you
                         <br>
                         Optimum Solution
                         </p>
                    </p>`
                };
                mg.messages().send(data, function (error, body) {
                    if (error) {
                        res.status(500).json({
                            error: error
                        })
                    }
                    console.log(body.message);
                });
                User.updateOne(
                    { email: req.body.email },
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
    if (!req.body.password) {
        return res.status(500).json({
            message: "Input is empty"
        })
    }
    User.findOne({ resetPasswordToken: req.params.token })
        .select("email password")
        .exec()
        .then((result) => {
            if (result) {
                bcrypt.compare(req.body.password, result.password, function (err, match) {
                    if (match) {
                        res.status(200).json({
                            message: "Password cannot be the same"
                        })
                    }
                    if (err) {
                        res.status(401).json({
                            err: err
                        })
                    }
                    if (!match) {
                        bcrypt.hash(req.body.password, 10, function (err, hash) {
                            User.updateOne(
                                { email: result.email },
                                {
                                    $set: {
                                        password: hash,
                                        resetPasswordToken: null

                                    }
                                },
                            )
                                .exec()
                                .then((doc) => {
                                    const data = {
                                        from: "Mailgun Sandbox <noreply@optimum.com>",
                                        to: result.email,
                                        subject: "Password has been reset",
                                        text: `Your password has been successfully reset`
                                    };
                                    mg.messages().send(data, function (error, body) {
                                        if (error) {
                                            res.status(500).json({
                                                error: error
                                            })
                                        }
                                        console.log(body.message);
                                    });
                                    res.status(200).json({
                                        message: "Successfully update"
                                    })
                                })
                        });
                    }
                });
            }
            else {
                res.status(404).json({
                    message: "404 not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}