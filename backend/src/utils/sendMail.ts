import nodemailer from 'nodemailer';
import fs from 'fs';
import { TypeBooking } from '../models/bookingModel';
import { TypeImgUrl } from './types';
import path from 'path';
import { bookingEmailTemplate } from './emailTemplate';

export const sendTicketMailWithPdf = async (booking:TypeBooking, imgUrls:TypeImgUrl, dateString:string, message:string) => {
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
            html: bookingEmailTemplate(booking, imgUrls, dateString, message),
            attachments: [{
                filename: `${booking._id}_ticket.pdf`,
                path: path.join(__dirname, "..", "..", "uploads", `${booking._id}_ticket.pdf`),
                contentType: 'application/pdf'
            }],
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(info.response, " Email sent");
                //Generated Qr Pdf Deleted
                fs.unlink(path.join(__dirname, "..", "..", "uploads", `${booking._id}_ticket.pdf`), 
                    (err) => {
                        if (err) {
                            console.error('Error while deleting:', err);
                        }
                    }
                )

            }
        });
    } catch (error) {
        
    }
}


export const sendTicketConfirmationMail = async (booking:TypeBooking, imgUrls:TypeImgUrl, dateString:string, message:string) => {
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
            html: bookingEmailTemplate(booking, imgUrls, dateString, message)
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(info.response, " Email sent");
            }
        });
    } catch (error) {
        console.log(error);
    }
}