const {userModel} = require("../model/user_module")

const saveUser = async(userDetails) => {
    try{
        const savedUser = new userModel(userDetails).save();
        return savedUser;
    } catch(error){
         throw error;
    }
    
}


const viewUser = async() => {
    try {
        return await userModel.find();
    } catch (error) {
        throw error;
    }
}



const updateUserById = async(userId, userData) => {
    try {
        const updateUser = await adminModel.findByIdAndUpdate(userId, userData);
        return updateUser;
    } catch (error) {
        throw error;
    }
}

const deleteUserById = async(userId) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(userId);
        return deleteUser;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveUser,
    viewUser,
    updateUserById,
    deleteUserById

}