const mongoose = require("mongoose")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

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

exports.users_by_id = (req, res) => {
    //retrieves all users that are admins
    //User.find({is_admin:true})
    const id = req.params.userId;
    User.findById(id).select("name email account_status _id").exec()
        .then(docs => {
            console.log("From DB ", docs)
            if (docs) {
                res.status(200).json({ user: docs })
            } else { res.status(404).json({ message: "NO VALID ENTRY" }) }

        }).catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}

exports.users_by_email = (req, res) => {
    //retrieves all users that are admins
    //User.find({is_admin:true})
    //5ede0ccda5758752c8a46efa
    const email = req.body.email;
    User.find({ email: email }).select("name email account_status _id").exec()
        .then(docs => {
            if (docs) {
                res.status(200).json({ user: docs })
            } else { res.status(404).json({ message: "NO VALID ENTRY" }) }

        }).catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}

exports.user_delete = (req, res) => {
    const id = req.params.userId
    User.deleteOne({ _id: id }).exec().then(() => {
        res.status(201).json({ message: "User Deleted!" })
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}

exports.update_acct_status = (req, res) => {
    const id = req.params.userId
    User.update(
        { _id: id }, {
        $set: {
            account_status: req.body.account_status
        }
    }).exec()
        .then(docs => {
            res.status(200).json({ user: docs })
        }).catch(err => {
            res.status(500).json({ error: err })
        })
}


exports.user_acct_pending = (req, res) => {

    User.find({ account_status: "Pending" }).exec().then((user) => {
        if (!user) {
            return res.status(404).json({ message: "User Not found!" })
        }
        res.status(200).json({ user: user })
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}

exports.user_login = (req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth Failed 1"
                })
            }


            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth FAILED. PASSWORD WRONG"
                    })
                }
                if (result) {
                    if (user[0].account_status == "Pending") {
                        return res.status(401).json({
                            message: "Auth Failed User Pending"
                        })
                    }
                    if (user[0].account_status == "Inactive") {
                        return res.status(401).json({
                            message: "Auth Failed User inactive"
                        })
                    }
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Auth Success",
                        token: token,
                        email: user[0].email,
                        userId: user[0]._id,
                        is_admin: user[0].is_admin,
                        logged_in: user[0].logged_in
                    })

                } else {
                    return res.status(401).json({
                        message: "Auth Failed"
                    })
                }
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

//loadash
// npm i jsonwebtoken
//npm i bcrypt




