import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import toast from 'react-hot-toast';


const initialState = {
    adultCount:0,
    childCount:0,
    adultTotal: 0,
    childTotal: 0,
    totalAmount: 0,
    isPaxModal: false,
    loading: false,
    totalAmount: 0,
    bookingDate: "",
    bookingDateString:"",
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
    responseClientUrl:"",
    type:"",
    totalBookingsCount: 0,
    bookingDay: "",
    bookingId:"",
    bookingTitle:"",
    pricing:{},
    prefrenceOpt:[],
    service:"",
    bookingPlanId:"",
    timeSlots:[],
    timeSlot:""
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
        },
        adultTotalAmount: (state) => {
            if(state.pref === "General Admission") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekEnds.adult
                } else {
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekDays.adult
                }
            } else if(state.pref === "Tickets to AYA Universe") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekEnds.adult
                } else {
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekDays.adult
                }
            } else if(state.pref === "Tickets to The Lost Chambers Aquarium") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekEnds.adult
                } else {
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekDays.adult
                }
            } else if(state.pref === "Non-Prime Hours") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekEnds.adult
                } else {
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekDays.adult
                }
            }  else if(state.pref === "Prime Hours") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekEnds.adult
                } else {
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekDays.adult
                }
            }
        },
        childTotalAmount: (state) => {
            if(state.pref === "General Admission") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){

                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekEnds.child
                } else {
                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekDays.child
                }
            } else if(state.pref === "Tickets to AYA Universe") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){

                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekEnds.child
                } else {
                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekDays.child
                }
            } else if(state.pref === "Tickets to The Lost Chambers Aquarium") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){

                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekEnds.child
                } else {
                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekDays.child
                }
            } else if(state.pref === "Non-Prime Hours") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){

                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekEnds.child
                } else {
                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekDays.child
                }
            } else if(state.pref === "Prime Hours") {
                if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){

                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekEnds.child
                } else {
                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekDays.child
                }
            }
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal
            state.bookingResponse = ""
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = "",
            state.bookingDateString = action.payload.selectedBookingDateString
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
        },
        selectingTimeSlot:(state, action) => {
            state.timeSlot = action.payload.timeSlot
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            toast.error("Booking Cancel")
            return state = initialState
        }, 
        bookingStart: (state,action) =>{
            state.loading  = true
            state.bookingResponse = ""
            
        },
        setPreference: (state, action) => {
            state.pref = action.payload.pref
        },
        bookingSucess: (state, action) => {
            state.loading  = false
            state.name = action.payload.name
            state.email = action.payload.email
            state.mobileNumber = action.payload.mobileNumber
            state.bookingResponse = action.payload.bookingResponse
            state.totalBookingsCount = action.payload.totalBookingsCount
            state.responseClientUrl = action.payload.responseClientUrl
            setBookingDetailsFromLocalStorage(state)
        },
        bookingFailed: (state, action) => {
            state.loading = false
            toast.error("Booking Failed")
        },
        bookingConfirm: (state, action) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
        choosingBooking: (state, action) => {
            state.type = action.payload.type
            state.bookingTitle = action.payload.title,
            state.pricing = action.payload.pricing,
            state.prefrenceOpt = action.payload.preference,
            state.service = action.payload.service
            state.bookingPlanId = action.payload.bookingPlanId
            state.timeSlots = action.payload.timeSlots
        },
        settingBookingResponse: (state, action) => {
            state.bookingResponse = ""
            state.bookingId = action.payload.createBookingId
            setBookingDetailsFromLocalStorage(state)
        },
        initialRender: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
    }
})

export const {
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    adultTotalAmount,
    childTotalAmount,
    countTotalBookingAmount, 
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking,
    bookingFailed,
    bookingSucess,
    bookingStart,
    bookingConfirm,
    choosingBooking,
    settingBookingResponse,
    initialRender,
    setPreference,
    selectingTimeSlot
} = bookingSlice.actions

export default bookingSlice.reducer