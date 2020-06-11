const express = require('express');
const router = express.Router();
const {auth,authReset} = require('../../middleware/auth')

const UserController = require("../controllers/user");

router.post("/login",UserController.user_login);

// to test login token
router.get("/",auth,UserController.users_get_all);

module.exports = router;