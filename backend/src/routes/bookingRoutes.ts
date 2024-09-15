import { NextFunction, Request, Response, Router } from "express";
import { createBooking, getAllBookings, getSuccessBookingDetails, verifyPayment } from "../controllers/bookingController";
import { body, validationResult } from "express-validator";
import AppError from "../error/customError";
import { authAdmin, authorizeRoles } from "../middlewares/authMiddleware";

const router = Router();

router.post('/create-session',
    [
        body('bookingDate')
        .notEmpty()
        .withMessage("Please provide booking date"),
        body('name')
        .notEmpty()
        .withMessage("Please provide user name"),
        body('mobileNumber')
        .notEmpty()
        .withMessage("Please provide user mobile number"),
        body('email')
        .notEmpty()
        .withMessage("Please provide user email"),
        body('ticketId')
        .notEmpty()
        .withMessage("Please provide ticketId"),
        body('service')
        .notEmpty()
        .withMessage("Please provide ticket service name"),
    ],
    (req:Request, res:Response, next:NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error) => error.msg);
            throw new AppError(errorMessages[0],400)
        }
        next()
    },
    createBooking
)

router.get('/payment', verifyPayment);
router.get('/success', getSuccessBookingDetails);

router.get('/admin/all-bookings', 
    authAdmin,
    authorizeRoles('admin'),
    getAllBookings
)

export default router;
