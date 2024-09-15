import mongoose from "mongoose";

export type TypeDateManage = {
    _id:string;
    blockedDate:string;
    ticketId:string;
    service:string;
}

const dateManageSchema = new mongoose.Schema({
    blockedDate:{
        type: String
    },
    ticketId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ticket'
    },
    service:{
        type:String
    }
}, {timestamps: true})

const DateManage = mongoose.model<TypeDateManage>('DateManage', dateManageSchema)
export default DateManage;