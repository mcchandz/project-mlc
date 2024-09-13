const userController = require("../service/user_service")
const express = require('express');
const router = express.Router();

router.post("/user-register",userController.saveUser);
router.post("/veiw-register",userController.viewUser);
router.post("/update-register",userController.updateuser);
router.post("/delete-register",userController.deleteUser);


module.exports = {
    router
};