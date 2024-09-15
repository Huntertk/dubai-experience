export type TypeImgUrl = {
    bannerImg:string;
    productImg:string;
}

export type TypeBaseQuery = {
    email?:{
        $regex:string;
        $options:string;
    };
    service?:string;
    bookingStatus?: string;
}


export type TypeBookingQuery = {
    search?:string;
    service?:string;
    bookingStatus?:string;
}

export type TypeTimeSlotPayload = {
    date:string;
    timeSlot:string;
    ticketId:string;
    service:string;
}