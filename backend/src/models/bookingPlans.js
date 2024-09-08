const mongoose = require('mongoose')

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:[String],
    type:{
        type: String
    },
    service:{
        type: String
    },
    image:{
        type:[String]
    },
    preference: [
        {
            title: String,
            price:{
                weekDays:{
                    adult:Number,
                    child:Number,
                    senior:Number,
                },
                weekEnds:{
                    adult:Number,
                    child:Number,
                    senior:Number,
                }
            },
            details:[String]
        }
    ],
    pricing:[
        {
            title:String,
            weekDays:{
                adult:Number,
                child:Number,
            },
            weekEnds:{
                adult:Number,
                child:Number,
            }
            
        }
    ],
    inclusionAndExclusion:{
        cancellationPolicy:[String],
        inclusion:[String],
        exclusion:[String]
    },
    timeSlots:[String],
    rulesAndRestriction:[String]
}, {timestamps: true})

const BookingPlan = mongoose.model('BookingPlan', bookingPlanSchema)
module.exports = BookingPlan