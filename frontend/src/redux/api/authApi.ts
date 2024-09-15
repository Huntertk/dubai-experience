import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeLoginInput, TypeLoginResonse } from '../type';
import { adminLoginSuccess } from '../feature/adminSlice';



export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1/admin"
    }),
    endpoints:(builder) => ({
        login:builder.mutation<TypeLoginResonse, TypeLoginInput>({
            query:(body) => {
                return {
                    url:"/login",
                    method:"POST",
                    body
                }
            },
            async onQueryStarted({}, {dispatch, queryFulfilled}){
                try {
                    const {data} = await queryFulfilled
                    dispatch(adminLoginSuccess({email:data.user}))
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        getAdminData: builder.query<{email:string}, {}>({
            query:() => '/admin-data',
            async onQueryStarted ({}, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(adminLoginSuccess({email:data.email}))
                } catch (error) {
                    dispatch(adminLoginSuccess({email:null}))
                }
            }
        }),
        logoutAdmin:builder.query({
            query:() => {
                return {
                    url:"/logout",
                }
            }
        }),
    })
})

export const {useLoginMutation, useGetAdminDataQuery, useLazyLogoutAdminQuery} = authApi