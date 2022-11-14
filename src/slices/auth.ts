import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { login, register } from '../api/auth'


export const loginAsync = createAsyncThunk(
    'users/login',
    async (data: any) => {
        const user = await login(data);
        return user
    }
)
export const registerAsync = createAsyncThunk(
    'users/register',
    async (data: any) => {
        const user = await register(data);
        console.log('user', user);
        return user
    }
)

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
