const mongoose = require('mongoose')

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
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
    inclusionAndExclusion:{
        cancellationPolicy:[String],
        inclusion:[String],
        exclusion:[String]
    }
}, {timestamps: true})

const BookingPlan = mongoose.model('BookingPlan', bookingPlanSchema)
module.exports = BookingPlan