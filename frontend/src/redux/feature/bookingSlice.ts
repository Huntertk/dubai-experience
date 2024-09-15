import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypePreferenceOption, TypeSelectingDate, TypeSelectingPreference, TypeSelectingTicket } from '../type';
import { TypeTicketPricing } from '../../utils/type';



// Define a type for the slice state
type BookingState = {
    adultCount: number;
    childCount:number;
    adultTotal:number;
    childTotal:number;
    totalAmount:number;
    bookingDate:string;
    bookingDateString:string;
    bookingDay:string;
    name:string;
    email:string;
    mobileNumber:string;
    ticketId:string;
    ticketTitle:string;
    service:string;
    pricing:TypeTicketPricing[]
    preference:string;
    preferenceIndex:number;
    timeSlots:string[];
    timeSlot:string;
    preferenceOption:TypePreferenceOption[];
    isPaxModalOpen:boolean
}

// Define the initial state using that type
const initialState: BookingState = {
  adultCount: 0,
  childCount:0,
  adultTotal:0,
  childTotal:0,
  totalAmount:0,
  email:"",
  name:"",
  mobileNumber:"",
  preference:"",
  service:"",
  ticketId:"",
  ticketTitle:"",
  pricing:[],
  bookingDate:"",
  bookingDateString:"",
  bookingDay:"",
  preferenceIndex:0,
  preferenceOption:[],
  timeSlot:"",
  timeSlots:[],
  isPaxModalOpen:false
}

export const bookingSlice = createSlice({
  name: 'booking',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementAdultCount: (state) => {
      state.adultCount += 1;
    },
    decrementAdultCount: (state) => {
      state.adultCount -= 1
    },
    incrementChildCount: (state) => {
        state.childCount += 1
    },
    decrementChildCount: (state) => {
        state.childCount -= 1
    },
    adultTotalCount:(state) => {
        if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
          state.adultTotal = state.adultCount *  state.pricing[state.preferenceIndex].weekEnds.adult
        } else {
          state.adultTotal = state.adultCount *  state.pricing[state.preferenceIndex].weekDays.adult
        }
        
    },
    childTotalCount:(state) => {
      if(state.bookingDay === 'Fri' || state.bookingDay === 'Sat' || state.bookingDay === 'Sun'){
        state.childTotal = state.childCount *  state.pricing[state.preferenceIndex].weekEnds.child
      } else {
        state.childTotal = state.childCount *  state.pricing[state.preferenceIndex].weekDays.child
      }
    },
    countTotalBookingAmount: (state) => {
      state.totalAmount = state.adultTotal + state.childTotal
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    selectingTicket: (state, action: PayloadAction<TypeSelectingTicket>) => {
      state.service = action.payload.service
      state.ticketId = action.payload.ticketId
      state.pricing = action.payload.pricing 
      state.preferenceOption = action.payload.preferenceOption
      state.ticketTitle = action.payload.ticketTitle
      state.timeSlots = action.payload.timeSlots
    },
    selectingPreference: (state, action: PayloadAction<TypeSelectingPreference>) => {
      state.preference = action.payload.preference;
      state.preferenceIndex = action.payload.preferenceIndex
    },
    selectingDate: (state, action: PayloadAction<TypeSelectingDate>) => {
      state.bookingDate = action.payload.bookingDate;
      state.bookingDay = action.payload.bookingDay;
      state.bookingDateString = action.payload.bookingDateString;
    },
    proceedingToThePaxContainer:(state, action:PayloadAction<{isPaxModalOpen:boolean}>) => {
      state.isPaxModalOpen = action.payload.isPaxModalOpen
    },
    selectingTimeSlot:(state, action:PayloadAction<{timeSlot:string}>) => {
      state.timeSlot = action.payload.timeSlot
    },

    cancelBooking: (state) => {
      state.adultCount = 0;
      state.childCount = 0;
      state.adultTotal = 0;
      state.childTotal = 0;
      state.totalAmount = 0;
      state.email = "";
      state.name = "";
      state.mobileNumber = "";
      state.preference = "";
      state.service = "";
      state.ticketId = "";
      state.ticketTitle = "";
      state.pricing = [];
      state.bookingDate = "";
      state.preferenceOption = [];
      state.isPaxModalOpen = false;
    }

  },
})

export const { 
    decrementAdultCount,
    decrementChildCount,
    incrementAdultCount,
    incrementChildCount,
    selectingTicket,
    selectingDate,
    selectingPreference,
    proceedingToThePaxContainer,
    cancelBooking,
    adultTotalCount,
    childTotalCount,
    countTotalBookingAmount,
    selectingTimeSlot

 } = bookingSlice.actions

export default bookingSlice.reducer