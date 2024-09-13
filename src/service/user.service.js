const userQuery = require('../query/user.query');

const saveUser = async(body) => {
    try {
        const savedUser = await userQuery.saveUser(body);
        return savedUser;
    } catch (error) {
        throw error;
    }
};

const viewAllUser = async() => {
    try {
        const viewedData = await userQuery.viewAllUser();
        return viewedData; 
    } catch (error) {
        throw error;
    }
};

const updateById = async(id, body) => {
    try {
        const updatedData = await userQuery.updateById(id, body);
        return updatedData;
    } catch (error) {
        throw error;
    }
};

const deleteById = async(id) => {
    try {
        const deletedData = await userQuery.deleteById(id);
        return deletedData;
    } catch (error) {
        return error;
    }
};

module.exports = {
    saveUser,
    viewAllUser,
    updateById,
    deleteById
}