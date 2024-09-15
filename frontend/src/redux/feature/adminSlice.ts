import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypeAdminLoginPayload } from '../type';


// Define a type for the slice state
type TypeAdminState = {
    adminEmail:string|null;
}

// Define the initial state using that type
const initialState: TypeAdminState = {
    adminEmail:null
}


export const adminSlice = createSlice({
    name: 'admin',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        adminLoginSuccess:(state, action: PayloadAction<TypeAdminLoginPayload>) => {
            state.adminEmail = action.payload.email
        }
    }
})


export const {adminLoginSuccess} = adminSlice.actions;
export default adminSlice.reducer;