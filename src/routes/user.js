const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.post("/create", userController.createUser);
router.get("/getUsers", userController.getUsers);
router.get("/getUserId/:id", userController.getUserId);
router.put("/updateUser/:id/:firstName/:lastName", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;
