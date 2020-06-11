const express = require("express");
const router = express.Router();
const {auth,authReset} = require('../middleware/auth')
const UserController = require("../controllers/userController");

//calling the postman and the controller
router.post("/register", UserController.user_register);
//to test auth
router.get("/",auth, UserController.users_get_all);
router.post("/login",UserController.user_login);


module.exports = router;




