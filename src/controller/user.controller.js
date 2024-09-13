const userService = require('../service/user.service');

const saveUser = async(req, res) => {
    try {
        const savedUser = await userService.saveUser(req.body);
        return res.status(200).send(savedUser);
    } catch (error) {
        return res.status(500).send('ERROR');
    }
};

const viewAllUser = async(req, res) => {
    try {
        const viewedUser = await userService.viewAllUser();
        return res.status(200).send(viewedUser);
    } catch (error) {
        return res.status(500).send('ERROR');
    }
};

const updateById = async(req, res) => {
    try {
        const updatedUser = await userService.updateById(req.params.id, req.body);
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send('ERROR');
    }
};

const deleteById = async(req, res) => {
    try {
        const deletedUser = await userService.deleteById(req.params.id);
        return res.status(200).send(deletedUser);
    } catch (error) {
        return res.status(500).send('ERROR');
    }
};

module.exports = {
    saveUser,
    viewAllUser,
    updateById,
    deleteById
}