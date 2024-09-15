import mongoose from'mongoose';
 
export type TypeQR = {
    _id:string;
    QrCode:string;
    title:string;
    Type:'Adult' | 'Child';
    isUsed:boolean;
    usedBy:string;
}


const qrCodeSchema = new mongoose.Schema({
    QrCode:{
        type:String,
        unique: true
    },
    title:{
        type: String,
    },
    Type:{
        type:String,
        enum:["Adult", "Child"]
    },
    isUsed:{
        type:Boolean,
        default: false,
    },
    usedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Booking'
    }
});


const QrCode = mongoose.model<TypeQR>('QrCode', qrCodeSchema)
export default QrCode;