const AppError = require('../error/customError');
const BlockedTimeSlot = require('../models/blockedTimeSlot');
const BookingPlan = require('../models/bookingPlans');

exports.addBlockTimeSlot = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.findById(req.body.bookingPlanId);
        if(!bookingPlan){
            return next(new AppError("Booking Plan Not Found", 404))
        } 

        const blockTimeSlot = await BlockedTimeSlot.findOne({dateForSlot:req.body.date})
        
        if(blockTimeSlot){
            blockTimeSlot.blockedTimeSlot.push(req.body.timeSlot);
            await blockTimeSlot.save();
            return res.status(201).json({
                message:"Slot Blocked Added Successfully"
            })
            
        } else {
            const blockTimeSlot = new BlockedTimeSlot();
            blockTimeSlot.dateForSlot = req.body.date;
            blockTimeSlot.bookingPlanId = req.body.bookingPlanId;
            blockTimeSlot.service = req.body.service;
            blockTimeSlot.blockedTimeSlot.push(req.body.timeSlot);
            await blockTimeSlot.save();
            return res.status(201).json({
                message:"Slot Blocked Created Successfully"
            })
        }
    } catch (error) {
        next(error);
    }
}


exports.getBlockedTimeSlot = async (req, res, next) => {
    try{
        const bookingPlan = await BookingPlan.findById(req.query.bookingPlanId);
        if(!bookingPlan){
            return next(new AppError("Booking Plan Not Found", 404))
        } 
        
        const blockTimeSlot = await BlockedTimeSlot.findOne({dateForSlot:req.query.date});
        if(!blockTimeSlot){
            return next(new AppError("No Blocked Timeslot", 200))
        }

        res.status(200).json({
            blockTimeSlot
        })
    } catch(error){
        next(error)
    }
}


exports.deleteBlockTimeSlot = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.findById(req.body.bookingPlanId);
        if(!bookingPlan){
            return next(new AppError("Booking Plan Not Found", 404))
        } 
        
        const blockTimeSlot = await BlockedTimeSlot.findOne({dateForSlot:req.body.date});
        if(!blockTimeSlot){
            return next(new AppError("No Blocked Timeslot", 404))
        }

        const filteredTimeSlot = blockTimeSlot.blockedTimeSlot.filter((slot) => slot !== req.body.timeSlot) 
        blockTimeSlot.blockedTimeSlot = filteredTimeSlot;
        await blockTimeSlot.save();

        res.status(200).json({
            message:`Deleted ${req.body.timeSlot}`
        })
    } catch (error) {
        next(error)
    }
}