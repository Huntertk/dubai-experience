export type TypeTicketPricing = {
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

export type TypeBookingTicket = {
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
}



export type TypeTopThingsToDo = {
    id:string;
    imageUrl:string;
    title:string;
    linkUrl:string
}

type TypeTourWhyVisitDescriptionAndTourVisitPlan = {
    id:string;
    title:string;
    description:string
}

export type TypeTourWhyVisitAndTourVisitPlan = {
    id:string;
    title:string;
    descriptions:TypeTourWhyVisitDescriptionAndTourVisitPlan[];
    imgUrl:string;
}

export type TypeTourHighlights = {
    id:string;
    description:string;
    image:string;
}


export type TypeFAQAndAdditionQuestion = {
    id:string;
    ques:string;
    ans:string[];
}

export type TypeDateManage = {
    _id:string;
    blockedDate:string;
    ticketId:string;
    service:string;
}