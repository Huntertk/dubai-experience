import mongoose from "mongoose";

export type TypeBooking = {
    _id:string;
    adultCount:number;
    childCount:number;
    adultTotal:number;
    childTotal:number;
    totalAmount:number;
    bookingDate:string;
    bookingDateString:string;
    name:string;
    mobileNumber:string;
    email:string;
    bookingStatus:'pending' | 'confirmed' | 'completed' | 'cancelled' | 'payment not verified';
    ticketId:string;
    bookingId:string;
    ticketTitle:string;
    preference:string;
    service:string;
    timeSlot?:string;
    payment:boolean;
    isQrGenerated:boolean;
    successToken?:string;
    bookingToken?:string;
    
}

const bookingSchema = new mongoose.Schema({
    adultCount:{
        type:Number,
        default:0
    },
    childCount:{
        type: Number,
        default:0
    },
    adultTotal:{
        type:Number,
        default:0
    },
    childTotal:{
        type: Number,
        default:0
    },
    totalAmount:{
        type:Number
    },
    bookingDate:{
        type: String
    },
    bookingDateString:{
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
    ticketId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ticket'
    },
    bookingId:{
        type: String
    },
    ticketTitle:{
        type:String
    },
    preference:{
        type: String
    },
    service:{
        type: String
    },
    timeSlot:{
        type: String
    },
    payment:{
        type:Boolean,
        default: false
    },
    isQrGenerated:{
        type:Boolean,
        default:false
    },
    bookingToken:String,
    successToken:String
}, {timestamps:true});


const Booking = mongoose.model<TypeBooking>('Booking', bookingSchema)
export default Booking;