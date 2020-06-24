const express = require('express');
const router = express.Router();

const UserController = require("../controllers/user");

router.get("/pending", UserController.user_pending); //view pending customer

module.exports = router;