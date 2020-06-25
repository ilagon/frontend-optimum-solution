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
//view customer details
router.get("/", UserController.user_get_all); //A checked
//view customer by email
router.get("/find/:email", UserController.users_get_by_email); //change email name userid to body not params
//view customer by email
router.get("/:name", UserController.users_get_by_name);
//view customer details by id
router.get("/search/:userId", UserController.user_get_by_id);
//view customer by name
router.delete("/:userId", UserController.user_delete);
//account activate
router.patch("/:userId/activate", UserController.update_activate_account);
//account deactivate
router.patch("/:userId/deactivate", UserController.update_deactivate_account);

module.exports = router;
