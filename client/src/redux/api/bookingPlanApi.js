import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/query/react';

export const bookingPlanApi = createApi({
    reducerPath:"bookingPlanApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/api/v1/bookingplan"
    }),
    endpoints: (builder) => ({
        getBookingPlanData: builder.query({
            query:(params) => {
                return{
                    url: '/getallbookingplan',
                    params:{
                        "service":params.service,
                    }
                }
            },
        }),
    })
})


export const {useGetBookingPlanDataQuery} = bookingPlanApi
