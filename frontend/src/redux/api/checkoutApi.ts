import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeBookingInput } from '../type';

type TypeCheckoutResonse = {
    success:boolean;
    url:string;
}

export const checkoutApi = createApi({
    reducerPath:"checkoutApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/booking"
    }),
    endpoints:(builder) => ({
        createCheckoutSession:builder.mutation<TypeCheckoutResonse, TypeBookingInput>({
            query:(body) => {
                return {
                    url:"/create-session",
                    method:"POST",
                    body
                }
            }
        })
    })
})

export const {useCreateCheckoutSessionMutation} = checkoutApi