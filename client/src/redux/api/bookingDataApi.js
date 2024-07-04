import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/query/react';

export const bookingDataApi = createApi({
    reducerPath:"bookingDataApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/api/v1"
    }),
    keepUnusedDataFor:30,
    endpoints: (builder) => ({
        getBookingData: builder.query({
            query:(params) => {
                return{
                    url: '/booking',
                    params:{
                        "service":params.service,
                        "page":params.page,
                        "bookingStatus":params.bookingStatus
                    }
                }
            },
        }),
        getSuccessBookingData: builder.query({
            query:(params) => {
                return{
                    url: '/booking/success',
                    params:{
                        token:params.token
                    }
                }
            },
        }),
    })
})


export const {useGetBookingDataQuery, useGetSuccessBookingDataQuery} = bookingDataApi
