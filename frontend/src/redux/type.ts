import { TypeTicketPricing } from "../utils/type";

export type TypePreferenceOption = {
    title:string;
    details:string[]
}


export type TypeSelectingTicket = {
    ticketId:string;
    service:string;
    pricing:TypeTicketPricing[];
    ticketTitle:string;
    timeSlots:string[];
    preferenceOption:TypePreferenceOption[];
}


export type TypeSelectingPreference = {
    preference:string;
    preferenceIndex:number;
}
export type TypeSelectingDate = {
    bookingDate:string;
    bookingDay:string;
    bookingDateString:string;
}

export type TypeBookingInput = {
    adultCount:number;
    childCount:number;
    adultTotal:number;
    childTotal:number;
    totalAmount:number;
    bookingDate:string;
    name:string;
    mobileNumber:string|undefined;
    email:string;
    ticketId:string;
    ticketTitle:string;
    preference:string;
    service:string;
    hostName:string;
    timeSlot:string|null;
    bookingDateString:string;
}


export type TypeLoginInput = {
    email:string;
    password:string;
}


export type TypeLoginResonse = {
    messgae:string;
    user:string;
}

export type TypeAdminLoginPayload = {
    email:string|null;
}


export type TypeBooking = {
    _id:string;
    adultCount:number;
    childCount:number;
    adultTotal:number;
    childTotal:number;
    totalAmount:number;
    bookingDate:string;
    bookingDateString:string;
    name:string;
    mobileNumber:string;
    email:string;
    bookingStatus:'pending' | 'confirmed' | 'completed' | 'cancelled' | 'payment not verified';
    ticketId:string;
    bookingId:string;
    ticketTitle:string;
    preference:string;
    service:string;
    payment:boolean;
    isQrGenerated:boolean;
    successToken?:string;
    bookingToken?:string;   
    createdAt:Date;
    updatedAt:Date;
}

export type TypeAdminAllBookingsResponse = {
    totalPage:number;
    bookings:TypeBooking[]
}

export type TypeAdminAllBookingsQueryArgs = {
    service:string;
    bookingStatus:string;
    page:string|number;
}

export type TypeQR = {
    _id:string;
    QrCode:string;
    title:string;
    Type:'Adult' | 'Child';
    isUsed:boolean;
    usedBy:string;
}