const AppError = require("../error/customError.js");
const BookingPlan = require("../models/bookingPlans.js");

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
        if(bookingPlan.length < 1){
            return next(new AppError("Data not found", 400))
        }
        res.status(200).json({bookingPlan})
    } catch (error) {
        next(error)
    }
}