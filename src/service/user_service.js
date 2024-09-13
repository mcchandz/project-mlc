const userqueiry = require("../queries/userQueries")    

const saveUser = async(body) => {
    try {
        const userData = body;
        const savedUser = await userqueiry.saveUser(userData);
        return savedUser;
        
    } catch (error) {
        throw error;;
    }
};
const viewUser = async() => {
    try {
        const viewedUser = await userqueiry.viewUser();
        return viewedUser;
    } catch (error) {
        throw error;
    }
}


const updateuser = async(userId, userData) => {
    try {
        const updatedUser = await userQueiry.updateUserById(userId, userData);
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async(userId) => {
    try {
        const deletedUser = await adminQueiry.deleteuserById(userId);
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

module.exports ={ 
    saveUser,
    viewUser,
    updateuser,
    deleteUser
}