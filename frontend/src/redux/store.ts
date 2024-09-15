import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './feature/bookingSlice';
import adminReducer from './feature/adminSlice';
import { ticketApi } from './api/ticketApi';
import { dateManageApi } from './api/dateManageApi';
import { checkoutApi } from './api/checkoutApi';
import { authApi } from './api/authApi';
import { bookingApi } from './api/bookingApi';
import { qrApi } from './api/qrApi';


export const store = configureStore({
    reducer: {
        booking:bookingReducer,
        admin:adminReducer,
        [ticketApi.reducerPath]:ticketApi.reducer,
        [dateManageApi.reducerPath]:dateManageApi.reducer,
        [checkoutApi.reducerPath]:checkoutApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        [bookingApi.reducerPath]:bookingApi.reducer,
        [qrApi.reducerPath]:qrApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        ticketApi.middleware,
        dateManageApi.middleware,
        checkoutApi.middleware,
        authApi.middleware,
        bookingApi.middleware,
        qrApi.middleware,
    ])
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch