import mongoose from "mongoose";

type TypeTimeSlot = {
    _id:string;
    dateForSlot:string;
    timeSlots:string[];
    ticketId:string;
    service:string;
}


const timeSlotSchema = new mongoose.Schema({
    dateForSlot:{
        type: String
    },
    timeSlots:[String],
    ticketId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ticket'
    },
    service:{
        type:String
    }
}, {timestamps: true})

const TimeSlot = mongoose.model<TypeTimeSlot>('TimeSlot', timeSlotSchema)
export default TimeSlot;