const express = require("express");
const router = express.Router();
const { auth, authReset } = require("../middleware/auth");
const UserController = require("../controllers/userController");

router.post("/register", UserController.user_register);
router.post("/login", UserController.user_login);
router.post("/forget_password", UserController.forgot_password);
router.patch("/recover/:token", authReset, UserController.resetPassword);
router.get("/", UserController.users_get_all);

module.exports = router;
