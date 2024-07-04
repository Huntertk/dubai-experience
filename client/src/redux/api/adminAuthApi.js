import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/query/react';
import { adminLoginSuccess } from '../features/adminSlice';

export const adminAuthApi = createApi({
    reducerPath:"adminAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/api/v1/admin"
    }),
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (body) => {
                return{
                    url:"/login",
                    method:"POST",
                    body
                }
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try {
                    const {data} = await queryFulfilled
                    dispatch(adminLoginSuccess(data.user))
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        getAdminData: builder.query({
            query:() => '/admin-data',
            async onQueryStarted (args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(adminLoginSuccess(data.admin.email))
                } catch (error) {
                    console.log(error);   
                    dispatch(adminLoginSuccess(""))
                }
            }
        }),
    })
})


export const {useAdminLoginMutation, useGetAdminDataQuery} = adminAuthApi
