const userService = require("../service/user_service")

const saveUser = async(req, res) =>{
    try {
        const savedUser = await userService.saveUser(req.body);
        return res.status(200).send(savedUser);
    } catch (error) {
        console.log(error)
        return res.status(500).send("error");
    }

};
const viewUser = async(req, res) =>{
    try {
        const viewdUser = await userService.viewUser(req.body);
        return res.status(200).send(viewdUser);
    } catch (error) {
        return res.status(500).send("error");
    }

};
const updateUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await adminService.updateAdmin(userId, userData);

        if (!updatedUser) {
            return res.status(404).send("Admin not found");
        }

        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send("Error updating admin");
    }
}

const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteUser(userId);

        if (!deletedUser) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send("User deleted successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error deleting user");
    }
}


module.exports = {
    saveUser,
    viewUser,
    updateUser,
    deleteUser
}


