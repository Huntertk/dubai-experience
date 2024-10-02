import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeQR } from '../type';
import { TypeCreateQRInputPayload, TypeUpdateQRInputPayload } from '../../utils/type';

export const qrApi = createApi({
    reducerPath:"qrApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/qr"
    }),
    tagTypes:["getServiceAndTitle"],
    endpoints:(builder) => ({
        addTicketQr:builder.mutation<{message:string}, FormData>({
            query:(formData) => {
                return {
                    url:"/add",
                    method:"POST",
                    body:formData,
                    
                }
            }
        }),
        getQrData: builder.query<TypeQR[], {id:string|undefined, isUsedQr:boolean}>({
            query:(params) => {
                return{
                    url: '/ticket-qr',
                    params:{
                        id: params.id,
                        isUsedQr:params.isUsedQr
                    }
                }
            },
        }),
        getSingleQr: builder.query<TypeQR, {id:string|undefined}>({
            query:(params) => {
                return{
                    url: '/single-qr',
                    params:{
                        id: params.id
                    }
                }
            },
            providesTags:["getServiceAndTitle"]
        }),
        createTicketQr:builder.mutation<{message:string}, TypeCreateQRInputPayload>({
            query:(data) => {
                return {
                    url:"/create",
                    method:"POST",
                    body:data,
                    
                }
            }
        }),
        updateTicketQr:builder.mutation<{message:string}, TypeUpdateQRInputPayload>({
            query:(data) => {
                return {
                    url:"/update-single-qr",
                    method:"PUT",
                    body:data,
                    
                }
            },
            invalidatesTags:["getServiceAndTitle"]
        }),
        deleteTicketQr:builder.mutation<{message:string}, {id:string}>({
            query:(data) => {
                return {
                    url:"/delete",
                    method:"POST",
                    body:data,
                    
                }
            }
        }),
    })
})

export const {
    useAddTicketQrMutation,
    useGetQrDataQuery,
    useCreateTicketQrMutation,
    useDeleteTicketQrMutation,
    useGetSingleQrQuery,
    useUpdateTicketQrMutation
} = qrApi