import {NextFunction, Request, Response} from 'express';
import AppError from '../error/customError';

const errorHandlerMiddleware  = (err:AppError, req:Request, res:Response, next:NextFunction) => {
    if(process.env.NODE_ENV === 'development'){
        console.log(err);
    }
    const statusCode = err.statusCode ||500;
    const message = err.message || 'something went wrong, try again later';
    return res.status(statusCode).json({ success:false, message });
};
  
export default errorHandlerMiddleware;