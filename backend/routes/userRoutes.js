const express = require("express")
const router = express.Router();

const UserController = require("../controllers/userController");

//calling the postman and the controller
router.post("/register", UserController.user_register);
router.get("/", UserController.users_get_all)
router.get("/userId/:userId", UserController.users_by_id)
router.get("/email", UserController.users_by_email)
router.patch("/account/:userId", UserController.update_acct_status)
router.delete("/:userId", UserController.user_delete)
module.exports = router;




