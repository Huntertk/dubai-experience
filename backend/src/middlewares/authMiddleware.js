const jwt = require('jsonwebtoken')
const AppError = require('../error/customError.js');
const Admin = require('../models/admin');

const authAdmin = async (req, res, next) => {
    const {admin_token}  = req.cookies
    try {
        if(!admin_token){
            return next(new AppError("Unauthenticated please login again", 401))
        }
        const decoded = jwt.verify(admin_token, process.env.JWT_SECRET);
        const adminData = await Admin.findById(decoded._id).select("-password"); 
        req.admin = adminData
        next()
    } catch (error) {
        next(error)
    }
}

//Authorized Roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.admin.role)){
         return next(new AppError('You do not have permission to perform this action', 403))
        }
        next();
     }
}

module.exports = {
    authAdmin,
    authorizeRoles
}