import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {}
    },
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { saveUser } = authSlice.actions;
export default authSlice.reducer
