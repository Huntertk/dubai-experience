import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

export type AdminType = {
    _id:string;
    email:string;
    password:string;
    role:string;
} 


const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default:'admin'
    },
}, {timestamps:true})


adminSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

const Admin = mongoose.model<AdminType>('Admin', adminSchema);
export default Admin;