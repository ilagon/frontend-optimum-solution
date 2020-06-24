const express = require("express");
const router = express.Router();

const { auth, authReset } = require("../middleware/auth");
const UserController = require("../controllers/user");

//s1
router.post("/register", UserController.user_register); //A checked
router.post("/login", UserController.user_login); //A checked
router.post("/forget_password", UserController.forgot_password); //A checked
router.patch("/recover/:token", authReset, UserController.resetPassword); //A checked

//s2
router.get("/", UserController.user_get_all); //view customer details
router.post("/register", UserController.user_register); //register customer
router.get("/find/:email", UserController.users_get_by_email); //view customer by email
router.get("/:name", UserController.users_get_by_name); //view customer by email
router.get("/search/:userId", UserController.user_get_by_id); //view customer details by id
router.delete("/:userId", UserController.user_delete); //view customer by name
router.patch("/:userId/activate", UserController.update_activate_account); //account activate
router.patch("/:userId/deactivate", UserController.update_deactivate_account); //account deactivate

module.exports = router;
