const mongoose = require('mongoose');

const blockedTimeSlotSchema = new mongoose.Schema({
    dateForSlot:{
        type: String
    },
    blockedTimeSlot:[String],
    bookingPlanId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'BookingPlan'
    },
    service:{
        type:String
    }
}, {timestamps: true})

const BlockedTimeSlot = mongoose.model('BlockedTimeSlot', blockedTimeSlotSchema)
module.exports = BlockedTimeSlot;