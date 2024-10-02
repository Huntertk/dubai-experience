import { NextFunction, Request, Response } from "express";
import convertExcelToJson from 'convert-excel-to-json';
import path from 'path'
import fs from 'fs'
import QrCode, { TypeQR } from "../models/qrModel";
import Ticket from "../models/ticketModel";
import AppError from "../error/customError";



export const addQr = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const uploadedFileRequest = (req.file as Express.Multer.File);
        
        const jsonData = convertExcelToJson({ sourceFile: `${path.join(__dirname, "..", "..", "uploads", uploadedFileRequest.filename)}`,
            header:{
                rows:1
            },
            columnToKey:{
               "*":"{{columnHeader}}"
            }
        });
        
            jsonData.Sheet1.forEach(async(qrData:TypeQR) => {
                const isQrAvailable = await QrCode.findOne({QrCode: `${qrData.QrCode}`})
                if(isQrAvailable){
                    console.log(`Qr Available already : ${qrData.QrCode}`);
                } else {
                    QrCode.create({
                        QrCode:`${qrData.QrCode}`,
                        Type: qrData.Type,
                        title: qrData.title
                    }).catch((err) => console.log(err))
                }
                
            });
    
        fs.unlink(path.join(__dirname, "..", "..", "uploads", uploadedFileRequest.filename), (err) => {
            if(err){
                console.log(err);
            }
        });
        return res.status(201).json({message:"Qr Codes Added"})

    } catch (error) {
        return next(error)
    }  
}


export const getAllTicketQr = async( req:Request, res:Response, next:NextFunction) => {
    try {
        const ticket = await Ticket.findById(req.query.id)
        if(!ticket){
            return next(new AppError("Ticket Data not Found", 404))
        }

        const qrCodes = await QrCode.find({title: ticket.title, isUsed:req.query.isUsedQr}).populate('usedBy', "ticketId bookingDateString ticketTitle email name bookingId isQrGenerated _id");

        if(qrCodes.length < 1){
            return res.status(200).json([]);
        }

        return res.status(200).json(qrCodes);

    } catch (error) {
        return next(error)
    }
}

export const addSingleQr = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const qrInputPayload:{
            QrCode:string;
            title:string;
            Type:string;
        } = req.body;

        const qrExist = await QrCode.findOne({QrCode:qrInputPayload.QrCode});
        
        if(qrExist){
            return next(new AppError("Qr Already Exist You are creating duplicate qr code", 400))
        }

        await QrCode.create(qrInputPayload);
        return res.status(201).json("new qr added");
    } catch (error) {
        return next(error)
    }
}

export const updateSingleQr = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const qrInputPayload:{
            QrCode?:string;
            title?:string;
            Type?:"Adult"|"Child";
            id:string;
        } = req.body;

        // if(qrInputPayload.QrCode){
        //     const qrDataExist = await QrCode.findOne({QrCode:qrInputPayload.QrCode});
        //     if(qrDataExist){
        //         return next(new AppError("Qr Already Exist You are creating duplicate qr code", 400))
        //     }
            
        // }
        

        const qrData = await QrCode.findById(qrInputPayload.id);
        
        if(!qrData){
            return next(new AppError("Qr not found with this id", 400))
        }
        if(qrInputPayload.QrCode){
            qrData.QrCode = qrInputPayload.QrCode
        }
        if(qrInputPayload.title){
            qrData.title = qrInputPayload.title
        }
        if(qrInputPayload.Type){
            qrData.Type = qrInputPayload.Type
        }

        await qrData.save();
        return res.status(201).json("qr updated");
    } catch (error) {
        return next(error)
    }
}


export const deleteSingleQr = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {id}:{id:string} = req.body;

        if(!id){
            return next(new AppError("Qr ID not found", 404))
        }

        const qrExist = await QrCode.findById(id);
        
        if(!qrExist){
            return next(new AppError("Qr not found with this id", 404))
        }

        await qrExist.deleteOne();
        return res.status(200).json("query deleted successfully");
    } catch (error) {
        return next(error)
    }
}

export const getSingleQr = async( req:Request, res:Response, next:NextFunction) => {
    try {
        const {id}:{id?:string} = req.query;

        if(!id){
            return next(new AppError("No ID Found", 404));
        }
        const qrCode = await QrCode.findById(id);

        if(!qrCode){
            return next(new AppError("No QR Found", 404));
        }

        return res.status(200).json(qrCode);
    } catch (error) {
        return next(error)
    }
}