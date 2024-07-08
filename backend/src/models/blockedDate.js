const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    },
    tourId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'BookingPlan'
    },
    service:{
        type:String
    }
}, {timestamps: true})

const BlockedDate = mongoose.model('BlockedDate', datesSchema)
module.exports = BlockedDate;