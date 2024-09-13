const mongoose=require("mongoose");

const model=new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String ,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model('lohith',model);

module.exports={
    userModel
}