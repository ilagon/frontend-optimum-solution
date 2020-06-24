const express = require('express');
const router = express.Router();

const UserController = require("../controllers/user");

router.get("/", UserController.user_get_all); //view customer details
router.post("/register", UserController.user_register); //register customer
router.get("/find/:email", UserController.users_get_by_email); //view customer by email
router.get("/:name", UserController.users_get_by_name); //view customer by email

// router.get("/pending", UserController.user_pending); //view pending customer

router.delete("/:userId", UserController.user_delete); //view customer by name
router.patch("/:userId/activate", UserController.update_activate_account); //account activate
router.patch("/:userId/deactivate", UserController.update_deactivate_account); //account deactivate

module.exports = router;