import { NextFunction, Request, Response } from "express";
import Ticket, { TypeTicket } from "../models/ticketModel";
import AppError from "../error/customError";

export const createTicket = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const ticketPayload:TypeTicket = req.body;

        await Ticket.create(ticketPayload);
        return res.status(201).json({
            success:true,
            message:"New ticket created"
        })    
    } catch (error) {
        return next(error)
    }
}

export const getAllTickets = async (req:Request, res:Response, next:NextFunction) => {
    try {

        const tickets = await Ticket.find();

        if(tickets.length < 1){
            return next(new AppError("No Ticket Found", 404))
        }
        return res.status(200).json({
            success:true,
            tickets
        })
    } catch (error) {
        return next(error)
    }
}

export const getTicketsByService = async (req:Request, res:Response, next:NextFunction) => {
    try {

        const tickets = await Ticket.find({service:req.query.service});

        if(tickets.length < 1){
            return next(new AppError("No Ticket Found", 404))
        }
        return res.status(200).json(tickets)
    } catch (error) {
        return next(error)
    }
}


export const getTicket = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const ticket = await Ticket.findOne({_id: req.query.id, service: req.query.service})
        if(!ticket){
            return next(new AppError("No Ticket Found", 404))
        }
        return res.status(200).json(ticket)
    } catch (error) {
        return next(error)
    }
}

export const updateTicket = async (req:Request, res:Response, next:NextFunction) => {
    const {
        title,
        description,
        service,
        images,
        preference,
        pricing,
        inclusionAndExclusion,
        rulesAndRestriction
    }:TypeTicket = req.body;
    try {
        const ticket = await Ticket.findById(req.params.id);
        if(!ticket){
            return next(new AppError("No Ticket Found", 404))
        } 
        
        if(title){
            ticket.title = title
        }
        if(description){
            ticket.description = description
        }
        if(service){
            ticket.service = service
        }
        if(images && images.length > 0){
            ticket.images = images
        }
        if(preference && preference.length > 0){
            ticket.preference = preference
        }
        if(pricing && pricing.length > 0){
            ticket.pricing = pricing
        }
        if(!inclusionAndExclusion){
            ticket.inclusionAndExclusion = inclusionAndExclusion
        }
        if(rulesAndRestriction && rulesAndRestriction.length > 0){
            ticket.rulesAndRestriction = rulesAndRestriction
        }
        await ticket.save();
        
        return res.status(200).json({
            success:true,
            message:"Ticket updated successfully"
        })
        
    } catch (error) {
        return next(error)
    }
}

export const deleteTicket = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if(!ticket){
            return next(new AppError("No Ticket Found", 404))
        }

        await ticket.deleteOne();
        return res.status(200).json({
            success:true,
            message:"Ticket deleted successfully"
        })

    } catch (error) {
        return next(error);
    }
}

export const getAllTicketTitleAndService = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const ticketTitleAndService = await Ticket.aggregate([
            
            {
                $group:{
                    _id:null,
                    ticketTitle:{$addToSet:"$title"},
                    ticketService:{$addToSet:"$service"}
                },
            },
        ])
        return res.status(200).json(ticketTitleAndService)
    } catch (error) {
        return next(error);
    }
}