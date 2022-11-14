import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { login, register } from '../api/auth'
import { IAuthSave } from '../interfaces/auth';


export const loginAsync = createAsyncThunk(
    'users/login',
    async (data: any, { rejectWithValue }) => {
        try {
            const user = await login(data);
            return user
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const registerAsync = createAsyncThunk(
    'users/register',
    async (data: any, { rejectWithValue }) => {
        try {
            const user = await register(data);
            return user
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            logged: false,
        },
        error: false,
        message: ''
    },
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload
        },
        refreshUser: (state) => {
            state.user = {
                logged: false,
            }
        },
        refreshError: (state) => {
            state.error = false;
            state.message = ''
        }
    },
    extraReducers: {
        [registerAsync.rejected.type]: (state: any, action: any) => {
            state.error = true;
            state.message = action.payload
        },
        [registerAsync.fulfilled.type]: (state: any, action: any) => {
            const { data: { accessToken, user: data } } = action.payload
            const user: IAuthSave = {
                displayName: data.displayName,
                email: data.email,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIdr7HcfjPdwSAGPtaGRxlaM7d-PaAJdX9Q&usqp=CAU',
                emailVerified: false,
                id: data.id,
                tokenId: accessToken,
                logged: true,
                loginWithGG: false,
            }
            state.user = user
        },
        [loginAsync.rejected.type]: (state: any, action: any) => {
            state.error = true;
            state.message = action.payload
        },
        [loginAsync.fulfilled.type]: (state: any, action: any) => {
            const { data: { accessToken, user: data } } = action.payload
            const user: IAuthSave = {
                displayName: data.displayName,
                email: data.email,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIdr7HcfjPdwSAGPtaGRxlaM7d-PaAJdX9Q&usqp=CAU',
                emailVerified: false,
                id: data.id,
                tokenId: accessToken,
                logged: true,
                loginWithGG: false,
            }
            state.user = user
        },
    },

})
export const { saveUser, refreshError, refreshUser } = authSlice.actions;
export default authSlice.reducer
