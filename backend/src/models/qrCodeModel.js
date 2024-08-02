const mongoose  = require('mongoose');

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


const QrCode = mongoose.model('QrCode', qrCodeSchema)
module.exports = QrCode;