const userController = require('../controller/user.controller');
const express = require('express');
const router = express.Router();

router.post('/save-user', userController.saveUser);
router.get('/view-users', userController.viewAllUser);
router.put('/update-user/:id', userController.updateById);
router.delete('/delete-user/:id', userController.deleteById);

module.exports = {
    router
}