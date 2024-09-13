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
}