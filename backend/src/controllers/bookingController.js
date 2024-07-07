const { StatusCodes } = require("http-status-codes")
const Booking = require("../models/booking")
const nodemailer = require('nodemailer')
const stripePackage = require('stripe');
const dotenv = require('dotenv');
const AppError = require("../error/customError");
const { bookingEmailTemplate } = require("../utils/emailTemplate");
const crypto = require('crypto');
const BookingPlan = require("../models/bookingPlans");
dotenv.config()

const stripe = stripePackage(`${process.env.STRIPE_SK}`);

const createPaymentSession = async (req, res, next) => {
    const {
        name,
        email,
        mobileNumber,
        bookingDate,
        adultCount,
        childCount,
        bookingTitle,
        service,
        prefrence,
        hostName,
        tourId
    } = req.body;
    try {
        let daysArr = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
        const day = daysArr[new Date(bookingDate).getDay()]
        const bookingPlan = await BookingPlan.findById(tourId);

        if(!bookingPlan){
            return next(new AppError("Tour Id Wrong", 400))
        }
        let adultTotal = 0;
        let childTotal = 0;
        const pricingData = bookingPlan.pricing.filter(d => d.title === prefrence);

        if(pricingData.length === 0){
            return next(new AppError("Tour Preference Wrong", 400))
        }
        pricingData.forEach((data) => {
            if(day === 'Sun' || day === 'Fri' || day === 'Sat'){
                adultTotal = adultCount * data.weekEnds.adult
                childTotal = childCount * data.weekEnds.child
            } else {
                adultTotal = adultCount * data.weekDays.adult
                childTotal = childCount * data.weekDays.child
            }
        });
        const uuid = crypto.randomUUID();
        let totalAmount = adultTotal + childTotal;
        
        req.body.uid = uuid;
        req.body.totalAmount = totalAmount
        req.body.adultTotal = adultTotal
        req.body.childTotal = childTotal
        const countDocuments = await Booking.countDocuments();
        req.body.bookingId = `ME000${countDocuments + 1}`;
        req.body.bookingStatus = "payment not verified"
        const booking = await Booking.create(req.body);


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
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
            success_url: `https://${hostName}/api/v1/booking/payment?verify=true&id=${booking.uid}`,
            cancel_url: `https://${hostName}/payment?verify=false`,

            // success_url: `http://${hostName}:3000/api/v1/booking/payment?verify=true&id=${booking.uid}`,
            // cancel_url: `http://${hostName}:3000/api/v1/booking/payment?verify=false`,
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
        const booking = await Booking.findOne({uid: req.query.id});
        if(!booking){
            return next(new AppError("Booking not created"))
        }
        const uuid = crypto.randomUUID();
        const newBooking = await Booking.findByIdAndUpdate(booking._id, {payment:true, bookingStatus:"confirmed", uid:uuid, successToken:  crypto.randomBytes(16).toString('hex')}, {new: true})

        let imgUrls;
        if(booking.service === 'dubai-frame') {
            imgUrls = {
                bannerImg:"https://i.postimg.cc/13CSwzpT/dubai-Frame-Highlights-Two.avif", 
                productImg: "https://i.postimg.cc/cJjR8sKB/dubai-Frame-Highlights-One.avif"
            }
        }

        const day = new Date(booking.bookingDate).getDate(); // Get the day of the month (1-31)
        const month = new Date(booking.bookingDate).getMonth() + 1; // Get the month (0-11), so add 1
        const year = new Date(booking.bookingDate).getFullYear(); // Get the full year (e.g., 2024)
        const dateFormatted = `${day}/${month}/${year}`

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
    createPaymentSession,
    getConfirmedBooking,
    getSuccessBookingDetails
}