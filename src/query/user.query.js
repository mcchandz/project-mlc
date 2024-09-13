const {userModel} = require("../models/models");

const saveUser=async(userDetails)=>{
    try {
        const savedUser=new userModel(userDetails).save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}
const viewUser=async()=>{
    try {
        const view=await userModel.find();
        return view;
    } catch (error) {
        throw error;
    }
}
const updateUser=async(id,body)=>{
    try {
        const updatedUser=await userModel.findByIdAndUpdate(id,body);
        return updatedUser;
    } catch (error) {
        throw error;
    }
}
const deleteuser=async(id)=>{
    try {
        const deleteUsers=await userModel.findByIdAndDelete(id);
        return deleteUsers;
    } catch (error) {
        throw error;
    }
}
module.exports={
    saveUser,viewUser,
    updateUser,
    deleteuser
}