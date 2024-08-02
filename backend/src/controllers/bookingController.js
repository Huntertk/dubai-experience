const { StatusCodes } = require("http-status-codes")
const Booking = require("../models/booking")
const nodemailer = require('nodemailer')
const stripePackage = require('stripe');
const dotenv = require('dotenv');
const AppError = require("../error/customError");
const { bookingEmailTemplate } = require("../utils/emailTemplate");
const crypto = require('crypto');
const BookingPlan = require("../models/bookingPlans");
const fs = require('fs');
const path = require('path');
const qr = require('qrcode')
const PDFDocument = require('pdfkit');
const QrCode = require("../models/qrCodeModel");
const { format } = require("date-fns");
dotenv.config()

const stripe = stripePackage(`${process.env.STRIPE_SK}`);

const createBooking = async (req, res, next) => {
    const {
        name,
        email,
        mobileNumber,
        bookingDate,
        adultCount,
        childCount,
        bookingType,
        bookingTitle,
        responseClientUrl,
        service,
        prefrence,
        hostName,
        bookingPlanId
    } = req.body;

    try {

        let daysArr = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
        const day = daysArr[new Date(bookingDate).getDay()]
        const bookingPlan = await BookingPlan.findById(bookingPlanId);

        if(!bookingPlan){
            return next(new AppError("Booking Plan Id Wrong", 400))
        }
        if(service !== 'aras-resturant'){
            
                let qrDataAdult = await QrCode.find({title: bookingTitle, isUsed:false, Type:"Adult"});
                
                if(qrDataAdult.length < adultCount){
                    return next(new AppError("Ticket not allowed to book zero inventory"))
                }
            
                let qrDataChild = await QrCode.find({title: bookingTitle, isUsed:false, Type:"Child"});
                
                if(qrDataChild.length < childCount){
                    return next(new AppError("Ticket not allowed to book zero inventory"))
                }
            
        }

        let adultTotal = 0;
        let childTotal = 0;
        const pricingData = bookingPlan.pricing.filter(d => d.title === prefrence);

        if(pricingData.length === 0){
            return next(new AppError("Booking Plan Preference Wrong", 400))
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
        let totalAmount = adultTotal + childTotal;

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
                        country: 'in', //this will change later
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

    let booking = await Booking.findById(req.query.id);
    const bookingPlan = await BookingPlan.findById(booking.bookingPlanId);
    

    const day = new Date(booking.bookingDate).getDate(); // Get the day of the month (1-31)
    const month = new Date(booking.bookingDate).getMonth() + 1; // Get the month (0-11), so add 1
    const year = new Date(booking.bookingDate).getFullYear(); // Get the full year (e.g., 2024)
    // const dateFormatted = `${day}/${month}/${year}`;
    const dateFormatted = booking.bookingDateString;


    if(!booking || !bookingPlan){
        return next(new AppError("Booking not created",400));
    }

    if(booking.isQrGenerated === false){

        try {
                let qrDataAdult = await QrCode.find({title: booking.bookingTitle, isUsed:false, Type:"Adult"});
                    
                if(qrDataAdult.length < booking.adultCount){
                    return next(new AppError("Ticket not allowed to book zero inventory"))
                }
            
                let qrDataChild = await QrCode.find({title: booking.bookingTitle, isUsed:false, Type:"Child"});
                
                if(qrDataChild.length < booking.childCount){
                    return next(new AppError("Ticket not allowed to book zero inventory"))
                }
        
                const doc = new PDFDocument();
                
                // Pipe its output somewhere, like to a file or HTTP response
                // See below for browser usage
                doc.pipe(fs.createWriteStream(path.join(__dirname, "..", "uploads", `${booking._id}_ticket.pdf`)));
                doc
                .image(path.join(__dirname, "..", "public", `logo.jpg`), 50, 45, { width: 200 })
                .fillColor('#444444')
                .fontSize(15)
                .text('e-ticket', 200, 50, { align: 'right' })
                .fillColor("#444444")
                .fontSize(20)
                //Ticket Detials
                .text("Ticket Details", 50, 160)
                //Hr Line
                .strokeColor("#aaaaaa")
                .lineWidth(1)
                .moveTo(50, 185)
                .lineTo(550, 185)
                .stroke()
                //Detials
                .fontSize(15)
                .font('Helvetica-Bold')
                .text(`Order Id: #${booking._id}`, 50, 200)
                .fontSize(15)
                .text(`Booking Id: #${booking.bookingId}`, 50, 230)
                .fontSize(15)
                .text(`Tour Name:  ${booking.bookingTitle}`, 50, 260)
                .fontSize(15)
                .text(`Guest Name: ${booking.name}`, 50, 290)
                .fontSize(15)
                .text(`Guest Email: ${booking.email}`, 50, 320)
                .fontSize(15)
                .text(`Mobile Number: ${booking.mobileNumber}`, 50, 350)
                .fontSize(15)
                .text(`Total Adult X ${booking.adultCount}`, 50, 380)
                .fontSize(15)
                .text(`Total Child X ${booking.childCount}`, 50, 410)
                .fontSize(15)
                .text(`Date:  ${dateFormatted}`, 50, 440)


                const generateQrCode = (bookingId, index, qrImageData, paxType) => {
                    return new Promise((resolve, reject) => {
                        const qrFilePath = path.join(__dirname, "..", "uploads", `${bookingId}_${paxType}_${index+1}_qr.png`)

                        qr.toFile(qrFilePath,`${qrImageData}`,(err) => {
                            if (err) {
                                reject(err);
                              } else {
                                resolve(qrFilePath);
                              }
                        })
                    })
                }

                const generateTicketPdf = (doc, qrImageData, qrFilePath, pax, index) => {
                    doc
                    .addPage()
                    .image(path.join(__dirname, "..", "public", `logo.jpg`), 50, 45, { width: 100 })
                    .image(path.join(__dirname, "..", "public", `${booking.service}.jpg`), 200, 50, {width: 200})
                    .fontSize(12)
                    .font('Helvetica')
                    .text(`Guest Name: ${booking.name}`, 50, 230)
                    .fontSize(12)
                    .text(`Guest Email: ${booking.email}`, 50, 260)
                    .fontSize(12)
                    .text(`Mobile Number: ${booking.mobileNumber}`, 50, 290)
                    .fontSize(12)
                    .text(`${pax} Ticket No:  ${index+1}`, 50, 320)
                    .image(qrFilePath, 380, 200, {width: 150})
                    .fontSize(10)
                    .text(`${qrImageData}`, 405, 340)
                    .fontSize(12)
                    .text(`Place QR against the scanner `, 405, 360)
                    .fontSize(15)
                    .text(`General Rules and Regulation`, 50, 410)
                    .strokeColor("#aaaaaa")
                    .lineWidth(1)
                    .moveTo(50, 430)
                    .lineTo(550, 430)
                    .stroke()
                    .fontSize(12)
                    .font('Helvetica')
                    .list(bookingPlan.rulesAndRestriction,50,440)
                }
                

                for (let i = 0; i <booking.adultCount; i++) {
                    let qrData = await QrCode.findOne({title: booking.bookingTitle, isUsed:false, Type:"Adult"});
        
                    const qrImageData = qrData.QrCode;
        
                    //Generating Ticket QR
                    const qrFilePath = await generateQrCode(booking._id,i,qrImageData,'Adult')
                    qrData.isUsed = true;
                    qrData.usedBy = booking._id;
                    await qrData.save();
                
                    //Generating Ticket Pdf
                    generateTicketPdf(doc,qrImageData, qrFilePath, 'Adult', i)

                }
                    
        
                for (let i = 0; i <booking.childCount; i++) {
                    let qrData = await QrCode.findOne({title: booking.bookingTitle, isUsed:false, Type:"Child"});
        
        
                    const qrImageData = qrData.QrCode;
                    
                    //Generating Ticket QR
                    const qrFilePath = await generateQrCode(booking._id,i,qrImageData,'Child')
                    qrData.isUsed = true;
                    qrData.usedBy = booking._id;
                    await qrData.save();

                     //Generating Ticket Pdf
                    generateTicketPdf(doc,qrImageData, qrFilePath, 'Child', i)
                   
                }
        
                    // Finalize PDF file
                    doc.end();
    
            } catch (error) {
                return next(error)
            }
                

        let imgUrls;
        if(booking.service === 'dubai-frame') {
            imgUrls = {
                bannerImg:"https://i.postimg.cc/13CSwzpT/dubai-Frame-Highlights-Two.avif", 
                productImg: "https://i.postimg.cc/cJjR8sKB/dubai-Frame-Highlights-One.avif"
            }
        }

        

    try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.MAIL_PASS
                }
            })

            const mailMessage = `We are delighted to confirm your ticket booking with Dubai Experience for ${booking.bookingTitle} Entry Ticket! Get ready to embark on an unforgettable experience at one of the most exciting destinations.
`

            const mailOptions = {
                from: process.env.EMAIL,
                to: `${booking.email},
                ${process.env.EMAIL}`,
                subject: `Booking Successfully`,
                html: bookingEmailTemplate(booking,imgUrls, dateFormatted, mailMessage),
                attachments: [{
                    filename: `${booking._id}_ticket.pdf`,
                    path: path.join(__dirname, "..", "uploads", `${booking._id}_ticket.pdf`),
                    contentType: 'application/pdf'
                }],
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(info.response, " Email sent");

                    //Generated Qr Pdf Deleted
                    fs.unlink(path.join(__dirname, "..", "uploads", `${booking._id}_ticket.pdf`), 
                        (err) => {
                            if (err) {
                                console.error('Error while deleting:', err);
                            }
                        }
                    )

                }
            });


            //Deleteting QR Generated Images
            for (let i = 0; i <booking.adultCount; i++) {
                fs.unlink(path.join(__dirname, "..", "uploads", `${booking._id}_Adult_${i+1}_qr.png`), (err) => {
                    if (err) {
                      console.error('Error while deleting:', err);
                    }
                });
            }

            //Deleteting QR Generated Images
            for (let i = 0; i <booking.childCount; i++) {
                fs.unlink(path.join(__dirname, "..", "uploads", `${booking._id}_Child_${i+1}_qr.png`), (err) => {
                    if (err) {
                      console.error('Error while deleting:', err);

                    }
                });
            }

            

            
            // Updating Booking Qr Generated to true

            const newBooking = await Booking.findByIdAndUpdate(req.query.id, {
                payment:true, 
                bookingStatus:"confirmed", 
                isQrGenerated: true,
                successToken:  crypto.randomBytes(16).toString('hex')
            }, {new: true})
            

            // Updating Booking Qr Generated to true
            // booking.isQrGenerated = true;
            // await booking.save();
            
            // res.status(200).send("success")
            res.status(StatusCodes.CREATED).redirect(`/success?token=${newBooking.successToken}`)
    } catch (error) {
        return res.redirect("/failed")
    }


    } else {
        return res.redirect("/failed")
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
        next(error)
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