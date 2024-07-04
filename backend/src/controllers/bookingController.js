const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../error/customError")
const Booking = require("../models/booking")
const nodemailer = require('nodemailer')
const stripePackage = require('stripe');
const dotenv = require('dotenv');
const AppError = require("../error/customError");
const { bookingEmailTemplate } = require("../utils/emailTemplate");
const crypto = require('crypto');
dotenv.config()

const stripe = stripePackage(`${process.env.STRIPE_SK}`);

const createBooking = async (req, res) => {
    const {
        name,
        email,
        mobileNumber,
        bookingDate,
        adultCount,
        childCount,
        totalAmount,
        bookingType,
        bookingTitle,
        responseClientUrl,
        service,
        prefrence,
        hostName
    } = req.body;
    try {
        const countDocuments = await Booking.countDocuments();
        req.body.bookingId = `ME000${countDocuments + 1}`;
        req.body.bookingStatus = "payment not verified"
        const booking = await Booking.create(req.body);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'myr',
                        product_data: {
                            name: bookingTitle,
                            metadata:{
                                bookingDate, 
                                adultCount, 
                                childCount,
                                prefrence, 
                                name, 
                                email, 
                                mobileNumber,
                                service
                            }
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `https://${hostName}/payment?verify=true&id=${booking._id}`,
            cancel_url: `https://${hostName}/payment?verify=false`,

            // success_url: `http://${hostName}:3000/payment?verify=true&id=${booking._id}`,
            // cancel_url: `http://${hostName}:3000/payment?verify=false`,
            payment_intent_data: {
                setup_future_usage: 'off_session',
                description: 'Booking payment',
                shipping: {
                    name,
                    phone: mobileNumber,
                    address: {
                        line1: '...',
                        postal_code: '...',
                        city: '...',
                        country: '...',
                    },
                },
                receipt_email: email,  // Include user's email as receipt_email
                metadata: {
                    bookingDate,
                    adultCount,
                    childCount,
                    totalAmount,
                },
            },
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

   
}

const successBooking = async (req, res, next) => {
    if(req.query.verify === false || !req.query.id){
        return res.redirect("/failed")
    }
        const booking = await Booking.findById(req.query.id);
        if(!booking){
            return next(new AppError("Booking not created"))
        }
        const newBooking = await Booking.findByIdAndUpdate(req.query.id, {payment:true, bookingStatus:"confirmed", successToken:  crypto.randomBytes(16).toString('hex')}, {new: true})

    const imgUrls = booking.service === 'splash-mania' ? {bannerImg:"https://i.postimg.cc/15PZfQSw/Splash-Mania-Waterpark-Ticketin-Gamuda-Cove-Selangor-Klook-Malaysia.jpg", productImg: "https://i.postimg.cc/BnSswGw4/splashmania-newtagline-2022-2.png"} : booking.service === 'aras-resturant' ? {bannerImg:"https://i.postimg.cc/DzNRHTWH/6.jpg", productImg: "https://i.postimg.cc/5yggcB7y/IMG-20240129-WA0076.jpg"}  : booking.service === 'sunway-lagoon' && {bannerImg:"https://i.postimg.cc/SQ3jTkPk/1-1.jpg", productImg: "https://i.postimg.cc/qqhqJ5zP/5.jpg"} 

    const dateFormatted = booking.bookingDate.slice(4, 15)

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.MAIL_PASS
            }
        })

        const mailOptions = {
            from: process.env.EMAIL,
            to: `${booking.email},
            ${process.env.EMAIL}`,
            subject: `Booking Successfully`,
            html: bookingEmailTemplate(booking,imgUrls, dateFormatted)
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {

                console.log(info.response, " Email sent");
            }
        })
        res.status(StatusCodes.CREATED).redirect(`/success?token=${newBooking.successToken}`)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }

}


const getAllBooking = async (req, res, next) => {
    try {
        //Building Query
        const queryObj = {...req.query};

        //Excluding Query from Query Obejct 
        const excludedFelids = ["page", "service"];

        excludedFelids.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        
        let query = Booking.find(JSON.parse(queryStr)).sort({ createdAt: -1 });

        if(req.query.service){
            const service = req.query.service || ""
            query = query.find({service}).sort({ createdAt: -1 })
        }

        if(req.query.bookingStatus){
            const bookingStatus = req.query.bookingStatus || "confirmed"
            query = query.find({bookingStatus}).sort({ createdAt: -1 })
        }

        
        //PAGINATION
        const page = req.query.page * 1  || 1;
        const limit = 100;
        const skip = (page - 1) * limit;
        
        query = query.skip(skip).limit(limit);

        const numBooking = await Booking.countDocuments();
        if(req.query.page){
            if(skip > numBooking) {
                throw new Error("This page does not exist")
            }
        }

        //Execute Query
        const booking = await query;

        res.status(StatusCodes.OK).json({ 
            allBookings: booking,
            totalBookings: numBooking,
            pageNumber:page,
            pages: Math.ceil(numBooking / limit),
        })
    } catch (error) {
        next(error)
    }
}

const getTotalBookingCount = async (req, res, next) => {
    try {
        const booking = await Booking.countDocuments()
        res.status(StatusCodes.OK).json({ totalCount: booking })
    } catch (error) {
        next(error)
    }
}

const getConfirmedBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'confirmed' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ confirmedBookings: booking })
    } catch (error) {
        next(error)
    }
}


const getPendingBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'pending' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ pendingBookings: booking })
    } catch (error) {
        next(error)
    }
}


const getCompletedBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'completed' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ completedBookings: booking })
    } catch (error) {
        next(error)
    }
}


const getCancelledBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'cancelled' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ cancelledBookings: booking })
    } catch (error) {
        next(error)
    }
}


const updateBooking = async (req, res, next) => {
    const { bookingStatus } = req.body
    const { id } = req.params
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, { bookingStatus })
        res.status(200).json({ message: "Booking Updated Successfully" })
    } catch (error) {
        next(error)
    }
}

const getSuccessBookingDetails = async(req, res, next) => {
    try {
        const token = req.query.token;
        if(!token){
            return res.status(400).json({message: "No Booking Found"})
        }
        let booking = await Booking.findOne({successToken: token});

        if(!booking){
            return res.status(400).json({message: "No Booking Found"})
        }
        booking.successToken = undefined
        await booking.save();
        res.status(200).json(booking)
    } catch (error) {
        
    }
}


module.exports = {
    updateBooking,
    getCancelledBooking,
    getCompletedBooking,
    getPendingBooking,
    getTotalBookingCount,
    getAllBooking,
    successBooking,
    createBooking,
    getConfirmedBooking,
    getSuccessBookingDetails
}