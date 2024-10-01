import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeBookingTicket, TypeResponseTitleAndService } from '../../utils/type';

export const ticketApi = createApi({
    reducerPath:"ticketApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/ticket"
    }),
    endpoints:(builder) => ({
        getServiceTicket:builder.query<TypeBookingTicket[], {service:string|undefined}>({
            query:(params) => {
                return {
                    url:"/get-service-tickets",
                    params:{
                        service:params.service,
                    }
                }
            }
        }),
        getTicket:builder.query<TypeBookingTicket, {service:string|undefined, id:string|undefined}>({
            query:(params) => {
                return {
                    url:"/get-ticket",
                    params:{
                        service:params.service,
                        id:params.id
                    }
                }
            }
        }),
        getTicketTitleAndService:builder.query<TypeResponseTitleAndService[],{}>({
            query:() => {
                return {
                    url:"/get-ticket-title-service",
                }
            }
        }),
    })
})

export const {useGetServiceTicketQuery, useGetTicketQuery, useGetTicketTitleAndServiceQuery} = ticketApi