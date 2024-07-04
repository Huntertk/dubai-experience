const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    },
    type:{
        type:String
    },
    service:{
        type:String
    }
}, {timestamps: true})

const BlockedDate = mongoose.model('BlockedDate', datesSchema)
module.exports = BlockedDate;