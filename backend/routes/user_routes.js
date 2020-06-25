const express = require('express');
const router = express.Router();

const UserController = require("../controllers/user_controller");

router.get("/", UserController.user_get_all);
router.post("/register", UserController.user_register);
router.get("/:userId", UserController.user_get_by_id);
// router.delete("/:userId", UserController.user_delete);
// router.patch("/:userId/account", UserController.update_user_type);

module.exports = router;