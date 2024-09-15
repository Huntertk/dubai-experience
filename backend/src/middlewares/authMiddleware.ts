import { Request, Response, NextFunction } from "express";
import AppError from "../error/customError";
import jwt, {JwtPayload} from 'jsonwebtoken';
import Admin from "../models/admin";

declare global {
  namespace Express {
    interface Request {
      userId:string;
    }
  }
}

export const authAdmin = async (req:Request, res:Response, next:NextFunction) => {
    const {admin_token}  = req.cookies
    try {
      if(!admin_token){
          return next(new AppError("Unauthenticated please login again", 401))
      }
      const decoded = jwt.verify(admin_token, process.env.JWT_SECRET as string);
      const userId =  (decoded as JwtPayload).userId
      
      req.userId = userId
      return next()
    } catch (error) {
      return next(error)
    }
}

//Authorized Roles
export const authorizeRoles = (...roles:string[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {
      const user = await Admin.findById(req.userId);
        if(user){
          if(!roles.includes(user.role)){
            return next(new AppError('You do not have permission to perform this action', 403))
          }
          return next();
        }
        return next(new AppError('You do not have permission to perform this action', 403))
    }
}