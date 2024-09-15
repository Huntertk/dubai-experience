import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeDateManage } from '../../utils/type';

export const dateManageApi = createApi({
    reducerPath:"dateManageApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/dates-manage"
    }),
    endpoints:(builder) => ({
        getBlockedDate:builder.query<TypeDateManage[], {service:string|undefined, ticketId:string|undefined}>({
            query:(params) => {
                return {
                    url:"/block-date",
                    params:{
                        service:params.service,
                        ticketId:params.ticketId
                    }
                }
            }
        }),
        addBlockDate:builder.mutation<TypeDateManage[], {service:string|undefined, ticketId:string|undefined, blockedDate:string}>({
            query:(body) => {
                return {
                    url:"/block-date",
                    method:"POST",
                    body:{
                        service:body.service,
                        ticketId:body.ticketId,
                        blockedDate:body.blockedDate
                    }
                }
            }
        }),
        deleteBlockDate:builder.mutation<TypeDateManage[], {id:string}>({
            query:(body) => {
                return {
                    url:"/block-date",
                    method:"DELETE",
                    body:{
                        id:body.id
                    }
                }
            }
        }),
        getBlockedTimeSlot:builder.query<string[], {ticketId:string|undefined, date:string}>({
            query:(params) => {
                return {
                    url:"/get-blocked-date-time-slot",
                    params:{
                        date:params.date,
                        ticketId:params.ticketId
                    }
                }
            }
        }),
        addBlockedTimeSlot:builder.mutation<{message:string}, {ticketId:string|undefined; date:string; service:string|undefined; timeSlot: string;}>({
            query:(body) => {
                return {
                    url:"/block-time-slot",
                    method:"POST",
                    body:{
                        date:body.date,
                        ticketId:body.ticketId,
                        service:body.service,
                        timeSlot:body.timeSlot
                    }
                }
            }
        }),
        deleteBlockedTimeSlot:builder.mutation<{message:string}, {ticketId:string|undefined; date:string; service:string|undefined; timeSlot: string;}>({
            query:(body) => {
                return {
                    url:"/delete-blocked-date-time-slot",
                    method:"POST",
                    body:{
                        date:body.date,
                        ticketId:body.ticketId,
                        service:body.service,
                        timeSlot:body.timeSlot
                    }
                }
            }
        }),
    })
})

export const {
    useGetBlockedDateQuery,
    useAddBlockDateMutation, 
    useDeleteBlockDateMutation,
    useLazyGetBlockedTimeSlotQuery,
    useAddBlockedTimeSlotMutation,
    useDeleteBlockedTimeSlotMutation
} = dateManageApi