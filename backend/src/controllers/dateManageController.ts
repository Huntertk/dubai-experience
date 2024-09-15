import { NextFunction, Request, Response } from "express"
import DateManage from "../models/dateManageModel"
import AppError from "../error/customError"

export const addBlockDates  = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const blockDates = await DateManage.create(req.body)
        return res.status(201).json(blockDates)
    } catch (error) {
        return next(error)
    }
} 

export const getAllBlockDates = async (req:Request, res:Response, next:NextFunction) => {
    try {
        if(!req.query.ticketId || !req.query.service){
            return next(new AppError("Please provide ticketId or service", 400))
        }
        const blockDates = await DateManage.find({ticketId:req.query.ticketId, service:req.query.service})
        return res.status(200).json(blockDates)
    } catch (error) {
        return next(error)
    }
}

export const deleteBlockedDate = async(req:Request, res:Response, next:NextFunction) => {
    try {
        
        const blockedDate = await DateManage.findById(req.body.id);
        if(!blockedDate){
            return next(new AppError("Blocked Date Id Wrong", 404))
        }
        await blockedDate.deleteOne();
       
        return res.status(200).json({msg:"Removed Blocked Successfully"})
    } catch (error) {
        return next(error)   
    }
}
