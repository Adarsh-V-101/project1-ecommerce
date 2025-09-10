import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true, lowercase: true},
    password: {type: String, required:true},
    isAdmin: {type: Boolean, required:false},
} ,{timestamps: true});

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
};


userSchema.pre('save', async(next)=>{
    if(!this.isModified('password')) return next();
    const salt = bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password, salt)
    next()
});

const user = mongoose.model('userSchema',userSchema)
export default user;