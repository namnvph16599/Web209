import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from '../slices/counter';
import productSlice from '../slices/products';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;