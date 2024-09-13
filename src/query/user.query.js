<<<<<<< HEAD
const {userModel} = require('../model/user.model');

const saveUser = async(body) => {
    try {
        const userData = new userModel(body).save();
        return userData;
    } catch (error) {
        throw error;
    }
};

const viewAllUser = async() => {
    try {
        const viewData = await userModel.find();
        return viewData;
    } catch (error) {
        throw error;
    }
};

const updateById = async(id, body) => {
    try {
        const updateData = await userModel.findByIdAndUpdate(id, body);
        return updateData;
    } catch (error) {
        throw error;
    }
};

const deleteById = async(id) => {
    try {
        const deleteData = await userModel.findByIdAndDelete(id);
        return deleteData;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    saveUser,
    viewAllUser,
    updateById,
    deleteById
=======
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
>>>>>>> lohith
}