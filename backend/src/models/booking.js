const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    adultCount:{
        type:Number,
    },
    childCount:{
        type: Number,
    },
    adultTotal:{
        type:Number,
    },
    childTotal:{
        type: Number,
    },
    totalAmount:{
        type:Number
    },
    bookingDate:{
        type: String
    },
    name:{
        type:String,
    },
    mobileNumber:{
        type: String
    },
    email:{
        type: String
    },
    bookingStatus:{
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled", "payment not verified"],
        default: "pending"
    },
    bookingId:{
        type: String
    },
    bookingType:{
        type:String
    },
    bookingTitle:{
        type: String
    },
    prefrence:{
        type: String
    },
    service:{
        type: String
    },
    payment:{
        type:Boolean,
        default: false
    },
    successToken:String
},{timestamps: true})


const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking;