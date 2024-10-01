import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeQR } from '../type';
import { TypeCreateQRInputPayload } from '../../utils/type';

export const qrApi = createApi({
    reducerPath:"qrApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/qr"
    }),
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
        createTicketQr:builder.mutation<{message:string}, TypeCreateQRInputPayload>({
            query:(data) => {
                return {
                    url:"/create",
                    method:"POST",
                    body:data,
                    
                }
            }
        }),
    })
})

export const {useAddTicketQrMutation, useGetQrDataQuery, useCreateTicketQrMutation} = qrApi