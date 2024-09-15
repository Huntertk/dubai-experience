import Admin, { AdminType } from "../models/admin";
import { Request, Response, NextFunction } from "express";
import AppError from "../error/customError";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerAdmin = async (req:Request, res:Response, next:NextFunction) => {
    const {email, password}:AdminType = req.body
    try {
        await Admin.create({email, password})
        return res.status(201).json({message:"Admin are created"})
    } catch (error) {
        return next(error)
    }
}


export const loginAdmin = async (req:Request, res:Response, next:NextFunction) => {
    const {email, password}:AdminType = req.body  
    try {
        
        if(!email || !password) {
            return next(new AppError("Please Provide all Values",400))
        }
        
        const admin = await Admin.findOne({email})
        
        if(!admin){
           return next(new AppError("Wrong Credentials",401))
        }
        const isPwdMatch = await bcrypt.compare(password, admin.password)
        if(!isPwdMatch){
            return next(new AppError("Wrong Credentials",401))
        }
        const token = jwt.sign({userId: admin._id},process.env.JWT_SECRET as string, {
            expiresIn:"1d"
        })
        return res.status(200).cookie('admin_token', token ,{
            httpOnly: true,
            maxAge: 1000 * 60 * 60 *24,
            secure: process.env.NODE_ENV === 'production'
        }).json({messgae:"Admin login successfully", user: admin.email})

    } catch (error) {
       return next(error)
    }
}

export const getAdminData = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const admin = await Admin.findById(req.userId).select("-password");
        if(!admin){
            return new AppError("User not found",401)
        }
        return res.status(200).json({
            email:admin.email
        })
    } catch (error) {
        return next(error)
    }
}

export const logoutAdmin = async(req:Request, res:Response, next:NextFunction) =>{
    return res.status(200).clearCookie('admin_token').json({message:"Admin Logout Successfully"})
}
