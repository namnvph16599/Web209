import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from '../slices/counter';
import productSlice from '../slices/products';
import { productsApi } from '../slicesApi/products';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice,
    [productsApi.reducerPath]: productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;