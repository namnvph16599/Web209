import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counter from '../slices/counter'
import AuthSlices from '../slices/auth'
export const store = configureStore({
    reducer: {
        counterSlice: counter,
        auth: AuthSlices
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;