const userQuery=require("../query/user.query");

const saveUserDetails=async(body)=>{
    try {
        const data=body;
        const savedData=await userQuery.saveUser(data);
        return savedData;
    } catch (error) {
        throw error;
    }
}
const viewAllUser=async()=>{
    try {
        const viewUsers=await userQuery.viewUser();
        return viewUsers;
    } catch (error) {
        throw error;
    }
}
const updateAlluser=async(Id,body)=>{
    try {
        const updateUserById=await userQuery.updateUser(Id,body);
        return updateUserById;
    } catch (error) {
        throw error;
    }
}
const deletUserById=async(id)=>{
    try {
        const deleteUsersById=await userQuery.deleteuser(id);
        return deleteUsersById;
    } catch (error) {
        throw error;   
    }
}
module.exports={
    saveUserDetails,viewAllUser,
    updateAlluser,deletUserById
}