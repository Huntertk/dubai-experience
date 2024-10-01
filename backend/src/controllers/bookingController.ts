import { NextFunction, Request, Response } from "express";
import 'dotenv/config';
import stripePackage from 'stripe';
import Booking, { TypeBooking } from "../models/bookingModel";
import Ticket from "../models/ticketModel";
import AppError from "../error/customError";
import QrCode from "../models/qrModel";
import crypto from 'crypto';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import qr from 'qrcode';
import { TypeBaseQuery, TypeBookingQuery, TypeImgUrl } from "../utils/types";
import { sendTicketConfirmationMail, sendTicketMailWithPdf } from "../utils/sendMail";
import { directBookingService, qrModuleService } from "../utils/helper";

const stripe = new stripePackage(process.env.STRIPE_SK as string);

export const createBooking = async (req:Request, res:Response, next:NextFunction) => {
    try {
        //Booking Payload
        const bookingPayload:TypeBooking = req.body;

        
        const day = bookingPayload.bookingDay

        //Finding Ticket
        const ticket = await Ticket.findById(bookingPayload.ticketId);
        if(!ticket){
            return next(new AppError("Ticket Id is Wrong", 400))
        }

        if(qrModuleService.includes(bookingPayload.service)){
            let qrDataAdult = await QrCode.find({title: ticket.title, isUsed:false, Type:"Adult"});
                
                if(qrDataAdult.length < bookingPayload.adultCount){
                    return next(new AppError("Ticket not allowed to book insufficient inventory", 400))
                }
            
                let qrDataChild = await QrCode.find({title: ticket.title, isUsed:false, Type:"Child"});
                
                if(qrDataChild.length < bookingPayload.childCount){
                    return next(new AppError("Ticket not allowed to book insufficient inventory", 400))
                }
        }

        bookingPayload.bookingToken = crypto.randomBytes(32).toString('hex');
        let adultTotal=0
        let childTotal=0
        const pricingData = ticket.pricing.filter((d) => d.title === bookingPayload.preference);
        if(pricingData.length === 0){
            return next(new AppError("Ticket Preference is wrong", 400))
        }
        pricingData.forEach((data) => {
            if(day === 'Sun' || day === 'Fri' || day === 'Sat'){
                adultTotal = bookingPayload.adultCount * data.weekEnds.adult
                childTotal = bookingPayload.childCount * data.weekEnds.child
            } else {
                adultTotal = bookingPayload.adultCount * data.weekDays.adult
                childTotal = bookingPayload.childCount * data.weekDays.child
            }
        });
        let totalAmount = adultTotal + childTotal;
        const hostName = req.body.hostName
        bookingPayload.totalAmount = totalAmount;
        bookingPayload.adultTotal = adultTotal;
        bookingPayload.childTotal = childTotal;
        bookingPayload.ticketTitle = ticket.title;
        const totalBookingCount = await Booking.countDocuments();
        bookingPayload.bookingId = `ME000${totalBookingCount + 1}`;
        bookingPayload.bookingStatus = "payment not verified";
        await Booking.create(bookingPayload);

        const createBookingSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: bookingPayload.ticketTitle,
                            metadata:{
                                bookingDate:bookingPayload.bookingDate, 
                                adultCount:bookingPayload.adultCount, 
                                childCount:bookingPayload.childCount,
                                preference:bookingPayload.preference, 
                                name:bookingPayload.name, 
                                email:bookingPayload.email, 
                                mobileNumber:bookingPayload.mobileNumber,
                                service:bookingPayload.service
                            }
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `https://${hostName}/api/v1/booking/payment?verify=true&token=${bookingPayload.bookingToken}`,
            cancel_url: `https://${hostName}/api/v1/booking/payment?verify=false`,

            payment_intent_data: {
                setup_future_usage: 'off_session',
                description: 'Booking payment',
                shipping: {
                    name:bookingPayload.name,
                    phone: bookingPayload.mobileNumber,
                    address: {
                        line1: '...',
                        postal_code: '...',
                        city: '...',
                        country: 'in', //this will channge later in production
                    },
                },
                receipt_email: bookingPayload.email,  // Include user's email as receipt_email
                metadata: {
                    bookingDate:bookingPayload.bookingDate,
                    adultCount:bookingPayload.adultCount,
                    childCount:bookingPayload.childCount,
                    totalAmount:bookingPayload.totalAmount,
                },
            },
        });
        
        return res.status(201).json({
            success:true,
            url:createBookingSession.url
        })

    } catch (error) {
        return next(error);
    }
}

export const verifyPayment = async(req:Request, res:Response, next:NextFunction) => {
        const verify = req.query.verify === "true" ? true : false;

        if(verify === false || !req.query.token){
            return res.redirect("/failed")
        }

    try {

        let booking = await Booking.findOne({bookingToken:req.query.token});

        if(!booking){
            return res.redirect("/failed")
        }

        const ticket = await Ticket.findById(booking.ticketId);

        if(!ticket){
            return res.redirect("/failed")
        }

        if(qrModuleService.includes(booking.service) && booking.isQrGenerated === false){

            let qrDataAdult = await QrCode.find({title: ticket.title, isUsed:false, Type:"Adult"});
            
            if(qrDataAdult.length < booking.adultCount){
                return next(new AppError("Ticket not allowed to book insufficient inventory", 400))
            }
        
            let qrDataChild = await QrCode.find({title: ticket.title, isUsed:false, Type:"Child"});
            
            if(qrDataChild.length < booking.childCount){
                return next(new AppError("Ticket not allowed to book insufficient inventory", 400))
            }

            const doc = new PDFDocument();
                
                doc.pipe(fs.createWriteStream(path.join(__dirname, "..", "..", "uploads", `${booking._id}_ticket.pdf`)));
                doc
                .image(path.join(__dirname, "..", "..", "public", `logo.jpg`), 50, 45, { width: 200 })
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
                .text(`Tour Name:  ${ticket.title}`, 50, 260)
                .fontSize(15)
                .text(`Guest Name: ${booking.name}`, 50, 310)
                .fontSize(15)
                .text(`Guest Email: ${booking.email}`, 50, 340)
                .fontSize(15)
                .text(`Mobile Number: ${booking.mobileNumber}`, 50, 370)
                .fontSize(15)
                .text(`Total Adult X ${booking.adultCount}`, 50, 400)
                .fontSize(15)
                .text(`Total Child X ${booking.childCount}`, 50, 430)
                .fontSize(15)
                .text(`Date:  ${booking.bookingDateString}`, 50, 460)


                const generateQrCode = (bookingId:string, index:number, qrImageData:string, paxType:string):Promise<string> => {
                    return new Promise((resolve, reject) => {
                        const qrFilePath = path.join(__dirname, "..", "..", "uploads", `${bookingId}_${paxType}_${index+1}_qr.png`)

                        qr.toFile(qrFilePath,`${qrImageData}`,(err) => {
                            if (err) {
                                reject(err);
                              } else {
                                resolve(qrFilePath);
                              }
                        })
                    })
                }

                const generateTicketPdf = (doc:PDFKit.PDFDocument, qrImageData:string, qrFilePath:string, pax:string, index:number) => {
                    doc
                    .addPage()
                    .image(path.join(__dirname, "..", "..", "public", `logo.jpg`), 50, 45, { width: 100 })
                    .image(path.join(__dirname, "..", "..", "public", `${booking.service}.jpg`), 200, 50, {width: 200})
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
                    .list(ticket.rulesAndRestriction,50,440)
                }

                for (let i = 0; i <booking.adultCount; i++) {
                    let qrData = await QrCode.findOne({title: ticket.title, isUsed:false, Type:"Adult"});
                    
                    if(!qrData){
                        console.log("Error QR Not Found");
                        return res.redirect('/failed')
                    }
                        const qrImageData:string = qrData.QrCode;
                        
                        //Generating Ticket QR
                        const qrFilePath:string = await generateQrCode(
                            booking._id.toString(),
                            i,
                            qrImageData,
                            'Adult'
                        )
                        qrData.isUsed = true;
                        qrData.usedBy = booking._id.toString();
                        await qrData.save();
                        
                        //Generating Ticket Pdf
                        generateTicketPdf(doc,qrImageData,qrFilePath,'Adult', i)

                }
                    
        
                for (let i = 0; i <booking.childCount; i++) {
                    
                    //Generating Ticket QR
                    let qrData = await QrCode.findOne({title: ticket.title, isUsed:false, Type:"Child"});
                    if(!qrData){
                        return res.redirect('/failed')
                    }
                        const qrImageData:string = qrData.QrCode;
                        
                        //Generating Ticket QR
                        const qrFilePath:string = await generateQrCode(
                            booking._id.toString(),
                            i,
                            qrImageData,
                            'Child'
                        )
                        qrData.isUsed = true;
                        qrData.usedBy = booking._id.toString();
                        await qrData.save();
                        
                        //Generating Ticket Pdf
                        generateTicketPdf(doc,qrImageData,qrFilePath,'Child', i)
                   
                }
                // Finalize PDF file
                doc.end();

                let imgUrls:TypeImgUrl = {
                    bannerImg:"",
                    productImg:""
                };
                
                if(booking.service === 'dubai-frame') {
                    imgUrls.bannerImg="https://i.postimg.cc/13CSwzpT/dubai-Frame-Highlights-Two.avif"
                    imgUrls.productImg= "https://i.postimg.cc/cJjR8sKB/dubai-Frame-Highlights-One.avif"
                    
                } else if(booking.service === 'aya-universe') {
                    imgUrls.bannerImg="https://i.postimg.cc/ZqGz90cj/3.jpg"
                    imgUrls.productImg= "https://i.postimg.cc/QC1QxSQW/aya-universe.jpg"

                } else if(booking.service === 'lost-chambers') {
                    imgUrls.bannerImg="https://i.postimg.cc/G3VNDvy5/lost-Chambers-Ticket-Two.jpg"
                    imgUrls.productImg= "https://i.postimg.cc/h4f6h2fm/lost-Chambers-Ticket-One.jpg"

                } else if(booking.service === 'green-planet') {
                    imgUrls.bannerImg="https://i.postimg.cc/pTxRN33b/green-Planet-Highlights-One.jpg"
                    imgUrls.productImg= "https://i.postimg.cc/9MpVcJj4/green-Planet-Highlights-Two.jpg"

                } else if(booking.service === 'dubai-aquarium-and-underwater-zoo') {
                    imgUrls.bannerImg="https://i.postimg.cc/05HfVM5Q/dubai-Zoo-And-Aquarium-Two.jpg"
                    imgUrls.productImg= "https://i.postimg.cc/d3D9qv6w/dubai-Zoo-And-Aquarium-Four.jpg"

                } else if(booking.service === 'madame-tussauds') {
                    imgUrls.bannerImg="https://i.postimg.cc/cLK1p3vT/madame-Tussauds-Img-Four.jpg"
                    imgUrls.productImg= "https://i.postimg.cc/gk22KQdC/madame-Tussauds-Img-Six.webp"
                } else if(booking.service === 'atlantis-aquaventure') {
                    imgUrls.bannerImg="https://i.postimg.cc/nLfnKCTz/Atlantis-Aquaventure-Img-Ten.jpg"
                    imgUrls.productImg= "https://i.postimg.cc/ZKDRNb1B/Atlantis-Aquaventure-Img-Four.jpg"
                }

                const mailMessage = `We are delighted to confirm your ticket booking with Dubai Experience for ${booking.ticketTitle} Entry Ticket! Get ready to embark on an unforgettable experience at one of the most exciting destinations.`

                // Sending Mail
                await sendTicketMailWithPdf(booking, imgUrls, booking.bookingDateString,mailMessage)

                  //Deleteting QR Generated Images
                for (let i = 0; i <booking.adultCount; i++) {
                    fs.unlink(path.join(__dirname, "..", "..", "uploads", `${booking._id}_Adult_${i+1}_qr.png`), (err) => {
                        if (err) {
                        console.error('Error while deleting:', err);
                        }
                    });
                }

                //Deleteting QR Generated Images
                for (let i = 0; i <booking.childCount; i++) {
                    fs.unlink(path.join(__dirname, "..", "..", "uploads", `${booking._id}_Child_${i+1}_qr.png`), (err) => {
                        if (err) {
                        console.error('Error while deleting:', err);

                        }
                    });
                }

            

            
            // Updating Booking Qr Generated to true
            booking.payment = true;
            booking.bookingStatus = "confirmed";
            booking.isQrGenerated = true;
            booking.successToken = crypto.randomBytes(32).toString('hex');
            booking.bookingToken = undefined
            await booking.save();

            
            return res.status(201).redirect(`/success?token=${booking.successToken}`)
            // return res.status(201).json({
            //     success:true,
            //     message:`/success?token=${booking.successToken}`
            // })

        } else if(directBookingService.includes(booking.service)) {

            // Updating Booking
            booking.payment = true;
            booking.bookingStatus = "confirmed";
            booking.isQrGenerated = true;
            booking.successToken = crypto.randomBytes(32).toString('hex');
            booking.bookingToken = undefined
            await booking.save();

            let imgUrls:TypeImgUrl = {
                bannerImg:"",
                productImg:""
            };

            const mailMessage = "We're delighted to confirm your booking! Your official e-ticket is on its way to your email shortly. In case you don't receive it, please don't hesitate to get in touch with us."

            if(booking.service === 'burj-khalifa'){
                imgUrls.bannerImg="https://i.postimg.cc/Y2VtWMQK/burj-Khalifa-Highlights-One.jpg"; 
                imgUrls.productImg="https://i.postimg.cc/FR6X3Vdg/burj-Khalifa-Ticket-Two.jpg"
                
            } else if(booking.service === 'dubai-sky-view'){
                imgUrls.bannerImg="https://i.postimg.cc/Cxv6KRMN/dubai-Sky-View-Img-Four.jpg"; 
                imgUrls.productImg="https://i.postimg.cc/j2rM1Nvs/dubai-Sky-View-Img-Six.jpg"

            }

            //Sending Booking Confirmation Mail 
            await sendTicketConfirmationMail(booking,imgUrls,booking.bookingDateString,mailMessage)

            return res.status(201).redirect(`/success?token=${booking.successToken}`)
            // return res.status(201).json({
            //     success:true,
            //     message:`/success?token=${booking.successToken}`
            // })

        } else {
            return next(new AppError("No Routes Found Contact to admin", 400))
            
        }
    } catch (error) {
        return next(error);
    }
}



//Getting All Bookings

export const getAllBookings = async (req:Request, res:Response, next:NextFunction) => {
    const {search,service,bookingStatus}:TypeBookingQuery = req.query;

    const page:number = Number(req.query.page) || 1;
    const limit:number = 50;
    const skip:number = (page - 1) * limit;
    const baseQuery:TypeBaseQuery = {}

    if(search){
        baseQuery.email = {
            $regex:search,
            $options:"i"
        }
    }

    if(service){
        baseQuery.service = service
    }

    if(bookingStatus){
        baseQuery.bookingStatus = bookingStatus
    }

    
    try {
        
        const bookings = await Booking.find(baseQuery)
        .sort({createdAt:-1})
        .limit(limit)
        .skip(skip);
    
        const filteredProducts = await Booking.find(baseQuery);
    
        const totalPage = Math.ceil(filteredProducts.length / limit);
    
        return res.status(200).json({
            success:true,
            totalPage,
            bookings
        })
    } catch (error) {
        return next(error)
    }
}


export const getSuccessBookingDetails = async(req:Request, res:Response, next:NextFunction) => {
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
       return res.status(200).json(booking)
    } catch (error) {
        return next(error)
    }
}