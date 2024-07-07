const AppError = require('../error/customError');
const dotenv =require('dotenv')
dotenv.config();

const errorHandlerMiddleware = (err, req, res, next) => {
   
    let error = {
        statusCode: err?.statusCode || 500,
        message: err?.message || "Internal Server Error"
    }

       //Handle Invalid Mongoose Id
       if(err.name === "CastError"){
        const message = `Resource not found Invalid ${err?.path}`
        error = new AppError(message, 404)
    }
     //Handle DUplicate
     if(err.code === 11000){
        const message = `You are Creating Duplicate Data`
        error = new AppError(message, 404)
    }

      //Handle Validation Error
    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(value => value.message)
        error = new AppError(message, 400)
    }

      //Handle JSON TOKEN Error
    if(err.name === "JsonWebTokenError"){
        const message = `Invalid Token, Please login again`
        error = new AppError(message, 401)
    }

      //Handle JSON TOKEN EXPIRE Error
    if(err.name === "TokenExpiredError"){
        const message = `Token Expired, Please login again`
        error = new AppError(message, 401)
    }

    if(process.env.NODE_ENV === 'DEVELOPMENT') {
        console.log(err);
        return res.status(error.statusCode).json({
            message: error.message,
            error:err,
            stack: err.stack,
        })
    }
    if(process.env.NODE_ENV === 'PRODUCTION') {
        return res.status(error.statusCode).json({
            message: error.message,
        })
    }
};


module.exports = errorHandlerMiddleware;