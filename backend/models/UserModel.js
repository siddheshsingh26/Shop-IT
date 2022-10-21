const mongoose =require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        requried:true,
        default:false
    }
},{timestamps:true})

const User = mongoose.model('User',userSchema)

module.exports=User;


