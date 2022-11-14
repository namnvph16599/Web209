import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../slices/counter'
import ProductsSlice from '../slices/products'
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    counter: CounterSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch