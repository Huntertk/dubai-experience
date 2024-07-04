const Admin = require("../models/admin")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const AppError = require("../error/customError");

const getAdminData = async (req, res, next) => {
    try {
        
        res.status(200).json({
            admin: req.admin
        })
    } catch (error) {
        next(error)
    }
}

const registerAdmin = async (req, res, next) => {
    const {email, password} = req.body
    try {
        const hashedPwd = await bcrypt.hash(password, 10)
        const admin = await Admin.create({email, password:hashedPwd})
        res.status(StatusCodes.CREATED).json({message:"Admin are created"})
    } catch (error) {
         next(error)
    }
}

const loginAdmin = async (req, res, next) => {
    const {email, password} = req.body  
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
        const token = jwt.sign({_id: admin._id},process.env.JWT_SECRET)
        res.status(StatusCodes.OK).cookie('admin_token', token ,{
            httpOnly: true,
            maxAge: 1000 * 60 * 60 *24
        }).json({messgae:"Admin Login Successfully", user: admin.email})

    } catch (error) {
       next(error)
    }

    
}


const logoutAdmin = async(req, res, next) =>{
    res.clearCookie('admin_token').json({message:"Admin Logout Successfully"})
}

module.exports = {
    getAdminData,
    registerAdmin,
    loginAdmin,
    logoutAdmin
}