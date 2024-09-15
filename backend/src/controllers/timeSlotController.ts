import { NextFunction, Request, Response } from "express";
import Ticket from "../models/ticketModel";
import TimeSlot from "../models/timeSlotManageModel";
import AppError from "../error/customError";
import { TypeTimeSlotPayload } from "../utils/types";


export const addBlockTimeSlot = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const timeSlotPayload:TypeTimeSlotPayload = req.body;
        const ticket = await Ticket.findById(timeSlotPayload.ticketId);
        if(!ticket){
            return next(new AppError("Ticket Not Found", 404))
        } 

        const blockTimeSlot = await TimeSlot.findOne({dateForSlot:timeSlotPayload.date})
        
        if(blockTimeSlot){
            blockTimeSlot.timeSlots.push(timeSlotPayload.timeSlot);
            await blockTimeSlot.save();
            return res.status(201).json({
                message:"Slot Blocked Added Successfully"
            })
            
        } else {
            const blockTimeSlot = new TimeSlot();
            blockTimeSlot.dateForSlot = timeSlotPayload.date;
            blockTimeSlot.ticketId = timeSlotPayload.ticketId;
            blockTimeSlot.service = timeSlotPayload.service;
            blockTimeSlot.timeSlots.push(timeSlotPayload.timeSlot);
            await blockTimeSlot.save();
            return res.status(201).json({
                message:"Slot Blocked Created Successfully"
            })
        }
    } catch (error) {
        return next(error);
    }
}


export const getBlockedTimeSlot = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const ticket = await Ticket.findById(req.query.ticketId);
        if(!ticket){
            return next(new AppError("Ticket Not Found", 404))
        } 
        
        const blockTimeSlot = await TimeSlot.findOne({dateForSlot:req.query.date, ticketId:req.query.ticketId});
        if(!blockTimeSlot){
            return res.status(200).json([])
        }

        return res.status(200).json(blockTimeSlot.timeSlots)
    } catch(error){
        return next(error)
    }
}


export const deleteBlockTimeSlot = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const timeSlotPayload:TypeTimeSlotPayload = req.body;
        const ticket = await Ticket.findById(timeSlotPayload.ticketId);
        if(!ticket){
            return next(new AppError("Ticket Not Found", 404))
        } 
        
        const blockTimeSlot = await TimeSlot.findOne({dateForSlot:timeSlotPayload.date, ticketId:timeSlotPayload.ticketId});
        
        if(!blockTimeSlot){
            return next(new AppError("No Blocked Timeslot", 404))
        }

        const filteredTimeSlot = blockTimeSlot.timeSlots.filter((slot) => slot !== timeSlotPayload.timeSlot) 
        blockTimeSlot.timeSlots = filteredTimeSlot;
        await blockTimeSlot.save();

        return res.status(200).json({
            message:`Deleted ${req.body.timeSlot}`
        })
    } catch (error) {
        return next(error)
    }
}