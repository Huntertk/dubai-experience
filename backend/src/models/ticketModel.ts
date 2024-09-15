import mongoose from "mongoose";


type TypeTicketPricing = {
    title:string;
    weekDays:{
        adult:number;
        child:number;
    };
    weekEnds:{
        adult:number;
        child:number;
    };
}

type TypeTicketPerference = {
    title:string;
    details:string[];
}

type TypeTicketInclusionAndExclusion = {
    cancellationPolicy:string[];
    inclusion:string[];
    exclusion:string[];
}

export type TypeTicket = {
    _id:string;
    title:string;
    description:string[];
    service:string;
    images:string[];
    timeSlots:string[];
    preference:TypeTicketPerference[];
    pricing:TypeTicketPricing[];
    inclusionAndExclusion:TypeTicketInclusionAndExclusion;
    rulesAndRestriction:string[];
};

export type TypeTicketData = {
    title:string;
    description:string[];
    service:string;
    images:string[];
    timeSlots?:string[];
    preference:TypeTicketPerference[];
    pricing:TypeTicketPricing[];
    inclusionAndExclusion:TypeTicketInclusionAndExclusion;
    rulesAndRestriction:string[];
};


const ticketSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:[String],
    service:{
        type:String
    },
    images:[String],
    timeSlots:[String],
    preference:[
        {
            title:String,
            details:[String]   
        }
    ],
    pricing:[
        {
            title:String,
            weekDays:{
                adult:Number,
                child:Number
            },
            weekEnds:{
                adult:Number,
                child:Number
            }
        }
    ],
    inclusionAndExclusion:{
        cancellationPolicy:[String],
        inclusion:[String],
        exclusion:[String]
    },
    rulesAndRestriction:[String]
});

const Ticket = mongoose.model<TypeTicket>('Ticket', ticketSchema);
export default Ticket;