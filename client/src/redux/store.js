import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from './features/bookingSlice'
import adminReducer from './features/adminSlice'
import { adminAuthApi } from './api/adminAuthApi'
import bookingDetailsReducer from './features/bookingDetailsSlice';
import { bookingDataApi } from './api/bookingDataApi';
import { bookingPlanApi } from './api/bookingPlanApi';
export const store = configureStore({
    reducer:{
        booking: bookingReducer,
        admin: adminReducer,
        bookingDetails: bookingDetailsReducer,
        [adminAuthApi.reducerPath]: adminAuthApi.reducer,
        [bookingDataApi.reducerPath]:bookingDataApi.reducer,
        [bookingPlanApi.reducerPath]: bookingPlanApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        adminAuthApi.middleware,
        bookingDataApi.middleware,
        bookingPlanApi.middleware
    ])
})