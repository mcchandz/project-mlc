const express=require('express');
const userRouter  = require('../controller/user.controller');
const router=express.Router();

router.post('/save-user',userRouter.saveUsersDetails);
router.get('/view-user',userRouter.viewUserAll);
router.put('/update-user/:id',userRouter.updatedUserById);
router.delete('/delete-user/:id',userRouter.deletedUsers);

module.exports={
    router
}