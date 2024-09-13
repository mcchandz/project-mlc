const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requeired:true,
    },
    email:{
        type:String,
        requeired:true,
    },
    password:{
        type:String,
        requeired:true,
    }
});
const userModel = mongoose.model('manoj', userSchema);
module.exports = {
    userModel
}