const mongoose =require('mongoose');
const bcrypt=require('bcryptjs')
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

userSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
};

userSchema.pre('save', async function(next){
    const salt =await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt);
});
const User = mongoose.model('User',userSchema)

module.exports=User;


