const AppError = require("../error/customError.js");
const BookingPlan = require("../models/bookingPlans.js");
const fs = require('fs');
const path = require('path');

const convertExcelToJson = require('convert-excel-to-json');
const QrCode = require("../models/qrCodeModel.js");

exports.addBookingPlan = async (req, res, next) => {
    try {
        await BookingPlan.create(req.body)
        res.status(201).json({bookingPlan:"Created"})
    } catch (error) {
        next(error)
    }
}

exports.getAllBookingPlan = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.find({service: req.query.service})
        // const bookingPlan = await BookingPlan.find()
        if(bookingPlan.length < 1){
            return next(new AppError("Data not found", 400))
        }
        res.status(200).json({bookingPlan})
    } catch (error) {
        next(error)
    }
}

exports.getBookingPlan = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.findOne({_id: req.query.id, service: req.query.service})
        if(!bookingPlan){
            return next(new AppError("Data not found", 400))
        }
        res.status(200).json({bookingPlan})
    } catch (error) {
        next(error)
    }
}



exports.addQr = async (req, res, next) => {
    try {
        const jsonData = convertExcelToJson({ sourceFile: `${path.join(__dirname, "..", "uploads", req.file.filename)}`,
            header:{
                rows:1
            },
            columnToKey:{
               "*":"{{columnHeader}}"
            }
        });
            jsonData.Sheet1.forEach(async(qrData) => {
                
                await QrCode.create({
                    QrCode:`${qrData.QrCode}`,
                    Type: qrData.Type,
                    title: qrData.title
                })
                
            });
        // await QrCode.insertMany(jsonData.Sheet1)

        // jsonData.Sheet1.forEach( async (qrData) => {
        //     let bookingPlanData = await QrCode.findOne({title: qrData.title})
        //     if(bookingPlanData){
        //         bookingPlanData.qrCodes.push(qrData)
        //     }
        //     await bookingPlanData.save();
        // });
    
    
        fs.unlink(path.join(__dirname, "..", "uploads", req.file.filename), (err) => {
            if(err){
                console.log(err);
            }
        })
        res.status(201).json({message:"Qr Codes Added"})
    } catch (error) {
        next(error)
    }  
}


exports.getQr = async( req, res, next) => {
    try {
        const bookingPlanData = await BookingPlan.findById(req.query.id)
        if(!bookingPlanData){
            return next(new AppError("Booking Plan Data not Found", 404))
        }

        const qrCodes = await QrCode.find({title: bookingPlanData.title}).populate('usedBy', "bookingPlanId bookingDateString bookingTitle email name bookingId isQrGenerated _id")
        if(qrCodes.length < 1){
            return next(new AppError("Qr Codes not Found", 404))
        }
        res.status(200).json({qrCodes})
    } catch (error) {
        next(error)
    }
}