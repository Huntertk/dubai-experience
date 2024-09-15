import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeAdminAllBookingsQueryArgs, TypeAdminAllBookingsResponse, TypeBooking } from '../type';



export const bookingApi = createApi({
    reducerPath:"bookingApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/booking"
    }),
    endpoints:(builder) => ({
        getAllBooking:builder.query<TypeAdminAllBookingsResponse, TypeAdminAllBookingsQueryArgs>({
            query:(params) => {
                return {
                    url:"/admin/all-bookings",
                    params:{
                        service:params.service,
                        bookingStatus:params.bookingStatus,
                        page:params.page
                    }
                }
            }
        }),
        getSuccessBooking:builder.query<TypeBooking, {token:string}>({
            query:(params) => {
                return {
                    url:"/success",
                    params:{
                        token:params.token
                    }
                }
            }
        }),
        searchBooking:builder.query<TypeAdminAllBookingsResponse, {search:string}>({
            query:(params) => {
                return {
                    url:"/admin/all-bookings",
                    params:{
                        search:params.search
                    }
                }
            }
        }),
    })
})

export const {useGetAllBookingQuery, useLazySearchBookingQuery, useGetSuccessBookingQuery} = bookingApi